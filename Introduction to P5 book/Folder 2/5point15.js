//Square Border
let x = 80;
let y = 30;
let w = 80;
let h = 60;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if((mouseX > x) && (mouseX < x + w)) {
    fill(0);
  } if((mouseY > y) && (mouseY < y + h)){
    fill(0);
  } else{
    fill(255);
  }
  rect(x, y, w, h);
}