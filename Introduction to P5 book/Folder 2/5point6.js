function setup() {
    createCanvas(480, 120);
    strokeWeight(4);
    stroke(0, 102);
  }
  
  function draw() {
    ellipse(mouseX, mouseY, pmouseX, pmouseY);
        
  }