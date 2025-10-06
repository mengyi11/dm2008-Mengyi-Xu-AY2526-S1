function setup() {
  createCanvas(400, 400);
  
  rectMode(CENTER);
  angleMode(DEGREES); // 用角度
}

function draw() {
  background(220);

  for (let i = 0; i < 8; i++) {
    let angle = i * 45;
    myShape(width/2, height/2, 80, angle, 30);
  }
}

function myShape(x, y, len, angle, size) {
  push();
  translate(x, y);
  rotate(angle);

  stroke(0);
  line(0, 0, len, 0);

  translate(len, 0);

  rotate(45);

  rect(0, 0, size, size);

  pop();
}