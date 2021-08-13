//Robot moving
let x = 60;
let y = 440;
let radius = 45;
let bodyHeight = 160;
let neckHeight = 70

let smooth = 0.04;

function setup() {
  createCanvas(400, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  let targetX = mouseX;
  x += (targetX - x) * smooth;
  
  if (mouseIsPressed) {
    neckHeight = 16;
    bodyHeight = 90;
  } else {
    neckHeight = 70;
    bodyHeight = 160;
  }
  let neckY = y - bodyHeight - neckHeight - radius; 
  
  background(240);
  
  stroke(102);
  line(x + 12, y - bodyHeight, x + 12, neckY);
  
  line(x + 12, neckY, x - 18, neckY - 43);
  line(x + 12, neckY, x + 42, neckY - 99);
  line(x + 12, neckY, x + 78, neckY + 15);
  
  noStroke();
  fill(102);
  ellipse(x, y - 33, 33, 33);
  fill(0);
  rect(x - 45, y - bodyHeight, 90, bodyHeight - 33);
  
  fill(0);
  ellipse(x + 12, neckY, radius, radius);
  fill(255);
  ellipse(x + 24, neckY - 6, 14, 14);
  
  fill(0);
  ellipse(x + 24, neckY - 6, 3, 3);
}