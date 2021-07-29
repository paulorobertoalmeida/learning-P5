let x ;
let y;

function setup() {
    createCanvas(600, 600);
    x = width / 2;
    y = height / 2;
    background(0);
}

function draw() {
    stroke(255, 100);
    strokeWeight(2);
    point(x, y);
    const r = floor(random(4));
    switch (r) {
        case 0:
            x = x + 1;
            break;
        case 1:
            x = x - 1;
            break;
        case 2:
            y = y +1;
            break;
        case 3:
            y = y - 1;
            break;            

    }

}