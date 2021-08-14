//translating Angle long rotation

let  angle = 0.0;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  rotate(angle);
  translate(mouseX, mouseY);
  rect(-15, -15, 50, 50);
  angle += 0.1;
}