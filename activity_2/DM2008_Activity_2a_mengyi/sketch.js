// DDM2008 — Activity 2a
// (Mode Switch, 20 min)

let x = 200;     
let dx = 3;      
let size = 50;  
let bgColor;

function setup() {
  createCanvas(400, 400);
  bgColor = color(220);
}

function draw() {
  background(bgColor);

  x += dx;

  if (x > width - size/2 || x < size/2) {
    dx = -dx; 
  }

  fill(0);
  ellipse(x, height/2, size);
}

function keyPressed() {
  switch (key) {
    case '1':
      bgColor = color(200, 100, 100); // red
      size = 100;
      dx = 10;
      break;
    case '2':
      bgColor = color(100, 200, 100); // green
      size = 10;
      dx = 40;
      break;
    case '3':
      bgColor = color(100, 100, 200); // blue
      size = 50;
      dx = 3;
      break;
    default:
      bgColor = color(220);           // grey
  }
}