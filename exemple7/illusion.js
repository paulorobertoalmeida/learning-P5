let angle = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    fill(255);
    noStroke();
    strokeWeight(2);

    push();
    translate(150,150); 
    rotate(HALF_PI + angle);
    arc(0, 0, 80, 80, PI, HALF_PI);
    pop();

    push();
    translate(250,150); 
    rotate(HALF_PI * 2 - angle);
    arc(0, 0, 80, 80, PI, HALF_PI);
    pop();

    push();
    translate(250,250); 
    rotate(HALF_PI * 3 - angle);
    arc(0, 0, 80, 80, PI, HALF_PI);
    pop();

    push();
    translate(150,250); 
    rotate(HALF_PI * 4 + angle);
    arc(0, 0, 80, 80, PI, HALF_PI);
    pop();

    angle += 0.003
 
}