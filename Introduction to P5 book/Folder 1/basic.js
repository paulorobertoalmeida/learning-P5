function setup() {
    createCanvas(480, 120);
  }
  
  function draw() {
    background(204);
    line(0, 0, width, height);
    line(width, 0, 0, height);
    ellipse(width /2, height /2, 60, 60);
  }