//PacMan exemple

let radio = 40;
let x = -radio;
let speed = 0.5;

function setup() {
  createCanvas(240, 120);
  ellipse(RADIUS);
}

function draw() {
  background(50);
  x += speed;
  fill(255,255,0);
  noStroke();
  arc(x, 60, radio, radio, 0.52, 5.76);
}