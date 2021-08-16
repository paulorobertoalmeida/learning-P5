//Isolating components using pus & pop

function setup() {
    createCanvas(400, 400);
    background(50);
     
  }
    
  function draw() {
    push();
    translate(mouseX, mouseY);
    rect(0, 0, 30, 30);
    pop();
    translate(35, 10);
    rect(0, 0, 15, 15);
  }