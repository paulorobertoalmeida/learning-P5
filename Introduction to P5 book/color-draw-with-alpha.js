//color draw
function setup() {
    createCanvas(480, 400);
    noStroke();
  }
  
  function draw() {
    background(204, 226, 225);
    
    //first circle
    fill(255, 0, 0, 160);
    ellipse(132, 82, 200, 200);
    
    //second circle
    fill(0, 255, 0, 160);
    ellipse(228, -16, 200, 200);
    
    //third circle
    fill(0, 0, 255, 160);
    ellipse(268, 118, 200, 200);
    
  }