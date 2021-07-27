function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(220);
    for (let i = 0; i < 1000; i++) {
      fill(random(255), random(255), random(255));
      ellipse(random(windowWidth), random(windowHeight), random(100));
      noStroke();
  }
  }