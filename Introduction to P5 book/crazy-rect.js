let quadrado;
let x;
let y;
let z;
let w;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  let x = random(390);
  let y = random(390);
  let z = random(300);
  let w = random(300);
  
  beginShape;
    rect (x, y, z, w);
  endShape();
}
