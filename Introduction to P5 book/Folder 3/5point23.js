//Using map
function setup() {
    createCanvas(400, 400);
    strokeWeight(12);
  }
  
  function draw() {
    background(204);
    stroke(255);
    line(120, 60, mouseX, 0, mouseX); //White Line
    stroke(0);
    let mx = map(mouseX, 0, width, 60, 180);
    line(120, 60, mx, mouseY); // Black Line
  }