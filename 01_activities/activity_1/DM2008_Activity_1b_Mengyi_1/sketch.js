// DM2008
// Activity 1b (Georg Nees)

let x;
let y;
let w;

function setup() {
  createCanvas(800, 800);
  background(240);
}

function draw() {
  x = random(width);
  y = random(height);
  w = random(30, 50);
  h = random(30, 50);
  noStroke();
  let colors = ["#FF0000",   
  "#FF69B4",   
  "#FF00FF",   
  "#DC143C",  
  "#FFA500",   
  "#FF7F50",   
  "#FF8C00",  
  "#FFFF00",  
  "#FFFACD",   
  "#7CFC00",   
  "#00FFFF", 
  "#98FF98",   
  "#50C878",   
  "#87CEFA",   
  "#4B0082",  
  "#0000FF",   
  "#D8BFD8",   
  "#E6E6FA",   
  "#FFB6C1",   
  "#8B4513",   
  "#CD853F",   
  "#D3D3D3",   
  "#000000",   
               ];
  let c = random(colors);
  fill(c);
  rect(x, y, w, h);
}

function keyPressed() {
  saveCanvas("activity1b-image-1", "jpg");
}
