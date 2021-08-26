// Microphone

let mic; 
let amp;

let scale = 1.0;


function setup() {
  createCanvas(600, 600);
  background(0);
  
  mic = new p5.AudioIn();
  mic.start();
  
  amp = new p5.Amplitude();
  amp.setInput(mic);
}

function draw() {
  noStroke();
  fill(0, 10);
  rect(0, 0, width, height);
  scale = map(amp.getLevel(), 0, 1.0, 10, width);
  fill(255);
  ellipse(width/2, height/2, scale, scale);
  
}