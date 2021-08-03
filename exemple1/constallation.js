function setup() {
    createCanvas(400, 400);
    background(10);
    stroke(255);
  }
  
  function draw() {
    
    strokeWeight(2);
    
    let x = random(width);
    let y = random(height);
    
    if (dist (x, y, width /2, height / 2) < width * 0.25 ){
      point (x, y);
    }
  }