// Kind of a bar code exemple

let grey = [];


function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < width;i++){
    grey[i] = random(0, 255);
  }
}

function draw() {
  background(204);
  for (let i = 0; i < grey.length; i++) {
    stroke(grey[i]);
    line(i, 0, i, height);
  }
}