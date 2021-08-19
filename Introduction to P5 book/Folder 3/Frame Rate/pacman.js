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

//PacMan exemple Returning to the screen

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
  if ( x > width + radio) {
    x = -radio;
  }
  fill(255,255,0);
  noStroke();
  arc(x, 60, radio, radio, 0.52, 5.76);
}

//PacMan back and forth

let radio = 40;
let x = 110; 
let speed = 0.5;
let direction = 1;

function setup() {
  createCanvas(400, 400);
  ellipse(RADIUS);
}

function draw() {
  background(50);
  x += speed * direction;
  fill(255,255,0);
  noStroke();
  if ((x > width - radio) || (x < radio)) {
    direction = -direction;
  }
  if (direction == 1) {
    arc(x, 60, radio, radio, 0.52, 5.76);
  } else {
    arc(x, 60, radio, radio, 3.67, 8.9);
  }
}