let angle = 0;
function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(5155);
  
  normalMaterial();
  
  rotateX(angle);
  
  //rotateY(angle);
  rotateZ(angle * 5)
  box(50, 50, 50);
  torus(100, 20, 24)
  
  angle += 0.03
}