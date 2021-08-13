//Inclined rotation #2
function setup() {
    createCanvas(400, 400);
    background(0);
  }
  
  function draw() {
    rotate(mouseX / 100.0);
    rect(-80, -10, 160, 20);
  }