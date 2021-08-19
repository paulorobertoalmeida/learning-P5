//Sinuos Wave Moviment

let angle = 0.0;
let distance = 100;
let scale = 40;
let speed = 0.05;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  let y1 = distance + sin(angle) * scale;
  let y2 = distance + sin(angle + 0.4) * scale;
  let y3 = distance + sin(angle + 0.8) * scale;
  //let y4 = distance + sin(angle + 0.12)* scale;
  ellipse(80, y1, 40, 40);
  ellipse(120, y2, 40, 40);
  ellipse(160, y3, 40, 40);
  //ellipse(200, y4, 40, 40);
  
  angle += speed;
}