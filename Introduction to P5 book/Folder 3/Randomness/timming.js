//Timming
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    let timming = millis();
    print(timming);
  }

  //Timming Exemple #2

let moment1 = 2000;
let moment2 = 4000;
let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  actualMoment = millis();
  background(50);
  if (actualMoment < moment2) {
    x -= 0.5;
  } else if (actualMoment > moment1) {
    x += 2;
  }
  ellipse(x, 60, 90, 90);
}