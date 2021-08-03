let t;
let r;
let g;
let b;



function setup() {
  createCanvas(400, 400);
   background(255);
  
  //fill((5*frameCount) % 360, 100, 100);
  r = random(255);
  g = random(255);
  b = random(255);
  strokeWeight(2);
  
  stroke(0, 15);
  //fill(r, g, b);
  t = 0;
  
}

function draw() {
  translate(width/2, height/2);
  
  beginShape();
  colorMode(HSB);
  for (let i = 0; i < 200; i++){
    let ang = map(i, 0, 300, 0, PI);
    let rad = 250 * noise(i * 0.01, t * 0.005);
    let x = rad * cos(ang);
    let y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);
  
  t += 1;
  
  if (frameCount %600 ==0){
    background(255);
  }
  
  // background(frameCount % 360, 100, 100);
  //if(mouseIsPressed){
   
   // stroke((5*frameCount) % 360, 40, 100);
    

    // ellipse(mouseX, mouseY, 30,30);
    //strokeWeight(20);
    //line(mouseX, mouseY, pmouseX, pmouseY);
  // }
  
  colorMode(HSB);
}