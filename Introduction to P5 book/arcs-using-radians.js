//Arcs, using radians metric
function setup() {
    createCanvas(480, 400);
  }
  
  function draw() {
    background(204);
    fill(0, 100, 0);
    arc( 90, 60, 80, 80, 0, radians(90));
    
    fill(255, 0, 0);
    arc(190, 60, 80, 80, 0 , radians(270));
    
    fill(100, 0, 100);
    arc(290, 60, 80, 80, radians(180), radians(450));
    
    fill(200, 0, 100);
    arc(390, 60, 80, 80, radians(45), radians(255));
  }