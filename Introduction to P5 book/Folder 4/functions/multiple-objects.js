//Multiple Objects

var jit;
var bug;

function setup() {
  createCanvas(600, 600);
  background(50);
  jit = new JitterBug(width * 0.33, height/2, 50);
  bug = new JitterBug(width * 0.66, height/2, 10);
}

function draw() {
  
  
  jit.move();
  jit.show();
  bug.move();
  bug.show();
  
}

function JitterBug(timeX, timeY, timeDiameter) {
    this.x = timeX;
    this.y = timeY;
    this.diameter = timeDiameter
    this.speed = 2;
    
    this.move = function(){
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
    };
    
    this.show = function(){
      ellipse(this.x, this.y, this.diameter, this.diameter);
    };
  }


  //Multiple Objects
let jit;
let bug;
let jit2;
let bug2;

function setup() {
  createCanvas(600, 600);
  background(112,128,144);
  jit = new JitterBug(width * 0.33, height/2, 40);
  bug = new JitterBug(width * 0.66, height/2, 20);
  jit2 = new JitterBug(width * 0.76, height/2, 40);
  bug2 = new JitterBug(width * 0.11, height/2, 20);
}

function draw() {
  
  
  jit.move();
  jit.show();
  bug.move();
  bug.show();
  jit2.move();
  jit2.show();
  bug2.move();
  bug2.show();
  
}