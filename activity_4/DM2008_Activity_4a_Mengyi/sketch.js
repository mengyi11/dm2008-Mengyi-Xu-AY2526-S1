// DM2008 – Activity 4a
// Bake a Cookie (30 min)

let cookie;

function setup() {
  createCanvas(400, 400);
  noStroke();

  // Step 3: make one cookie object
  cookie = new Cookie("chocolate", 80, width / 2, height / 2);
  cookie2 = new Cookie("blueberry", 80, 100, 100);
}

function draw() {
  background(230);

  // Step 4: call the cookie’s show() method
  cookie.show();
  cookie2.show();
  
}

// Step 1: define the Cookie class
class Cookie {
  constructor(flavor, size, x, y) {
    // set up required properties
    this.flavor = flavor;
    this.size = size;
    this.x = x;
    this.y = y;
    this.color = (196, 146, 96);
  }

  // Step 2: display the cookie
  show() {
    
    fill(196, 146, 96)
    ellipse(this.x, this.y, this.size);
    const s = this.size * 0.1;
    fill(60);
    ellipse(this.x - this.size*0.22, this.y - this.size*0.15, s);
    ellipse(this.x + this.size*0.18, this.y - this.size*0.10, s);
    ellipse(this.x - this.size*0.05, this.y + this.size*0.12, s);
    ellipse(this.x + this.size*0.20, this.y + this.size*0.18, s);
  }

  // Steps 5 & 6: Implement additional methods here
  move(direction) {
    if (direction === "right") {
      this.x += 10;
    } else if (direction === "left") {
       this.x -= 10;
    }
  }
  
  changeColor(){
    // this.color = fill(random(0,200),random(0,200),random(0,200))
  }
}

// Step 5: add movement (keyboard arrows)
function keyPressed() {
  
}

// Step 6: add flavor randomizer (mouse click)
// function mousePressed() {}
