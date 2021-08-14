//Reproducing File
let blip;

let radio = 120;
let x = 0;
let speed = 1.0;
let direction = 1;

function preload() {
  blip = loadSound("");
}

function setup() {
  createCanvas(400, 400);
  ellipseMode(RADIUS);
  x = width /2;
}

function draw() {
  background(0);
  x += speed * direction;
  if ((x > width - radio) || (x < radio)) {
    direction = - direction;
    blip.play();
  }
  if( direction == 1) {
    arc(x, 220, radio, radio, 0.52, 5.76);
  } else {
    arc(x, 220, radio, radio, 3.67, 8.9);
  }
}