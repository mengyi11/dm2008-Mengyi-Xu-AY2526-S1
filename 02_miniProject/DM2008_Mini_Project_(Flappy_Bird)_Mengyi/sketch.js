// DM2008 — Mini Project
// FLAPPY BIRD (Starter Scaffold)

// Notes for students:
// 1) Add flap control in handleInput() (space / ↑ to jump)
// 2) Detect collisions between the bird and pipes → game over
// 3) Add scoring when you pass a pipe
// 4) (Stretch) Add start/pause/game-over states

/* ----------------- Globals ----------------- */
let bird;
let pipes = [];

let spawnCounter = 0;      // simple timer
const SPAWN_RATE = 90;     // ~ every 90 frames at 60fps ≈ 1.5s
const PIPE_SPEED = 2.5;
const PIPE_GAP = 200;      // gap height (try 100–160)
const PIPE_W = 60;
let score = 0;

let gameState = "start"; // start, play, gameover


function preload() {
  jump_sound = loadSound("./assets/jump.mp3");
  lose_sound = loadSound("./assets/lose.mp3");
  coin_sound = loadSound("./assets/coin.mp3");
}

/* ----------------- Setup & Draw ----------------- */
function setup() {
  createCanvas(480, 640);
  noStroke();
  bird = new Bird(120, height / 2);
  // Start with one pipe so there’s something to see
  pipes.push(new Pipe(width + 40));
}

function draw() {


  background(18, 22, 28);


  if (gameState === "gameover") {
    fill(255, 80, 80);
    textSize(40);
    text("GAME OVER", width / 4, height / 2 - 40);
    textSize(24);
    text("Score: " + score, width / 4, height / 2 + 10);
    text("Press R to Restart", width / 4, height / 2 + 50);
    return;
  }



  // 1) read input (students: add flap control here)
  handleInput();

  // 2) update world
  bird.update();

  // spawn new pipes on a simple timer
  spawnCounter++;
  if (spawnCounter >= SPAWN_RATE) {
    pipes.push(new Pipe(width + 40));
    spawnCounter = 0;
  }

  // update + draw pipes
  for (let i = pipes.length - 1; i >= 0; i--) {
    let p = pipes[i];
    p.update();
    p.show();

    // TODO (students): collision check with bird
    // If collision → stop the game or reset (add a game state if you want)
    // if (pipes[i].hits(bird)) { /* game over logic here */ }
    if (p.hits(bird)) {
      lose_sound.play()
      gameState = "gameover";
    }

    if (!p.passed && p.x + p.w < bird.pos.x) {
      score++;
      coin_sound.play();
      p.passed = true;
    }

    // remove pipes that moved off screen
    if (p.offscreen()) {
      pipes.splice(i, 1);
    }
  }

  // 3) draw bird last so it’s on topr
  bird.show();

  fill(255);
  textSize(28);
  text(score, width / 2, 50);

}

/* ----------------- Input ----------------- */
// function handleInput() {
//   // TODO (students): make the bird flap on key press
//   // Hints:
//   // - In keyPressed(): call bird.flap();
//   // - Or here: if (keyIsDown(32)) bird.flap(); // 32 = space
// }

// function keyPressed() {
//   // (Student choice) Uncomment to flap on space or UP:
//   if (key === ' ') { bird.flap(); }
//   if (keyCode === UP_ARROW) { bird.flap(); }
// }
function handleInput() {
  if (keyIsDown(32)) {
    if (gameState === "start") {
      gameState = "play";
    } else if (gameState === "play") {
      bird.flap();
    }
  }
}

function keyPressed() {
  if (key === ' ' && gameState === "play") {
    bird.flap();
    jump_sound.play()
  }
  if (keyCode === UP_ARROW && gameState === "play") {
    bird.flap();
    jump_sound.play()
  }
  // R 键重开
  if (key === 'r' || key === 'R') {
    if (gameState === "gameover") {
      resetGame();
    }
  }
}

/* ----------------- Classes ----------------- */
class Bird {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = 16;              // for collision + draw
    this.gravity = 0.45;      // constant downward force
    this.flapStrength = -5.0; // negative = upward
  }

  applyForce(fy) {
    this.acc.y += fy;
  }

  flap() {
    // instant upward kick
    this.vel.y = this.flapStrength;
  }

  update() {
    // gravity
    this.applyForce(this.gravity);

    // integrate
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    // keep inside canvas vertically (simple constraints)
    if (this.pos.y < this.r) {
      this.pos.y = this.r;
      this.vel.y = 0;
    }
    if (this.pos.y > height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y = 0;
      // TODO (students): treat touching the ground as game over
    }
  }

  show() {
    fill(255, 205, 80);
    circle(this.pos.x, this.pos.y, this.r * 2);
    // (Optional) add a small eye
    fill(40);
    circle(this.pos.x + 6, this.pos.y - 4, 4);
  }
}

class Pipe {
  constructor(x) {
    this.x = x;
    this.w = PIPE_W;
    this.speed = PIPE_SPEED;

    // randomize gap position
    const margin = 40;
    const gapY = random(margin, height - margin - PIPE_GAP);

    this.top = gapY;                 // bottom of top pipe
    this.bottom = gapY + PIPE_GAP;   // top of bottom pipe

    this.passed = false; // for scoring once per pipe
  }

  update() {
    this.x -= this.speed;
  }

  show() {
    fill(120, 200, 160);
    rect(this.x, 0, this.w, this.top);                   // top pipe
    rect(this.x, this.bottom, this.w, height - this.bottom); // bottom pipe
  }

  offscreen() {
    // look at MDN to understand what 'return' does
    // we will learn more about this in Week 6
    return (this.x + this.w < 0);
  }


  hits(bird) {
    const withinX = (bird.pos.x + bird.r > this.x) && (bird.pos.x - bird.r < this.x + this.w);
    const aboveGap = bird.pos.y - bird.r < this.top;
    const belowGap = bird.pos.y + bird.r > this.bottom;
    return withinX && (aboveGap || belowGap);
  }


  // TODO (students): circle-rect collision (simple)
  // 1) Check if bird within pipe's x range.
  // 2) If yes, check if bird.y is outside the gap (above top OR below bottom).
  //    Then it’s a hit.
  //
  // hits(bird) {
  //   const withinX = (bird.pos.x + bird.r > this.x) && (bird.pos.x - bird.r < this.x + this.w);
  //   const aboveGap = bird.pos.y - bird.r < this.top;
  //   const belowGap = bird.pos.y + bird.r > this.bottom;
  //   return withinX && (aboveGap || belowGap);
  // }
}

function resetGame() {
  pipes = [];
  score = 0;
  spawnCounter = 0;
  bird = new Bird(120, height / 2);
  pipes.push(new Pipe(width + 40));
  gameState = "start";
}