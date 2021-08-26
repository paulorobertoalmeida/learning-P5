// Sinuous Wave

let sinuous;


function setup() {
  createCanvas(600, 600);
  sinuous = new p5.SinOsc();
  sinuous.start();
}

function draw() {
  background(0);
  
  let hertz = map(mouseX, 0, width, 20.0, 440.0);
  sinuous.freq(hertz);
  stroke(204);
  for ( let x = 0; x < width; x ++) {
    let angle = map(x, 0, width, 0, TWO_PI * hertz);
    let sinuousValue = sin(angle) * 120;
    line(x, 0, x, height/2 + sinuousValue);
  }
}