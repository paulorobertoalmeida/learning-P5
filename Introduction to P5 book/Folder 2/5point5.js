//Mouse following without trace
function setup() {
    createCanvas(480, 120);
    fill(128,0,0);
    noStroke();
  }
  
  function draw() {
    background(255);
    ellipse(mouseX, mouseY, 9, 9);
        
  }