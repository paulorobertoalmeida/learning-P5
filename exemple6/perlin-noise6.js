var yoff = 0.0;        // 2nd dimension of perlin noise

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(100, 130, 130, 1);

  fill(color(50, 30, 200,1));
  // We are going to draw a polygon out of the wave points
  beginShape(); 
  
  var xoff = 0;       // Option #1: 2D Noise
  //var xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 5) {
    // Calculate a y value according to noise, map to 
    
    // Option #1: 2D Noise
    var y = map(noise(xoff, yoff), 0, 1, 100,300);

    // Option #2: 1D Noise
     //var y = map(noise(xoff), 0, 1, 200,300);
    
    // Set the vertex
    vertex(x, y); 
    // Increment x dimension for noise
    xoff += 0.02;
  }
  // increment y dimension for noise
  yoff += 0.0085;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}