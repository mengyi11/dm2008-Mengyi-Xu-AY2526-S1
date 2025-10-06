let cellSize = 20;       
let numRows = 9;        
let s = 0.05;           
let amplitude = 50;      
let time = 0;           

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(240);
  time += s;

  let rowHeight = height / numRows; 

  for (let j = 0; j < numRows; j++) {
    let waveOffset = sin(time + j * 1.5) * amplitude; 

    for (let i = 0; i < width; i += cellSize) {
      let drawX = i + waveOffset;
      fill(i / cellSize % 2 == 0 ? '#314a65' : '#d9c7a3');
      rect(drawX, j * rowHeight, cellSize, rowHeight);

      // --- 鼠标互动 ---
      if (mouseIsPressed) {
        fill(255,230,230);
        rect(drawX, j * rowHeight, cellSize, rowHeight);
      }
    }
  }
}