//more squares

function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(0);
    for (let i = 0; i < 5000; i++) {
      fill(random(255), random(255), random(255));
      rect(random(windowWidth), random(windowHeight), random(10));
      noStroke();
    }
  }