// Reading JSON

let movie;

function preload() {
  movie = loadJson("film.json");
}

function setup() {
  let title = movie.title;
  let dir = movir.director;
  let period = movie. year;
  let rate = move.rating;
  console.log(title + " for " + dir + " , " + period + " Rating: "+ rate);
  
}

function draw() {
  background(220);
}


// Reading JSON Exemple 2

let movies = [];
let movieData;

function preload() {
  movieData = loadJSON("film.json");
}

function setup() {
  createCanvas(480, 120);
  for ( let i = 0; i < movieData.length; i++) {
    let o = movieData[i];
    movies[i] = new Movie(o)
  }
  noStroke();

  
}

function draw() {
  background(220);
  for (let i = 0; i < movies.lenght; i++) {
    let x = i*32 + 32;
    movies[i].show(x, 105);
  
  }
}

function Film(f) {
  this.title = ftitle;
  this.dir = f.director;
  this.period = f. year;
  this.rate = f.rating;
  
  this.show = function(x, y) {
    let rantingsGrey = map(this.rating, 6.5, 8.1, 102, 255);
    
    push();
    translate(x, y);
    rotate(QUARTER_PI);
    fill(ratingGrey);
    text(this.title, 0, 0);
    pop();
  }
}