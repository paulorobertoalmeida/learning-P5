// Tweening

let startX = 20;
let endX = 160;
let startY = 30;
let endY = 80;
let x = startX;
let y = startY;
let step = 0.005;
let pct = 0.0;



function setup() {
  createCanvas(240, 120);
}

function draw() {
  background(0);
  if (pct < 1.0) {
    x = startX + ((endX - startX)* pct);
    y = startY + ((endY - startY)* pct);
    pct += step;
  }
  ellipse(x, y, 20, 20);
}