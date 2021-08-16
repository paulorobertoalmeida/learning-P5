//Robot moving and expanding
let x = 60;
let y = 440;
let radius = 45;
let bodyHeight = 180;
let neckHeight = 40;

let easing = 0.04;

function setup() {
  createCanvas(360, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  let neckY = -1 * (bodyHeight + neckHeight + radius);
  
  background(220);
  
  translate(mouseX, mouseY);
  
  if (mouseIsPressed) {
    scale(1.0);
  } else {
    scale(0.6);
  }
  
  //Body
  
  noStroke(102);
  fill(102);
  ellipse(0, -33, 33, 33);
  fill(0);
  rect(-45, -bodyHeight, 90, bodyHeight -33);
  
  //Neck
  stroke(102);
  line(12, -bodyHeight, 12, neckY);
  
  //Hair
  push();
  translate(12, neckY);
  let angle = -PI/30.0; //angle
  for (let i = 0; i <= 30; i++) {
    line(80, 0, 0, 0);
    rotate(angle);
  }
  pop();
  
  //Head
  noStroke();
  fill(0);
  ellipse(12, neckY, radius, radius);
  fill(255);
  ellipse(24, neckY-6, 14, 14);
  fill(0);
  ellipse(24, neckY-6, 3, 3);
}