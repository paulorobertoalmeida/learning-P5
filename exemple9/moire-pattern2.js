//Creating Moire Pattern With Aplha Squared
//Just Playing with colors

let x = 0;
let y = 0;
function setup() {
  createCanvas(400, 400);
}

//lots of circles
function draw() {
  background(255);
 for (i = 0; i < 1000; i += 10){ 
   rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(4);
  rect(200, 200, i, i);
   
   
   stroke(255,0,0,80);
   strokeWeight(3);
   rect(200, y, 500 - i, 500 - i);
   
  }
  if (y > height){
    y = 0;
  } else {
    y = y+3;
  }
}