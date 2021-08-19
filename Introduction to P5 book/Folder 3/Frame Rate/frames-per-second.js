//Frames per second

function setup() {
    createCanvas(400, 400);
    //frameRate(30); //30 frames per second
    //frameRate(12); //12 frames per second
    //frameRate(2); //2 frames per second
    frameRate(0.5); //0.5 frames per second
  }
  
  function draw() {
    background(220);
    
    let fr = frameRate();
    print(fr);
  }