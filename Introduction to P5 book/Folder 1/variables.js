//Variables

let y = 60;
let d = 80;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(220);
  
  ellipse(75, y, d, d);
  ellipse(175, y, d, d);
  ellipse(275, y, d, d);
}