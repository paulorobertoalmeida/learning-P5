//Playing with camera and draw integration
let camera; 
function setup() {
  createCanvas(400, 400);
  camera = createCapture(VIDEO);
  camera.size(200,200);
  camera.hide();
  
}

function draw() {
  background(220);
  tint(255, 0, 150);
  image(camera, 0, 0);
}