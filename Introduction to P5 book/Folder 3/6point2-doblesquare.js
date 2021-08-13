//Translating Positions doble square
function setup() {
    createCanvas(400, 400);
    background(0);
  }
  
  function draw() {
    translate(mouseX, mouseY);
    rect(0, 0, 30, 30);
    translate(35, 10);
    rect(0, 0, 15, 15);
  }