//This one reminds me a constallation
function setup() {
    createCanvas(500, 500);
    fill(255,250,250);
    stroke(102);
  }
  
  function draw() {
    background(0);
    
    for (let y = 20; y <= height-20; y += 30) {
      for (let x = 20; x <= width-20; x += 30){
        ellipse(x, y, 4, 4);
        line(x, y, 250, 250);
      }
    }
  }