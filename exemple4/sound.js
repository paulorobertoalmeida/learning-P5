let wave;
function setup() {
  createCanvas(400, 400);
  
  wave = new p5.Oscillator();
  wave.start();
  wave.setType('sine'); 
  wave.amp(0.5);
  wave.freq(300);
  
}

function draw() {
  background(0);
}