//Ellipse border: Testing the pointer
//Expanding ellipse border

let x = 120;
let y = 60;
let radio = 12;

function setup() {
  createCanvas(400, 400);
  ellipse(RADIUS);
}

function draw() {
  background(220);
  let d = dist(mouseX, mouseY, x, y);
  if (d < radio) {
    radio++;
    fill(0);
  } else {
    fill(255);
  }
  ellipse(x, y, radio, radio);
}