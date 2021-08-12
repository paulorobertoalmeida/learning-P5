//Finding cursor. A demonstration of where the cursor is

let x;
let offset = 10;

function setup() {
  createCanvas(400, 400);
  strokeWeight(4);
  x = width / 2;
}

function draw() {
  background(255);
  if (mouseX > x) {
    x += 0.5;
    offset = -10;
  }
  if (mouseX < x) {
    x -= 0.5;
    offset = 10;
  }
  //drawing the arrow. Left and right based on offset value
  line(x, 0, x, height);
  line(mouseX, mouseY, mouseX + offset, mouseY - 10);
  line(mouseX, mouseY, mouseX + offset, mouseY + 10); 
  line(mouseX, mouseY, mouseX + offset * 3, mouseY);
}