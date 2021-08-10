//CIRCLE EXERCICE
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    if (mouseIsPressed){
      fill(50);
    } else {
      fill(255, 0, 0);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }