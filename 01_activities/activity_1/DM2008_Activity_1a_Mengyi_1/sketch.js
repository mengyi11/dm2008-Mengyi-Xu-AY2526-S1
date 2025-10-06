// DDM2008
// Activity 1a Xu Mengyi

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature in the space provided

function setup() {}

function draw() {
  createCanvas(800, 800);
  background(255,230,230);

  fill(200, 100, 100);
  noStroke();
  rect(310, 350, 280, 80, 60);
  rect(390, 410, 60, 60, 0, 0, 20);
  rect(510, 410, 60, 60, 0, 0, 20);
  triangle(370, 300, 370, 350, 420, 350);
  triangle(410, 300, 410, 350, 460, 350);
  circle(593, 370, 25);
  let yMid = 410; 
  let amp = 4; 
  let step = 5;
  let prevX = 315; // start point x
  let prevY = yMid - step; // start point y
  stroke(1);
  strokeWeight(3)
  stroke(255,230,230);
  for (let x = prevX; x <= 350; x += step) {
    let y = Math.floor(x / step) % 2 != 0 ? yMid - amp : yMid + amp;
    line(prevX, prevY, x, y);
    prevX = x;
    prevY = y;
  }
  circle(365, 374, 20);
  helperGrid(); // do not edit or remove this line
}

function keyPressed() {
  saveCanvas("activity1a-image-1", "jpg");
}


