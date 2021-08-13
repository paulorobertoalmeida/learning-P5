//Inclined rotation
function setup() {
    createCanvas(400, 400);
    background(0);
  }
  
  function draw() {
    rotate(mouseX / 100.0);
    rect(40, 30, 160, 20);
  }