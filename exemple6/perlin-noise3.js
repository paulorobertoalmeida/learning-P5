let inc= 0.1;
let scl = 10;
let cols, rows;


let fr;

function setup() {
  createCanvas(400, 400);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');
}

function draw() {
  background(255);
  //randonSeed(10);
  let yoff = 0;
  for (let y = 0; y < rows; y++){
    let xoff = 0;
    for ( let x = 0; x < cols; x++){
      let index = (x + y * width) * 4;
      let r = noise(xoff, yoff) * 255;
      let v = p5.Vector.fromAngle(random(TWO_PI));
      xoff += inc;
      stroke(0);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0); 
      
      pop();
    }
    yoff += inc;
  } 
  fr.html(floor(frameRate()));
}