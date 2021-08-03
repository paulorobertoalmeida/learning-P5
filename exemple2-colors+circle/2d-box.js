let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
 
  background(50);
  
   let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(dx, dy, 0);
  v.div(100);
  directionalLight(255, 0, 0, v);

  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);
  
  //noStroke();
  
  ambientLight(0, 0, 255);
  
  box(180);

  angle += 0.005;
}