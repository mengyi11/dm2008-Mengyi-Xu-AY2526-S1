let spacing = 15; // 横线间距
let amplitude = 50; // 最大凸起高度

function setup() {
  // createCanvas(windowWidth, windowHeight);
}

function draw() {
  createCanvas(800, 800);
  background(0);
  stroke(255);
  noFill();

  for (let y = 0; y < height; y += spacing) {
    beginShape();
    for (let x = 0; x < width; x += 10) {
      let d = dist(x, y, mouseX, mouseY);
      // console.log(d)
      let offset = map(d, 0, 80, amplitude, 0, true);
      let wave = sin((x + frameCount * 5) * 0.05) * 10;
      vertex(x, y - offset + wave);
    }
    endShape();
  }
}

function keyPressed() {
  saveCanvas("activity1b-image-3", "jpg");
}


// let colorsBase;

// function setup() {
//   createCanvas(400, 400);
//   noStroke();
//   colorsBase = [
//     [255, 105, 180], // 桃红
//     [255, 255, 150], // 淡黄
//     [0, 150, 255],   // 蓝色
//     [255, 182, 193]  // 粉色
//   ];
// }

// function draw() {
//   background(0, 20); // 留下拖影效果

//   // 光晕中心跟随鼠标
//   let cx = mouseX;
//   let cy = mouseY;
//   let maxRadius = map(mouseY, 0, height, 50, 150); // 光晕大小随Y变化

//   for (let i = maxRadius; i > 0; i--) {
//     // 动态渐变颜色
//     let t = frameCount * 0.03;
//     let idx = floor(map(i, 0, maxRadius, colorsBase.length, 0));
//     let c = colorsBase[idx];
//     let r = c[0] + 50 * sin(t + i * 0.1);
//     let g = c[1] + 50 * sin(t + i * 0.1 + 1);
//     let b = c[2] + 50 * sin(t + i * 0.1 + 2);
//     fill(constrain(r, 0, 255), constrain(g, 0, 255), constrain(b, 0, 255), 50);

//     ellipse(cx, cy, i * 2);
//   }
// }



// let w = 50
// function setup() {
//     createCanvas(windowWidth, windowHeight);

//     // background(255,255,255);  

// }

// function draw() {
//   background(0, 0, 0, 20); // 半透明背景，保留拖影效果

//   let layers = 5; // 光晕层数
//   for (let i = layers; i > 0; i--) {
//     let alpha = map(i, 0, layers, 0, 150); // 透明度
//     let size = w + i * 10;                 // 每层圆圈半径逐渐增大
//     noStroke();
//     fill(226, 168, 233, alpha);            // 紫色渐变
//     ellipse(windowWidth / 2, windowHeight / 2, size);
//   }

//   // 外圈描边
//   stroke(255, 0, 0);
//   strokeWeight(3);
//   noFill();
//   ellipse(windowWidth / 2, windowHeight / 2, w);

//   w += 1; // 圆圈扩展
// }
// // function draw() {
// //   // createCanvas(windowWidth, windowHeight);
// //   background(0,0,0,5);  
// //   let ctx = drawingContext; // 获取原生 Canvas 上下文
// //   let gradient = ctx.createRadialGradient(
// //     windowWidth/2, windowHeight/2, w*0.8,   // 内圈
// //     windowWidth/2, windowHeight/2, w/2      // 外圈
// //   );
// //   gradient.addColorStop(0, 'rgba(226, 168, 233, 0.8)'); // 中心亮
// //   gradient.addColorStop(1, 'rgba(226, 168, 233, 0)');   // 外圈透明

// //   ctx.fillStyle = gradient;
// //   noStroke();
// //   ellipse(windowWidth/2, windowHeight/2, w);
// //   stroke(255,0,0)
// //   strokeWeight(3)
// //   ellipse(windowWidth/2, windowHeight/2, w);
// //   w = w +1
// //   describe();
// // }
