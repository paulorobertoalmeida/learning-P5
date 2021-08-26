// Robot 10

let out;

function setup() {
  createCanvas(720, 400);
  out = createWriter("bots.tsv");
  
  out.print("tipo\tx\ty");
  for ( let y = 0; y <= height; y += 60) {
    for( let x = 0; x <= width; x += 20) {
      let typeRobot = int(random(1, 4));
      out.print(typeRobot + "\t" + x + "\t" + y);
      ellipse(x, y, 12, 12);
    }
  }
  out.close();
}

function draw() {
  background(220);
}


//Robot

let robot;
let bot1;
let bot2;
let bot3;

function preload() {
  bot1 = loadImage("robot1.png");
  bot2 = loadImage("robot2.png");
  bot3 = loadImage("robot3.png");
  robots = loadTable("exerciseBot.tsv", "header");
}

function setup() {
  createCanvas(720, 480);
  imageMode(CENTER);
  for ( let = i; i < robots.getRowCount(); i++) {
    let bot = robots.getNum(i, "type");
    let x = robots.getNum(i, "x");
    let y = robots.getNum(i, "y");
    let escala = 0.15;
    if (bot == 1) {
      image(bot1, x, y, bot1.width*escala, bot1.height*scale);
    } else if (bot == 2) {
      image(bot2, x, y, bot2.width*scale, bot2.height*scale);
    } else {
      image(bot3, x, y, bot3.width*scale, bot3.height*scale);
    }
  }
}

function draw() {
  background(220);
}


//

let numTypeRobot = 3;
let images = [];
let scale = 0.15;
let exercitoBot;

function preload() {
  for (let i = 0; i < numberRobot; i++) {
    images[i] = loadImage("robot" + (i+1) + ".png");
  }
  exerciseBot = loadtable("exerciseBot.tsv", "header");
}

function setup() {
  createCanvas(720, 480);
  imageMode(CENTER);
  for( let i = 0; i < exerciseBot.getRowCount(); i++) {
    let robotType = exerciseBot.getNum(i, "type");
    let x = exerciseBot.getNum(i, "x");
    let y = exerciseBot.getNum(i, "y");
    let bot = images[robotType -1];
    image(bot, x, y, bot.width * width * scale, bot, bot.height * scale);
  }
}

function draw() {
  background(220);
}