
let raindrops = [];

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 300; i++) {
    raindrops.push({
      x: random(width),
      y: random(-400, 0),
      w: random(2, 4),    // width
      h: random(10, 30),  // height
      speed: random(1, 7)
    });
  }
}

function draw() {
  
  background(64,64,64);
  fill(153, 255, 255);
  noStroke();

  let speedFactor = map(mouseY, 0, height, 0.3, 3);

  for (let drop of raindrops) {
    ellipse(drop.x, drop.y, drop.w, drop.h); 
    drop.y += drop.speed * speedFactor ; 

    if (drop.y > height) {
      drop.y = random(-100, 0);
      drop.x = random(width);
    }
  }
}
