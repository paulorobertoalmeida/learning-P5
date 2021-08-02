function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    for(let j= 100; j < 200; j += 6){
      stroke(255, 0, 0);
      line(j, 100, j, 200); 
    }
    
    for(let k= 200; k < 300; k += 6){
      stroke(0, 0, 255);
      line(k, 200, k, 300); 
    }
    
    for(let i = 0; i< 1000; i += 6){
      stroke(0);
      strokeWeight(4);
      line(i- mouseX, 0, i- mouseX, height) 
    }
  }