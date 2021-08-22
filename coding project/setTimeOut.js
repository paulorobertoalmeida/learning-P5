let x = 0;


function setup() {
  createCanvas(400, 400);
  setTimeout(running, 4000);
  //running();
}

function running(){
  createP('running');
}

function draw() {
  background(50);
  stroke(255);
  strokeWeight(3);
  line(x, 0, x, height);
  //setTimeout(running , 300 000);
  x = x + 3; 
  if ( x > width ) {
    x = 0;
  } 
}