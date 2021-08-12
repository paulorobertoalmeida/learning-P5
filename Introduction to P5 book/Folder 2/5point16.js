//Pressed key

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(204);
    line(20, 20, 220, 100);
    if (keyIsPressed) {
      line(220, 20, 20, 100);
    }
  }