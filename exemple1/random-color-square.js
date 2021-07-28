//SQUARE CHANGING COLOR
let r;
let g;
let b;
let a;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  r = random(255);
  g = random(255);
  b = random(255);
  a = random(255);
  rect(100, 100, 200, 200);
  fill(r, g, b, a);
  
}