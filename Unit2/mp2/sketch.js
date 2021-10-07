var clown;
var bird;
var tent;
var font;
let State = 0;


function preload() {
  tent = loadImage('assets/tent.png');
  clown = loadImage('assets/clown.png');
  bird = loadImage('assets/bird.png');


}

function setup() {

  createCanvas(700, 400);

}

function draw() {

  background('blue');
  circle(600, 70, 50);
  fill("yellow")

  image(tent, 35, 10, 300, 300);
  filter(BLUR, 3);
  image(clown, 340, 150, 220, 220);
  image(bird, 5, 5, 60, 60);

  switch (State) {


    case 0:
      tent = loadImage('assets/tent.png');

      text("Circus", 100, 100);
      break;
    case 1:
      clown = loadImage('assets/clown.png');

      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}
