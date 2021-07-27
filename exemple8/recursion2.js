// Same but using randomness
//crazy shape
function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(0);
    
    stroke(255);
    noFill();
    drawCircle(300, 200, 300)
    
  }
  
  function drawCircle(x, y, d) {
    ellipse(x, y, d); 
    if (d > 2){
      let newD = d * random(0.2, 0.85);
    drawCircle(x + newD, y, d * 0.5);
      drawCircle(x - newD, y, d * 0.5);
      drawCircle(x,y +d * 0.5, d * 0.5);
      }
  }