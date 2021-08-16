//Arms moving 
let angle = 0.0;
let angleDirection = 1;
let speed = 0.005;

function setup() {
    createCanvas(400, 400);
   
  }
  
  function draw() {
    background(294);
    translate(20, 25);
    rotate(angle);
    strokeWeight(12);
    line(0, 0, 40, 0);
    translate(40, 0);
    rotate(angle * 2.0);
     
  }