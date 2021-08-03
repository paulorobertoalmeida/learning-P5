//Three ellipses

function setup() {
    createCanvas(600, 200);
    background(50);
    
  }
  
  function draw() {
    
    strokeWeight(2);
    fill(250, 100, 0);
    ellipse(278, -100, 400, 400);
    
    push();
    fill(100, 100, 250);
    noStroke();
    ellipse(120, 100, 110, 110);
    pop();
    
    fill(255, 0, 0);
    ellipse(412, 60, 18, 18);
  }