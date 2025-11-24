let port; // Serial Communication port
let connectBtn;

let numericValsensorVal = 0; // value from Arduino
let circleSize = 50; // size of circle
let currentBrightness = 100; // current background brightness
let targetBrightness = 100;  // brightness we want to reach
let sensorVal = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  port = createSerial(); // creates the Serial Port

  // Connection helpers
  connectBtn = createButton("Connect to Arduino");
  connectBtn.position(20, 20);
  connectBtn.mousePressed(connectBtnClick);
}

function draw() {
  if (port && port.opened()) {
    let data = port.readUntil("\n").trim();
    if (data && !isNaN(float(data))) {
      sensorVal = float(data);
    }
  }

  targetBrightness = map(sensorVal, 0, 1023, 0, 255);

  currentBrightness = lerp(currentBrightness, targetBrightness, 0.02);

  background(currentBrightness);
  fill(255 - currentBrightness);
  ellipse(width / 2, height / 2, circleSize);
}

// DO NOT REMOVE THIS FUNCTION
function connectBtnClick(e) {
  // If port is not already open, open on click,
  // otherwise close the port
  if (!port.opened()) {
    port.open(9600); // opens port with Baud Rate of 9600
    e.target.innerHTML = "Disconnect Arduino";
    e.target.classList.add("connected");
  } else {
    port.close();
    e.target.innerHTML = "Connect to Arduino";
    e.target.classList.remove("connected");
  }
}