//2d texture & 3d box
let angle = 0;
let art;
function setup() {
  createCanvas(400, 400, WEBGL);
  art = createGraphics(400, 400);
}

function draw() {
  background(50);
  push();
    texture(art);
    noStroke();
    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);
    torus(50, 30);
  
  angle += 0.005;
  pop();
  
  push();
  for(let i = 50; i < width; i += 50){
    for(let j = 50; j < height; j += 50){
      art.noFill();
      art.stroke(i, j, 0);
      art.strokeWeight(2);
      art.ellipse(i, j,50 + mouseX, 50 + mouseY);
    }
  }
  pop();
}