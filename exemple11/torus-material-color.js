//Material & light

let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  //ambientLight(255, 0, 0);
  directionalLight( 255, 255, 0,1,0, 0);
  
  background(255);
  
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);
  
  ambientMaterial(0, 100, 255);
  //stroke(0);
  //normalMaterial();
  //fill( 180, 0, 255);
  noStroke();
  //torus(100, 10);
  torus(100, 25);
  
  
  angle += 0.03
}