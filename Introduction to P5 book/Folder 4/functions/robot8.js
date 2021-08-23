//Robot 8

let img1;
let img2;

let bot1;
let bot2;

function preload() {
  img1 = loadImage("robot1.svg");
  img2 = loadImage("robot2.svg");
}


function setup() {
  createCanvas(720, 480);
  bot1 = new Robot(img1, 90, 80);
  bot2 = new Robot(img2, 440, 30);
}

function draw() {
  background(204);
  
  bot1.actualizing();
  bot2.actualizing();
}

function Robot(img, timeX, timeY) {
  this.xpos = timeX;
  this.ypos = timeY;
  this.angle = random(0, TWO_PI);
  this.botImage = img;
  this.ydistance= 0.0;
  
  this.actualizing = function() {
    this.angle += 0.05;
    this.ydistance= sin(this.angle) * 20;
  }
  this.show = function() {
    image (this.botImage, this.xpos, this.ypos + this.ydistance);
  }
}