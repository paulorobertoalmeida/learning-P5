let r = 20;
let a = 0;
let s = 10


function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  
  
  translate(200, 200);
  let x = r + s * cos(a);
  let y = r + s* sin(a);
  
  fill(r, a, s);
  stroke(r, s, s);
  //ellipse(x , y , 10 ,10);
  ellipse(x , y ,0.2*s ,0.2*s);
  
  a += 0.8;
  s += 0.2;
}