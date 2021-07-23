function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(255);
    //circle
    let x = 200;
    let y = 200;
    let radius= 200;
    let c = color('green');
    fill(c);
    circle(x, y, radius);
    
    //square 1
    let z = 50;
    let w = 50;
    let quadrado = 100;
    let h = color('red');
    fill(h);
    noStroke();
    square(z, w, quadrado);
    
    //square2
    let u = 210;
    let t = 200;
    let retangulo = 80;
    let k = color('yellow');
    fill(k);
    rect(u, t, retangulo)
  }