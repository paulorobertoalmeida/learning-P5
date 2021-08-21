// Your weight in Mars

function setup() {
    createCanvas(400, 400);
    background(0);
    let yourWeight = 67;
    let marsWeight = calculateMars(yourWeight);
    print(marsWeight);
  }
  
  function calculateMars(p) {
    let newWeight = p * 0.38;
    return newWeight;
  }