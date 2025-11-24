let sizeSlider, shapeButton, colorPicker;
let alphaSlider, borderToggle, borderColorPicker, rotateToggle, posXSlider, posYSlider;
// Add: Background color picker variable
let bgColorPicker;
let controlPanel;

// Sketch variables
let shapeSize = 50;
let showCircle = true;
let shapeColor = "#5a5a5a";
let shapeAlpha = 255; // Shape opacity (0-255)
let showBorder = false; // Whether to show border
let borderColor = "#000000"; // Border color
let isRotating = false; // Whether to rotate
let shapeRotation = 0; // Rotation angle
let posX = 0, posY = 0; // Shape offset position
let rotationSpeed = 2; // Rotation speed
// Add: Background color variable (light blue white by default)
let bgColor = "#f7fafc";

// UI constants
const PANEL_BG = "#f0f4f8";
const PANEL_ACCENT = "#4a6fa5";
const CONTROL_BG = "#ffffff";
const HOVER_COLOR = "#e1e8ed";
const TEXT_COLOR = "#2d3748";
const LABEL_COLOR = "#718096";
const SLIDER_TRACK_COLOR = "#cbd5e1";
const SLIDER_THUMB_COLOR = "#4a6fa5";

function setup() {
  createCanvas(windowWidth, windowHeight);
  createUI();
  // Add global slider styles once to avoid duplication
  addGlobalSliderStyles();
}

function draw() {
  // Modify: Use custom background color variable
  background(bgColor);
  drawShape();
  // Rotation animation logic
  if (isRotating) {
    shapeRotation += rotationSpeed;
    if (shapeRotation > 360) shapeRotation = 0;
  }
}

// Create UI (add background color control)
function createUI() {
  controlPanel = createDiv();
  controlPanel.style(`background-color: ${PANEL_BG}`);
  controlPanel.style("padding: 20px");
  controlPanel.style("border-radius: 16px");
  controlPanel.style("box-shadow: 0 4px 12px rgba(0,0,0,0.1)");
  controlPanel.style("position: absolute");
  controlPanel.style("top: 20px");
  controlPanel.style("left: 20px");
  controlPanel.style("width: 280px"); // Widen panel to fit more controls
  controlPanel.style("font-family: 'Segoe UI', Roboto, sans-serif");
  controlPanel.style("z-index: 10");

  // Add: 0. Canvas background control section (placed at the top for clarity)
  const bgSection = createSection("Canvas Background", controlPanel);
  const bgLabel = createLabel("Background Color", bgSection);
  bgColorPicker = createColorPicker(bgColor); // Create background color picker
  styleColorPicker(bgColorPicker, bgSection); // Apply style
  // Update background color in real time
  bgColorPicker.input(() => {
    bgColor = bgColorPicker.value();
  });

  // 1. Basic Shape Controls section
  const basicSection = createSection("Basic Shape Controls", controlPanel);
  // Size slider
  const sizeLabel = createLabel("Shape Size: " + shapeSize + "px", basicSection);
  sizeSlider = createSlider(10, width/2, shapeSize, 1);
  styleSlider(sizeSlider, basicSection);
  sizeSlider.input(() => {
    shapeSize = sizeSlider.value();
    sizeLabel.html("Shape Size: " + shapeSize + "px");
  });
  // Shape toggle button
  shapeButton = createButton("Switch to Square");
  styleButton(shapeButton, basicSection);
  shapeButton.mousePressed(toggleShape);
  // Color picker
  const colorLabel = createLabel("Shape Color", basicSection);
  colorPicker = createColorPicker(shapeColor);
  styleColorPicker(colorPicker, basicSection);
  colorPicker.input(() => shapeColor = colorPicker.value());

  // 2. Visual Style Controls section
  const styleSection = createSection("Visual Style Controls", controlPanel);
  // Opacity slider
  const alphaLabel = createLabel("Opacity: " + Math.round(shapeAlpha/255*100) + "%", styleSection);
  alphaSlider = createSlider(0, 255, shapeAlpha, 1);
  styleSlider(alphaSlider, styleSection);
  alphaSlider.input(() => {
    shapeAlpha = alphaSlider.value();
    alphaLabel.html("Opacity: " + Math.round(shapeAlpha/255*100) + "%");
  });
  // Border toggle button
  borderToggle = createButton("Show Border");
  styleToggleButton(borderToggle, styleSection);
  borderToggle.mousePressed(() => {
    showBorder = !showBorder;
    borderToggle.html(showBorder ? "Hide Border" : "Show Border");
    // Show/hide border color picker
    borderColorPicker.elt.style.display = showBorder ? "block" : "none";
    borderColorLabel.elt.style.display = showBorder ? "block" : "none";
  });
  // Border color picker (hidden by default)
  const borderColorLabel = createLabel("Border Color", styleSection);
  borderColorLabel.elt.style.display = "none";
  borderColorPicker = createColorPicker(borderColor);
  styleColorPicker(borderColorPicker, styleSection);
  borderColorPicker.elt.style.display = "none";
  borderColorPicker.input(() => borderColor = borderColorPicker.value());

  // 3. Animation & Position Controls section
  const animSection = createSection("Animation & Position", controlPanel);
  // Rotation toggle button
  rotateToggle = createButton("Start Rotation");
  styleToggleButton(rotateToggle, animSection);
  rotateToggle.mousePressed(() => {
    isRotating = !isRotating;
    rotateToggle.html(isRotating ? "Stop Rotation" : "Start Rotation");
  });
  // X offset slider
  const posXLabel = createLabel("X Position: " + posX + "px", animSection);
  posXSlider = createSlider(-200, 200, posX, 1);
  styleSlider(posXSlider, animSection);
  posXSlider.input(() => {
    posX = posXSlider.value();
    posXLabel.html("X Position: " + posX + "px");
  });
  // Y offset slider
  const posYLabel = createLabel("Y Position: " + posY + "px", animSection);
  posYSlider = createSlider(-150, 150, posY, 1);
  styleSlider(posYSlider, animSection);
  posYSlider.input(() => {
    posY = posYSlider.value();
    posYLabel.html("Y Position: " + posY + "px");
  });

  // Add: Status prompt text
  const statusText = createDiv("Status: Ready");
  statusText.style("margin-top: 15px");
  statusText.style("font-size: 12px");
  statusText.style("color: #718096");
  statusText.style("font-style: italic");
  statusText.parent(controlPanel);
}

