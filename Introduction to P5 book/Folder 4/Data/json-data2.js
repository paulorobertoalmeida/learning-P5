// Robot 10

let out;

function setup() {
  createCanvas(720, 400);
  out = createWriter("bots.tsv");
  
  out.print("tipo\tx\ty");
  for ( let y = 0; y <= height; y += 60) {
    for( let x = 0; x <= width; x += 20) {
      let typeRobot = int(random(1, 4));
      out.print(typeRobot + "\t" + x + "\t" + y);
      ellipse(x, y, 12, 12);
    }
  }
  out.close();
}

function draw() {
  background(220);
}