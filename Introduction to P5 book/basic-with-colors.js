//Basic Aritmatic

let x = 25;
let h = 20;
let y = 25;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(2204);
  
  for(let i = 0; i < 80; i++) {
  
  let r = map(sin(frameCount/ 2), -1, 1, 100, 255);
  let g = map(i, 0, 50, 100, 255);
  let b = map(cos(frameCount), -1, 1, 200, 100);
  
  
  
  fill(r, g, b);
  x = 20;
  rect(x, y, 300, h);
  x = x + 100;
  rect(x, y + h, 300, h);
  x = x - 250;
  rect(x, y + h*2, 300, h);
  }
}