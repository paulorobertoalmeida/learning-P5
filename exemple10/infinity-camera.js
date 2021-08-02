let cam;


function setup() {
  createCanvas(400, 400, WEBGL);
  cam = createCapture();
  cam.hide();
  
}

function draw() {
  background(220);
  noStroke();
  

  push();
  texture(cam);
  plane(400, 400);
  pop();
  
  push();
  texture(cam);
  plane(300, 300);
  pop();
  
  push();
  texture(cam);
  plane(200, 200);
  pop();
  
  push();
  texture(cam);
  plane(100, 100);
  pop();
  
  
  push();
  texture(cam);
  plane(30, 30);
  pop();
}