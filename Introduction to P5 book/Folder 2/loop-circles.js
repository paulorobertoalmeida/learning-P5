//King of optical art
function setup() {
    createCanvas(600, 600);
    noStroke();
  }
  
  
  function draw() {
    background(255);
    
    for (let y = 0; y <= height; y += 40){
      for ( let x = 0; x <= width; x += 40){
        fill(0);
        ellipse(x, y, 40, 40);
      }
    }
  }