//color draw
function setup() {
    createCanvas(480, 400);
    noStroke();
  }
  
  function draw() {
    background(0, 26, 51);
    
    //first circle
    fill(255, 0, 0);
    ellipse(132, 82, 200, 200);
    
    //second circle
    fill(0, 255, 0);
    ellipse(228, -16, 200, 200);
    
    //third circle
    fill(0, 0, 255);
    ellipse(268, 118, 200, 200);
    
  }