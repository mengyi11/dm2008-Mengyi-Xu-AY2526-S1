let balls = [];

function setup() {
  createCanvas(400, 400);

  // Step 1: create two Ball objects
  balls.push(new Ball(100, 200));
  balls.push(new Ball(300, 200));
}

function draw() {
  background(230);

  // Step 2: update and display each ball
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    b.checkEdges();
    b.show();

    // Step 3: check collisions
    for (let j = i + 1; j < balls.length; j++) {
      b.checkCollision(balls[j]);
    }
  }
}

class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.r = 30;
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.col = color(100, 180, 220); // default color
  }

  move() {
    this.pos.add(this.vel);
  }

  checkEdges() {
    if (this.pos.x < this.r || this.pos.x > width - this.r) {
      this.vel.x *= -1; // bounce horizontally
    }
    if (this.pos.y < this.r || this.pos.y > height - this.r) {
      this.vel.y *= -1; // bounce vertically
    }
  }

  show() {
    fill(this.col);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  checkCollision(other) {
    let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    if (d < this.r + other.r) {
      // simple collision response: swap velocities
      let temp = this.vel.copy();
      this.vel = other.vel.copy();
      other.vel = temp;

      // visual feedback: change colors
      this.col = color(random(255), random(255), random(255));
      other.col = color(random(255), random(255), random(255));
    }
  }
}