// DM2008 — Activity 4b
// Objects in Motion (60 min)

let agents = []; // array to hold many objects
let orbits = []; // array to hold many objects
const NUM_START = 6; // you can tweak this
let cols = 6;
let rows = 6;

function setup() {
  createCanvas(600, 400);
  noStroke();

  let spacingX = width / (cols + 1);
  let spacingY = height / (rows + 1);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = (i + 1) * spacingX;
      let y = (j + 1) * spacingY;

      let agent = new Agent(x, y, 20, 0, 0);
      agents.push(agent);
      orbits.push(new OrbitAgent(agent, 40));
    }
  }
}

function draw() {
  background(230);
  for (let a of agents) {
    a.show();
  }

  for (let o of orbits) {
    o.update();
    o.show();
  }
}

function mousePressed() {
  let size = random(16, 40);
  let speedX = random(-2, 2);
  let speedY = random(-2, 2);
  agents.push(new Agent(mouseX, mouseY, size, speedX, speedY));
}

function keyPressed() {
  // Example toggles—feel free to customize
  if (key === "C") {
    // clear all agents
    agents = [];
  }
}
class Agent {
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;

    this.dx = speedX;
    this.dy = speedY;

    this.hue = random(360);
    this.alpha = 200;

    this.life = 255; // use this if you want fade/shrink/remove behavior
  }

  update() {
    // Basic movement
    this.x += this.dx;
    this.y += this.dy;
  }

  show() {
    // Using RGB to keep it simple
    fill(50 + (this.hue % 200), 120, 200, this.alpha);
    ellipse(this.x, this.y, this.size);
  }
}

class OrbitAgent {
  constructor(agent, radius) {
    this.center = agent;
    this.radius = radius;
    this.size = 15;
    this.speed = random(0.02, 0.05)
    this.radius = 40;
    this.angle = frameCount * 0.001;
  }

  update() {
  this.angle += this.speed;
  this.x = this.center.x + cos(this.angle) * this.radius;
  this.y = this.center.y + sin(this.angle) * this.radius;
}

  show() {
    fill(0);
    ellipse(this.x, this.y, this.size);
  }
}


/* ============================
   TODO ideas (pick at least one):
   - Add a second method besides show(), e.g., bounce(), shrink(), changeColor()
   - Make one property evolve over time (size, hue, alpha, speed)
   - Add a key or mouse interaction that changes *all* agents (loop over array)
   - Implement removal: shrink agents and splice them when too small
============================= */
