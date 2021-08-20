//Drawing an Owl Repetition

function setup() {
    createCanvas(480, 120);
  }
  
  function draw() {
    background(204);
    
    for (let x = 35; x < width + 70; x += 70) {
      owl(x, 110);
    }
    
  }
  
  function owl(x, y) {
    push();
    translate(x, y);
    stroke(0);
    strokeWeight(70);
    line(0, -35, 0, -65);
    noStroke();
    fill(250);
    ellipse(-17.5, -65, 35, 35);
    ellipse(17.5, -65, 35, 35);
    arc(0, -65, 70, 70, 0, PI);
    fill(0);
    ellipse(-14, -65, 8, 8);
    ellipse(14, -65, 8, 8);
    quad(0, -58, 4, -51, 0, -44, -4, -51);
    pop();
  }  
  

  //Drawing an Owl Repetition with colors

function setup() {
    createCanvas(480, 120);
  }
  
  function draw() {
    background(204);
    randomSeed(0);
    
    for (let i = 0; i < width + 40; i += 40) {
      let grey = int(random(0, 102));
      let scale = random(0.25, 1.0);
      owl(i, 110, grey, scale);
    }
    
  }
  
  function owl(x, y, g, s) {
    push();
    translate(x, y);
    scale(s);
    stroke(g);
    strokeWeight(70);
    line(0, -35, 0, -65);
    noStroke();
    fill(250-g);
    ellipse(-17.5, -65, 35, 35);
    ellipse(17.5, -65, 35, 35);
    arc(0, -65, 70, 70, 0, PI);
    fill(g);
    ellipse(-14, -65, 8, 8);
    ellipse(14, -65, 8, 8);
    quad(0, -58, 4, -51, 0, -44, -4, -51);
    pop();
  }  
  