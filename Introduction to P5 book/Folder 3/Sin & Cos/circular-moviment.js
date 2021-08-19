//Circular Moviment 
// Crazy drawing like a z in the middle with purple background

let angle = 0.0;
let distance = 200;
let scale = 100;
let speed = 0.9;

function setup() {
  createCanvas(400, 400);
  background(153, 0, 73);
}

function draw() {
  let x = distance + cos(angle) * scale;
  let y = distance + sin(angle) * scale;
  ellipse(x, y, 120, 120);
  angle += speed
}