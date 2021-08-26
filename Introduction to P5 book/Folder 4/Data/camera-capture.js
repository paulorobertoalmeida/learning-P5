//USING DOM TO CAPTURE CAMERA IMAGES
let capture;

function setup() {
  createCanvas(600, 600);
  capture = createCapture();
  capture.hide();
}

function draw() {
  let aspectReletion = capture.height/capture.width;
  let h = width * aspectReletion;
  image(capture, 0, 0, width, h);
  filter(INVERT);
}