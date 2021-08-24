// Follow the mouse

let num = 60;
let x = [];
let y = [];

function setup() {
  createCanvas(600, 600);
  noStroke();
  
  for (let i = 0; i < num; i++) {
    x[i] = 0;
    y[i] = 0;
  }
}

function draw() {
  background(0);
  for (let i = num -1; i > 0; i--) {
    x[i] = x[i-1];
    y[i] = x[i-1];
  }
  x[0] = mouseX;
  y[0] = mouseY;
  for (let i = 0; i < num; i++) {
    fill(i * 4);
    ellipse(x[i], y[i], 40, 40);
  }
}