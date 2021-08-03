//Simple 3d box with webgl
let angle = 0;
function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(50);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  box(200);
  
  angle += 0.005;
}