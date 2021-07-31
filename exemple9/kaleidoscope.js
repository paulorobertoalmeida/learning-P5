//Kaleidoscope

let angle = 12;
let slider;
let slider2;

function setup() {
  createCanvas(400, 400);
  background(220);
  //changing color of pointer
  colorMode(HSB, 360, 150, 100, 1);
  slider= createSlider(100, 255, 50);
  slider2 = createSlider(6, 32, 6);
}

function draw() {
  translate(width/2, height/2);
  let saturation = slider.value();
  angle = slider2.value();

  for (let i = 0; i < angle; i++){
  rotate(angle);
  strokeWeight(15);
  stroke(mouseX, saturation,saturation, 0.5);
  line(mouseX, mouseY, pmouseX, pmouseY);
  
  
  push()
  scale(1, -1);
  line(mouseX, mouseY, pmouseX, pmouseY);
  pop()
  }
 
}