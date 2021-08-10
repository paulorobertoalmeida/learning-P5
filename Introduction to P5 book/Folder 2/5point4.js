//Mouse following

function setup() {
    createCanvas(480, 120);
    fill(128,0,0);
    noStroke();
  }
  
  function draw() {
    ellipse(mouseX, mouseY, 9, 9); 
  }