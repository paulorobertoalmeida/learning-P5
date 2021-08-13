//Translating Positions
function setup() {
    createCanvas(400, 400);
    background(0);
  }
  
  function draw() {
    translate(mouseX, mouseY);
    rect(0, 0, 30, 30);
  }