let angle = 0;
function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(5155);
  
  push();
  rotateY(angle * 2);
  rotateZ(angle);
  box(50, 50, 50);
  pop();
  normalMaterial();
  
  push();
  rotateX(angle);
  //rotateY(angle);
  //rotateZ(angle * 5)
  torus(100, 20, 24)
  pop();
  
  angle += 0.03
}