//Playing with camera and draw integration
let camera; 
let button; 
function setup() {
  createCanvas(400, 400);
  camera = createCapture(VIDEO);
  camera.size(200,200);
  button = createButton('snap');
  button.mousePressed(takesnap);
  
}

function takesnap(){
  image(camera, 0, 0);
}

function draw() {
  background(0);
}