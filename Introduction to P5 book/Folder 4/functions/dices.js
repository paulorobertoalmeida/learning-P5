//Playing with the Dices

function setup() {
    createCanvas(400, 400);
    print("throw the dices");
    throwDice(20);
    throwDice(20);
    throwDice(6);
    print("Ready");
  }
  
  function throwDice(sideNumbers) {
    let d = 1 + int(random(sideNumbers));
    print("Throwing..." + d);
  }