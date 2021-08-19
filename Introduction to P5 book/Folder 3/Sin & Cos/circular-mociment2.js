//Circular Moviment
//white background and circle in the middle

let angle = 0.0;
let distance = 200;
let scale = 100;
let speed = 0.05;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  let x = distance + cos(angle /2) * scale;
  let y = distance + sin(angle /2) * scale;
  ellipse(x, y, 80, 80);
  angle += speed
}