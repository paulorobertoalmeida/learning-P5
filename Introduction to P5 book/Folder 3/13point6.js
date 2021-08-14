//Enter Name

let enter;
let button;


function setup() {
  createCanvas(400, 400);
  enter = createInput();
  button =createButton("submit");
  button.position(160, 30);
  button.mousePressed(writeName);
  
  background(100);
  noStroke();
  text("Enter Your Name.", 20, 20);
}

function writeName() {
  background(100);
  textSize(30);
  let name = enter.value();
  
  for( let i = 0; i < 30; i++) {
    fill(random(255));
    text(name, random(width), random(height));
  }
}