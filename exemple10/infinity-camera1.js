//Addiding some rotation

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
  rotateZ(QUARTER_PI * 8);
  texture(cam);
  plane(400, 400);
  pop();
  
  push();
    rotateZ(QUARTER_PI * 7);
  texture(cam);
  plane(300, 300);
  pop();
  
  push();
    rotateZ(QUARTER_PI * 6);

  texture(cam);
  plane(200, 200);
  pop();
  
  push();
    rotateZ(QUARTER_PI * 5);

  texture(cam);
  plane(100, 100);
  pop();
  
  
  push();
    rotateZ(QUARTER_PI * 4);

  texture(cam);
  plane(30, 30);
  pop();
}