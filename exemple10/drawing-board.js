function setup() {
    createCanvas(400, 400);
    background(220);
}

function draw() {
    for (let i = 50; i < width - 50; i += 50){
        for (let j = 50; j <height - 50; j += 50){
            stroke(175, 0, 0);
            strokeWight(10);
            point(i, j);
        }
    }
}

function mouseDragged() {
    stroke(mouseX, mouseY, 0);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
}