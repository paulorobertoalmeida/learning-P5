//translating Angle

let  angle = 0.0;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  translate(mouseX, mouseY);
  rotate(angle);
  rect(-15, -15, 50, 50);
  angle += 0.1;
}