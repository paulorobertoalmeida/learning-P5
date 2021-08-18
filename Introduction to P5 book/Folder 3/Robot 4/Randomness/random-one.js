//Randomness

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    let r = random(0, mouseX);
    print(r);
  }

//Randomness #22
// Lines moving acording to mouse positions

function setup() {
    createCanvas(400, 120);
  }
  
  function draw() {
    background(220);
    
    for (let x = 20; x < width; x +=20) {
      let mx = mouseX /10;
      let distanceA = random(-mx, mx);
      let distanceB = random(-mx, mx);
      line(x + distanceA, 20, x - distanceB, 100);
    }
  }