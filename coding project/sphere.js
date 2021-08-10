
function draw() {
    background(30);
    
    noFill();
    stroke(255);
    
    let x = sin(frameCount * 2) * 50;
    let y = cos(frameCount) * 50;
    let z = sin(frameCount * 4) * 50;
    
    translate(x, y, z);
    
    rotateX(frameCount);
    rotateY(frameCount /2);
    rotateZ(frameCount /4);
    
    for (let i = 0; i < 360; i++) {
      push();
      
      let r = map(sin(i + frameCount), -1, 1, 200, 50);
      let g = map(sin(i + frameCount /3), -1, 1, 50, 200);
      let b = map(cos(i + frameCount /7), -1, 1, 50, 200);
      
      stroke(r,g, b);
      rotateY(i/ 2);
      ellipse(0, 0, 200, 200, 50);
      
      pop();
    }
  }