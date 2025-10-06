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
  noStroke();
  fill(255, 178, 102);
  ellipse(535, 180, 170, 85);
  rect(450, 150, 80, 350, 60);
  rect(205, 420, 330, 160, 120);
  
  quad(275,560,300,560,292,690,282,690);
  quad(330,560,350,560,345,660,337,660);
  quad(410,560,435,560,418,690,410,690);
  quad(460,570,485,570,478,660,470,660);
  
  fill(0,0,0)
  quad(282,680,293,680,292,690,282,690);
  quad(336,650,345,650,345,660,337,660);
  quad(410,680,420,680,418,690,410,690);
  quad(469,650,478,650,478,660,470,660);

  
  
  fill(255, 178, 102);
  rect(490, 100, 30, 70, 40);
  rect(530, 100, 30, 70, 40);
  
  fill(0,0,0)
  circle(525, 160, 10);
  circle(560, 160, 10);
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(550, 190, 90, 30, 0, PI);
  
  fill(200, 120, 0); 
  noStroke();
  ellipse(465, 255, 30, 40);
  ellipse(515, 320, 35, 44);
  ellipse(380, 440, 65, 40);
  ellipse(510, 455, 40, 45);
  ellipse(235, 470, 40, 50);
  ellipse(300, 570, 70, 30);
  ellipse(460, 555, 80, 50);
  helperGrid(); // do not edit or remove this line
}


