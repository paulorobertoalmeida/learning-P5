//Sinuos Wave values

let angle = 0.0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  let sinValue = sin(angle);
  print(sinValue);
  let grey = map(sinValue, -1, 1, 0, 255);
  background(150);
  angle += 0.1
}