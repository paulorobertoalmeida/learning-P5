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
  frameRate(10);
  noStroke();
 rectMode(CENTER);
}

function draw() {
  
  r = random(0,255); 
  g = random(0,128);
  b = random(100,0);
  fill(r, g, b)
  
  rect(25 * hp,25 * vp, 50, 50);
  
  r = random(100,0); 
  g = random(0,255);
  b = random(0,255);
  
  fill(r, g, b);
  circle(25 * hp, 25 * vp, 25, 25);
  
  
  hp = hp + 2;
  if (hp > 16){
    vp = vp +2;
    hp = 1;
  }
}