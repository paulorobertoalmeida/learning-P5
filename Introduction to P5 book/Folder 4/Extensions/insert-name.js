// Inserting Name

let entrance;
let buttom;

function setup() {
  createCanvas(600, 600);
  entrance = createInput();
  entrance.position(20, 30);
  buttom = createButton("submit");
  buttom.position(160, 30);
  buttom.mousePressed(writeName);
  
  background(100);
  noStroke();
  text("Enter Your Name: " ,20 , 20);
}

function writeName(){
  background(100);
  textSize(30);
  let name = entrance.value();
  for (let i = 0; i < 30; i++) {
    fill(random(255));
    text(name, random(width), random(height));
  }
}

