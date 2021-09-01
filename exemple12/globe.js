function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(25,25,112);
    for (let i = 50; i < width -50; i += 50) {
      for (let j = 50;  j < height -50; j += 50) {
      noFill();
      stroke(i, j, 0);
      strokeWeight(2);
      ellipse(width/2, height/2, mouseX+i, mouseY+j);
      //rect(i, mouseY, mouseX, j);
    }
  }
    }