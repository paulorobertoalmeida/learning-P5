
//3d box with mouse moviment
let r;
let g;
let b;
let angle = 0;
function setup(){
  createCanvas(400, 300, WEBGL);
}

function draw(){
  background(75);
  noStroke();
  rectMode(CENTER);
  
  r= random(250);
  g= random(250)
  b= random(250)
  fill(255);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  
  
  translate(mouseX - width/2, mouseY - height/2)
  box(90);
  
  angle += 0.007
}