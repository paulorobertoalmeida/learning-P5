//Using lines to create a Pattern
function setup() {
    createCanvas(480, 120);
    strokeWeight(2);
    stroke(255);
  }
  
  function draw() {
    background(0);
    
    for ( let i = 20; i < 400; i += 20) {
      line( i, 0, i + i/2, 80);
      line(i + i/2, 80, i* 1.2, 120);
    }
  }