//Optical art exemple

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    sliderX = 30;
    sliderY = 20;
}

function draw() {
    background(255);

    noFill();
    translate(width/2, height/2);
    for(let x = 320; x >= 40; x/1.8) {
        rotate(radians(frameCount/2));
        fill(sliderY, 40);
        rect(0, 0, x, x);
}