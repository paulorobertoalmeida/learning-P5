//Dice with random choices

let roll1 = 1;
let roll2 = 2;
let counter = 0;
let endGame;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  endGame = false;
}

function draw() {
  background(50);
  dice(100, 200, roll1);
  dice(280, 200, roll2);
  
  if(roll1 == roll2){
    text('You did it', 80, 100);
    counter = 0;
    endGame = true;
  } else {
    text('Counter = ' +counter, 150, 350)
    text('Click to Roll the Dice', 100, 50)
    endGame = false;
  }
  
}

function dice(diceX, diceY, roll){
  textSize(18);
  if(roll == 1){
  fill(0, 168, 168);
  rect(diceX, diceY, 50, 50, 10);
  fill(255);
  rect(diceX -1, diceY- 4, 50, 50, 10);
  stroke(0);
  fill(255, 0, 0);
  text('1', diceX-4, diceY+5);
  }
   if(roll == 2){
  fill(0, 168, 168);
  rect(diceX, diceY, 50, 50, 10);
  fill(255);
  rect(diceX -1, diceY- 4, 50, 50, 10);
  stroke(0);
  fill(255, 0, 0);
  text('2', diceX-4, diceY+5);
  }
  if(roll == 3){
  fill(0, 168, 168);
  rect(diceX, diceY, 50, 50, 10);
  fill(255);
  rect(diceX -1, diceY- 4, 50, 50, 10);
  stroke(0);
  fill(255, 0, 0);
  text('3', diceX-4, diceY+5);
  }
  if(roll == 4){
  fill(0, 168, 168);
  rect(diceX, diceY, 50, 50, 10);
  fill(255);
  rect(diceX -1, diceY- 4, 50, 50, 10);
  stroke(0);
  fill(255, 0, 0);
  text('4', diceX-4, diceY+5);
  }
  if(roll == 5){
  fill(0, 168, 168);
  rect(diceX, diceY, 50, 50, 10);
  fill(255);
  rect(diceX -1, diceY- 4, 50, 50, 10);
  stroke(0);
  fill(255, 0, 0);
  text('5', diceX-4, diceY+5);
  }
  if(roll == 6){
  fill(0, 168, 168);
  rect(diceX, diceY, 50, 50, 10);
  fill(255);
  rect(diceX -1, diceY- 4, 50, 50, 10);
  stroke(0);
  fill(255, 0, 0);
  text('6', diceX-4, diceY+5);
  }
}

function mouseReleased(){
  roll1 = int(random(1,7));
  roll2 = int(random(1,7));
}

function mouseClick(){
  counter += 1
}
