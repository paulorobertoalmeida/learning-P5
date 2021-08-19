//Spiral

let angle = 0.0;
let distance = 200;
let scale = 2;
let speed = 0.5


function setup() {
  createCanvas(400, 400);
  fill(0);
  background(250);
}

function draw() {
  let x = distance + cos(angle / 4) * scale;
  let y = distance + sin(angle / 4) * scale;
  ellipse(x, y, 2, 2);
  angle += speed;
  scale += speed;
}