//Horizontal line

function setup() {
    createCanvas(400, 400);
    strokeWeight(12);
  }
  
  function draw() {
    background(204);
    stroke(102);
    line(mouseX, 0, mouseX, height); // grey line
    stroke(0);
    let mx = mouseX /2 + 60;
    line(mx, 0, mx, height); // black line
  }