// Add global slider styles once
function addGlobalSliderStyles() {
  if (document.getElementById("global-slider-style")) return;
  const style = document.createElement('style');
  style.id = "global-slider-style";
  style.textContent = `
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      background: ${SLIDER_THUMB_COLOR};
      border-radius: 50%;
      cursor: pointer;
      border: none;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    input[type="range"]::-moz-range-thumb {
      width: 20px;
      height: 20px;
      background: ${SLIDER_THUMB_COLOR};
      border-radius: 50%;
      cursor: pointer;
      border: none;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
  `;
  document.head.appendChild(style);
}

// Draw shape (add opacity, border, rotation, position offset)
function drawShape() {
  push();
  // Base position: Canvas center + offset
  translate(width/2 + posX, height/2 + posY);
  // Rotation effect
  if (isRotating) rotate(radians(shapeRotation));

  // Process color and opacity
  const c = color(shapeColor);
  c.setAlpha(shapeAlpha);
  fill(c);

  // Process border
  if (showBorder) {
    const bc = color(borderColor);
    stroke(bc);
    strokeWeight(3); // Border width
  } else {
    noStroke();
  }

  // Draw shape
  if (showCircle) {
    ellipse(0, 0, shapeSize);
  } else {
    rectMode(CENTER);
    rect(0, 0, shapeSize, shapeSize);
  }
  pop();
}

// Toggle shape
function toggleShape() {
  showCircle = !showCircle;
  shapeButton.html(showCircle ? "Switch to Square" : "Switch to Circle");
}

// ------------------------------ Utility Functions ------------------------------
// Create section
function createSection(title, parent) {
  const section = createDiv();
  section.style("margin-bottom: 20px");
  section.style("padding-bottom: 15px");
  section.style("border-bottom: 1px solid #e2e8f0");
  section.parent(parent);

  const header = createElement("h4", title);
  header.style("margin: 0 0 12px 0");
  header.style("color: " + PANEL_ACCENT);
  header.style("font-size: 15px");
  header.style("font-weight: 600");
  header.parent(section);

  return section;
}

// Create label
function createLabel(text, parent) {
  const label = createDiv(text);
  label.style("color: " + LABEL_COLOR);
  label.style("font-size: 13px");
  label.style("margin-bottom: 6px");
  label.parent(parent);
  return label;
}

// Slider style
function styleSlider(slider, parent) {
  slider.style("width: 100%");
  slider.style("margin-bottom: 15px");
  slider.parent(parent);

  const sliderElt = slider.elt;
  sliderElt.style.webkitAppearance = "none";
  sliderElt.style.appearance = "none";
  sliderElt.style.height = "8px";
  sliderElt.style.borderRadius = "4px";
  sliderElt.style.background = SLIDER_TRACK_COLOR;
  sliderElt.style.outline = "none";
}

// Main button style
function styleButton(button, parent) {
  button.style("width: 100%");
  button.style("padding: 9px 15px");
  button.style("background-color: " + PANEL_ACCENT);
  button.style("color: white");
  button.style("border: none");
  button.style("border-radius: 8px");
  button.style("font-size: 13px");
  button.style("margin-bottom: 15px");
  button.style("cursor: pointer");
  button.style("transition: background-color 0.2s ease");
  button.parent(parent);

  button.mouseOver(() => button.style("background-color", "#3d5a80"));
  button.mouseOut(() => button.style("background-color", PANEL_ACCENT));
  button.mousePressed(() => button.style("background-color", "#2c4364"));
  button.mouseReleased(() => button.style("background-color", "#3d5a80"));
}

// Toggle button style (different from main button)
function styleToggleButton(button, parent) {
  button.style("width: 100%");
  button.style("padding: 7px 15px");
  button.style("background-color: #e1e8ed");
  button.style("color: " + TEXT_COLOR);
  button.style("border: none");
  button.style("border-radius: 6px");
  button.style("font-size: 12px");
  button.style("margin-bottom: 15px");
  button.style("cursor: pointer");
  button.style("transition: all 0.2s ease");
  button.parent(parent);

  button.mouseOver(() => {
    button.style("background-color", PANEL_ACCENT);
    button.style("color", "white");
  });
  button.mouseOut(() => {
    button.style("background-color", "#e1e8ed");
    button.style("color", TEXT_COLOR);
  });
}

// Color picker style
function styleColorPicker(picker, parent) {
  picker.style("width: 100%");
  picker.style("height: 38px");
  picker.style("border: 1px solid #cbd5e1");
  picker.style("border-radius: 8px");
  picker.style("padding: 2px");
  picker.style("cursor: pointer");
  picker.style("background-color: transparent");
  picker.parent(parent);
}