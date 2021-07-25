let angle = 0;
let x = 50;
let y = 50;
let s = (400,400);

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
  
  translate(x, y);
  fill(255);
  rotate(angle); 
  rectMode(CENTER);
  //rect(50,50, 100, 50);
  rect(0, 0, 100, 50);
  noStroke();
  
  angle = angle + 5;
  x = x + 2;
}