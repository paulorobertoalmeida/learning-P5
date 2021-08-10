//Crazy shape of little circles
function setup() {
    createCanvas(480, 120);
  }
  
  function draw() {
    background(0);
    
    for (let y = 32; y <= height; y += 8) {
      for (let x = 32; x <= width; x += 8){
       ellipse(x + y, y, 16 - y/10.0, 16 - y/10.0); 
      }
    }
  }