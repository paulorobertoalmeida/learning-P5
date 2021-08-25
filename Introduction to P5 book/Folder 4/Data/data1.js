//Loading tables ( Getting data)

let statistics;

function preload(){
  statistics = loadTable("");
}

function setup() {
  //createCanvas(400, 400);
  for (let i = 0; i < statistics.getRowCount();i++){
    let period = statistic.get(i, 0);
    let homeRuns = statistics.get(i, 1);
    let rbi = statistics.get(i,2);
    let average = statisctics.get(i, 3);
    console.log(period, homeHuns, rbi, average);
  }
}

function draw() {
  background(220);
}

//Loading tables

let statistics;
let homeRuns = [];

function preload(){
  statistics = loadTable("");
}

function setup() {
  createCanvas(480, 120);
  
  let stackNumber = statistics.getRowCount();
  homeRuns = [];
  for (let i = 0; i < stackNumber; i++) {
    homeRuns[i] = statistics.getNum(i, 1);
  }
}

function draw() {
  background(220);
  stroke(153);
  line(20, 100, 20, 20);
  line(20, 100, 460, 100);
  for( let i = 0; i < homeRuns.length; i++){
    let x = map(i, 0, homeRuns-1, 20, 460);
    line(x, 20, x, 100);
  }
  noFill();
  stroke(0);
  beginShape();
  for(let i = 0; i < homeRuns.length; i++) {
    let x = map(i, 0, homeRuns-1, 20, 460);
    let y = map(homeRuns[i], 0, 60, 100, 20);
    vertex(x, y);
  }
  endShape();
}