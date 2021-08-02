let d = 8;
let n = 5;
let sliderD;
let sliderN;

function setup() {
  createCanvas(400, 400);
  sliderD = createSlider(1, 10, 5, 0.01);
  sliderN = createSlider(1, 10, 5, 0.01);
}

function draw() {
  d = sliderD.value();
  n = sliderN.value();
  let k = n/d;
  background(50);
  translate(width/2, height/2);
  noFill();
  
  beginShape();
  for ( let a = 0; a < TWO_PI * d; a += 0.002){
    let r = 200 * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    stroke(255);
    strokeWeight(4);
    vertex(x, y);
  }
  endShape(CLOSE);
}