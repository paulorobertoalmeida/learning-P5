// cam capturing with a box texture
let angle = 0;
function setup() {
  createCanvas(400, 400, WEBGL);
  cam = createCapture(VIDEO);
  cam.size(320, 240);
  cam.hide();
}

function draw() {
  background(50);
  ambientLight(255);
  
  
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);
  
  noStroke();
  texture(cam);
  
  box(150);
  
  angle += 0.005
}