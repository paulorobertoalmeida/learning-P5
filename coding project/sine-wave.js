//Last shape

function setup() {
    createCanvas(600, 600, WEBGL);
    angleMode(DEGREES);
  }
  
  function draw() {
    background(50);
    
    rotateX(60);
    noFill();
    stroke(255);
    //strokeWeight(3);
    
    for(let i = 0; i < 80; i++) {
      
      let r = map(sin(frameCount /2), -1, 1, 100, 255);
      let g = map(i, 0, 50, 100, 255);
      let b = map(cos(frameCount) -1, 1, 200, 100);
      
      stroke(r, g, b);
      
      rotate(frameCount / 50);
      
      beginShape()
        for ( let j = 0; j < 360; j += 30) {
          let rad = i * 3;
          let x = rad * cos(j);
          let y = rad * sin (j);
          let z = sin(frameCount * 2 + i * 5) * 50;
          
          vertex(x, y, z)
        }
      endShape(CLOSE);
    }
  }