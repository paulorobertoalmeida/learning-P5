//Randomnes

let speed = 8;
let diameter = 20;
let x;
let y;

function setup() {
  createCanvas(600, 600);
  x = width /2;
  y = height /2;
  background(47,79,79);
}

function draw() {
  
  x += random(-speed, speed);
  y += random(-speed, speed);
  ellipse(x, y, diameter, diameter);
}