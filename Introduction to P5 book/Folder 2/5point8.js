//Need to change the smooth to see results
let x = 0;
let smooth = 0.01; // 0.1 till 0.4

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  let objectiveX = mouseX;
  x += (objectiveX - x) * smooth;
  ellipse(x, 40, 12, 12);
  print(objectiveX + " : " + x);
      
}