//Creating Moire Squared Pattern

let x = 0;
let y = 0;
function setup() {
  createCanvas(400, 400);
}

//lots of squares
function draw() {
  background(0);
 for (i = 0; i < 1000; i += 10){ 
   rectMode(CENTER);
  noFill();
  stroke(255);
  strokeWeight(4);
  rect(200, 200, i, i);
   
   //another square
   stroke('red');
   strokeWeight(3);
   rect(x, 200, 500 - i, 500 - i);
   

   
  }
  if (x > width){
    x = 0;
  } else {
    x = x+3;
  }
 
}