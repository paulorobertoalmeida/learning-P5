function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }
  
  function JitterBug(timeX, timeY, timeDiameter) {
    this.x = timex;
    this.y = timeY;
    this.diameter = timeDiameter
    this.speed = 0.5;
    
    this.move = function(){
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
    };
    this.show = function(){
      ellipse(this.x, this.y, this.diameter, this.diameter);
    };
  }
  