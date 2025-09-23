// DM2008 — Activity 3a
// (Array Sampler, 25 min)

// 1. Create an array of colors (or other values)
//    You can make more than one array if you'd like
let palette = ["#f06449", "#009988", "#3c78d8", "#ffeb3b", "#ffeb3b"];
let size = [];

// 2. A variable to track the current index
let currentIndex = 0;

function setup() {
  createCanvas(400, 400);
  // noStroke();
 
}

function draw() {
  background(220);

  // 3. Use the array value at currentIndex
  // fill(palette[currentIndex]);
  // ellipse(width/2, height/2, 200);
 for (let i = 0; i < palette.length; i++) {
    size.push(random(30, 100));
  }
  for (let i = 0; i < palette.length; i++) {
    // fill(palette[i]);
    const x = (width / (palette.length + 1)) * (i + 1); // position from the loop index
    // const size = random(20,60)
    noFill();
    strokeWeight(4);
    stroke(palette[i]);
    ellipse(x, height / 2, size[i]);
  }
}

function mouseDragged() {
  if (mouseX > width / 2) {
    palette.push(random(200), random(100), random(255));
    size.push(random(30, 100));
  } else {
    if (palette.length > 0) {
      palette.splice(palette.length - 1, 1);
      size.splice(palette.length - 1, 1)
    }
  }
}

/* 
TODOs for students:
1. Replace colors with your own data (positions, text, sizes, etc).
2. Try mousePressed() instead of keyPressed().
3. Use push() to add new items, or splice() to remove them, then check how the sketch adapts.
4. Try looping through an array to visualize all the items within it instead of accessing one item at a time.
*/
