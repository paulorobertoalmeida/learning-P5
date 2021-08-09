//Arcs, using angleMode degrees
function setup() {
    createCanvas(480, 400);
    angleMode(DEGREES);
  }
  
  function draw() {
    background(204);
    fill(0, 100, 0);
    arc( 90, 60, 80, 80, 0, 90);
    
    fill(255, 0, 0);
    arc(190, 60, 80, 80, 0 , 270);
    
    fill(100, 0, 100);
    arc(290, 60, 80, 80, 180, 450);
    
    fill(200, 0, 100);
    arc(390, 60, 80, 80, 45, 255);
  }