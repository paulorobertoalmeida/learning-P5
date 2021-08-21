// Creating an object

var bug;

function setup() {
  createCanvas(600, 600);
  background(47,79,79);
  bug = new JitterBug(width/2, height/2, 30);
}

function draw() {
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