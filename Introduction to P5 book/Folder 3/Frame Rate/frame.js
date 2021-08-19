//Frame Rate #1 
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    let fr = frameRate();
    print(fr);
  }