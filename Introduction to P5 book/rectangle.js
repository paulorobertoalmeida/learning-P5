
//basic rectangle with some triangles in the extremes
function setup() {
    createCanvas(600, 200);
    background(30);
    
  }
  
  function draw() {
    
    strokeWeight(2);
    quad(158, 55, 199, 14, 392, 66, 351, 107);
    triangle(347, 54, 392, 9, 392, 66);
    triangle(158, 55, 290, 91, 290, 112);
  }