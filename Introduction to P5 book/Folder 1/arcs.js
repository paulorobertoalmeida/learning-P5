//Arcs, 3-2
function setup() {
    createCanvas(480, 400);
  }
  
  function draw() {
    background(204);
    fill(0, 100, 0);
    arc( 90, 60, 80, 80, 0, HALF_PI);
    
    fill(255, 0, 0);
    arc(190, 60, 80, 80, 0 , PI + HALF_PI);
    
    fill(100, 0, 100);
    arc(290, 60, 80, 80, PI, TWO_PI+HALF_PI);
    
    fill(200, 0, 100);
    arc(390, 60, 80, 80, QUARTER_PI, PI+QUARTER_PI);
  }