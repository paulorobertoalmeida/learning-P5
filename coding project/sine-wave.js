function setup() {
    createCanvas(400, 400, WEBGL);
    angleMode(DEGREES);
  }
  
  function draw() {
    background(30);
    
    rotateX(60);
    noFill();
    stroke(255);
    
    for(let i = 0; i < 10; i++) {
      
      let r = map(sin(frameCount));
      beginShape()
        for ( let j = 0; j < 360; j += 10) {
          let rad = i * 8;
          let x = rad * cos(j);
          let y = rad * sin (j);
          let z = sin(frameCount * 2 + i * 10) * 50;
          
          vertex(x, y, z)
        }
      endShape(CLOSE);
    }
  }