// Creating Slider

let bar;

function setup() {
  createCanvas(600, 600);
  bar = createSlider(0, 255, 100);
  bar.position(20, 20);
}

function draw() {
  let grey = bar.value();
  background(grey);
}