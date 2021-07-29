let inc= 0.01;

function setup() {
    createCanvas(200, 200);
    pixelDensity(1);
}

function draw() {
    let xoff = 0;
    let yoff = 0;
    loadPixels();
    
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y){
            let index = (x + y * width) * 4;
            let r = noise(xoff, yoff) * 255;
            pixels[index+0] = r;
            pixels[index+1] = r;
            pixels[index+2] = r;
            pixels[index+3] = r;

            xoff += 0.01
        }
    }
    updatePixels();
    noLoop();
}