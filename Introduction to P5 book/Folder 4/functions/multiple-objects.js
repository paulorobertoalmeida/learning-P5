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