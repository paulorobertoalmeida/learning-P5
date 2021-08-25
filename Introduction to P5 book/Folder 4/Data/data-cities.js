//Data Cities

let cities;

function preload() {
  cities = loadTable("");
}


function setup() {
  createCanvas(400, 400);
  fill(255, 150);
  noStroke();
}

function draw() {
  background(220);
  let xdistance = map(mouseX, 0, width, -width, -width*3, -width);
  translate(xdistance, -600);
  scale(10);
  for (let i = 0; i < cities.getRowCount(); i++) {
    let latitude = cities.getNum(i, "lat");
    let longitude = cities.getNum(i, "lng");
    definingXY(latitude, longitude);
  }
}

function definingXY(lat, lng) {
  let x = map(lng, -180, 180, 0, width);
  let y = map(lat, 90, -90, 0, height);
  ellipse(x, y, 0.25, 0.25);
}