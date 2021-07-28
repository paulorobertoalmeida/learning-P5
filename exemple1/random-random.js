// Random circles popping up on screen ;

let r;
let g;
let b;
let a;

function setup() {
  createCanvas(400, 400);
  xoff = width;
  yoff = height;
  
}

function draw() {
  background(0);
  r = random(255);
  g = random(255);
  b = random(255);
  
  x = random(xoff);
  y = random(yoff);
  
  ellipse(x, y, 100, 100);
  fill(r, g, b);
  noStroke();
}