let t;

function setup() {
  createCanvas(400, 400);
  background(0);
  t = 0;
}

function draw() {
  // fade the background by giving it a low opacity
  background(0, 5);

  let x = width * noise(t);
  let y = height * noise(t+5);
  let r = 255 * noise(t+10);
  let g = 255 * noise(t+15);
  let b = 255 * noise(t+20);
  
  noStroke();
  fill(r, g, b);
  ellipse(x, y, 120, 120);

  t = t + 0.01;
}