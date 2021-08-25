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