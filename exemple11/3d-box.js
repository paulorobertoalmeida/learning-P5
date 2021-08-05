let angle = 0;

let graphics;
function setup() {
  createCanvas(400, 300, WEBGL);
  graphics = createGraphics(200,200);
  graphics.background(255);
}

function draw() {
  background(0);
  ambientLight(100);
  directionalLight(255, 255, 255, 0, 0, 1);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);
  box(100);
  
  normalMaterial();
  texture(graphics);
  angle += 0.03
}