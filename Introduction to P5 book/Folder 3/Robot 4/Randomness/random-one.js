//Randomness

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    let r = random(0, mouseX);
    print(r);
  }