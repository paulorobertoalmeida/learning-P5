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