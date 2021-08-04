// Square with mouse pointing
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(255);
    
    fill(255);
    
    rect(100, 100, 200, 200);
    
    if (mouseX > 300){
      strokeWeight(20);
    } else {
      strokeWeight(2);
    }
    
  }