//color variables
let r =1;
let g =1;
let b =1;

//change positions
let vp = 1;
let hp = 1;

function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(3);
  noStroke();
 rectMode(CENTER);
}

function draw() {
  
  r = random(0,255); 
  g = random(0,255);
  b = random(0,255);
  fill(r, g, b)
  
  rect(50 * hp,50 * vp, 100, 100);
  
  r = random(0,255); 
  g = random(0,255);
  b = random(0,255);
  
  fill(r, g, b);
  circle(50 * hp, 50 * vp, 50, 50);
  
  
  hp = hp + 2;
  if (hp > 7){
    vp = vp +2;
    hp = 1;
  }
}