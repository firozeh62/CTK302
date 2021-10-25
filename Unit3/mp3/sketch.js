let cars = [];
let maxCars = 30;
let state = 0;
let timer = 0;
var background3;
var cat;
var gameover;
var mouse;
var start;

let frogPos;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background3 = loadImage('assets/background3.jpg');
  cat = loadImage('assets/cat.png');
  gameover = loadImage('assets/gameover.jpg');
  mouse = loadImage('assets/mouse.png');
  start = loadImage('assets/start.jpg');



  // Spawn many object

  for (let i = 0; i < 5; i++) {
    cars.push(new Car());
  }



  //initialize frog position
  frogPos = createVector(width / 2, height - 130);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  switch (state) {


    case 0: //welcom

      background("black");
      image(start, width / 2, height / 2);


      break;

    case 1: // game state
      game();
      timer++;
      if (timer > 15 * 60) {
        state = 3;
        timer = 0;
      }
      break;

    case 2: // winning state

      background("green");
      fill("white");
      textSize(48);
      text("you win", 100, 100);
      break;


    case 3:

      background("blue");
      image(gameover, width / 2, height / 2);

      break; // losing state

  }

}


function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: // the win state
      resetTheGame();
      state = 0;
      break;

    case 3: // the lose state
      resetTheGame();
      state = 0;
      break;

  }
}



function game() {
  image(background3, width / 2, height / 2);
  //you would put background image here

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 30) {
      cars.splice(i, 1); //this takes out a car
    }
  }

  if (cars.length == 0) {
    state = 2;
  }

  //print out how many cars are left
  fill("white");
  textSize(16);
  text("cars left:" + cars.length, 20, 30);

  //make frog

  fill("green");
  image(cat, frogPos.x, frogPos.y, 150, 150);
  checkForKeys();
}

function resetTheGame() {
  timer = 0;
  cars = [];

  // Spawn many object

  for (let i = 0; i < 30; i++) {
    cars.push(new Car());
  }

}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}

// Car class
class Car {
  constructor() {
    this.pos = createVector(random(width), random(height - 120));
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.cor = color(0, random(20, 40), random(50, 100), random(30));
    this.size = random(90, 60);
    this.maxTimer = random(10, 50);
  }

  // methods

  display() {
    fill(this.cor);
    // rect(this.pos.x, this.pos.y, 75, 25);
    textSize(this.size);
    image(mouse, this.pos.x, this.pos.y, 100, 100);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
