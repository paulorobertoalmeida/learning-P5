//Torus Material & light

let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(50);
  
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);
  
  normalMaterial();
  //fill( 180, 0, 255);
  noStroke();
  torus(100, 10);
  
  angle += 0.03
}