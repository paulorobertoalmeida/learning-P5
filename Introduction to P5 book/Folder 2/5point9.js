//Smoothing lines
let x = 0;
let y = 0;
let px = 0;
let py = 0;
let smooth = 0.05;

function setup() {
  createCanvas(480, 400);
  stroke(0, 102);
  
}

function draw() {
  let objectiveX = mouseX;
  x += (objectiveX - x) * smooth;
  let objectiveY = mouseY;
  y += (objectiveY - y) * smooth;
  let weight = dist(x, y, px, py);
  strokeWeight(weight);
  line(x, y, px, py);
  py = y;
  px = x;
}