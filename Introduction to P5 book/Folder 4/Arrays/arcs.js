// Arrays

let x1 = - 20;
let x2 = 20;


function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0);
  x1 += 0.5;
  x2 += 0.5;
  arc(x1, 30, 40, 40, 0.52, 5.76);
  arc(x2, 90, 40, 40, 0.52, 5.76);
}

// Arrays Ex2

let x1 = - 10;
let x2 = 10;
let x3 = 35;
let x4 = 18;
let x5 = 30;


function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0);
  x1 += 0.5;
  x2 += 0.5;
  x3 += 0.5;
  x4 += 0.5;
  x5 += 0.5;
  arc(x1, 20, 20, 20, 0.52, 5.76);
  arc(x2, 40, 20, 20, 0.52, 5.76);
  arc(x3, 60, 20, 20, 0.52, 5.76);
  arc(x4, 80, 20, 20, 0.52, 5.76);
  arc(x5, 1000, 20, 20, 0.52, 5.76);
  
}


// Arrays Ex 3 - Using array

let x = [];


function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(255, 200);
  for (let i = 0; i < 3000; i++ ) {
    x[i] = random(-1000, 200);
  }
}

function draw() {
  background(50);
  for (let i = 0; i < x.length; i++) {
    x[i] += 0.5;
    let y = i * 0.4;
    fill(255, 255, 0);
    arc(x[i], y, 12, 12, 0.52, 5.76);
  }
}

//Array Exemple 4

let x = [-20, 20];  //declaring the variable

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(50);
  x[0] += 0.5; //Increasing the first element
  x[1] += 0.5; //Increasing the second element
  fill(255, 255, 0);
  arc(x[0], 30, 40, 40, 0.52, 5.76);
  arc(x[1], 90, 40, 40, 0.52, 5.76);
  
}

// Array + for loop

let x = [12, 20];
console.log(x.length);

let y = ["cat", 10, false, 50];
console.log(y.length);

let z = [];
console.log(z.length);
z[0] = 20;
console.log(z.length);
z[1] = 4;
console.log(z.length);
console.log(z);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}


