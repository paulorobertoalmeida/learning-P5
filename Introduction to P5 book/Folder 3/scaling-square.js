//Scaling square

function setup() {
    createCanvas(400, 400);
    background(50);
     
  }
    
  function draw() {
    
    translate(mouseX, mouseY);
    scale(mouseX / 60.0);
    //fill(0)
    rect(-15, -15, 30, 30);
       
  }