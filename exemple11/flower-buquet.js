//Flower buquet
let angle = 0;
function setup() {
  createCanvas(400, 400);
  background(50);
  rectMode(CENTER);
  noFill();
  stroke(0, 255, 0);
  
  bezier(0, 0, 100, 200, 200, 300, 400, 400);
  bezier(50, 0, 100, 150, 200, 250, 400, 400)

}

function draw() {
  translate(mouseX, mouseY);
  rotate(angle);
  strokeWeight(3);
  let d = map(sin(angle), -1, 1, 5, 40);
  noFill();
  stroke(mouseX, d+ angle, mouseY);
  rect(0, 0, d, d);
  
  angle += 0.03;
}