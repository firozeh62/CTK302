var myState = 0;
var timer = 0;
var clown;
var bird;
var tent;
var circus;
var lion;
let x = 0;
let font1;
let mic;
var vol = 0;
let y = 170;

function preload() {
  song1 = loadSound("assets/circus.mp3");
  song2 = loadSound("assets/wing1.mp3");
  song3 = loadSound("assets/lion.mp3");

  // song1.loop();
  // song1.pause();
  // song2.loop();
  // song2.pause();
  // song3.loop();
  // song3.pause();

}



function setup() {

  createCanvas(700, 400);
  font1 = loadFont("assets/ff.otf");
  tent = loadImage("assets/tent.png");
  clown = loadImage("assets/clown.png");
  bird = loadImage("assets/bird.png");
  circus = loadImage("assets/circus.jpg");
  lion = loadImage("assets/lion.png");
  //  mic = new p5.AudioIn();
  //  mic.start();

}


function draw() {
  switch (myState) {

    case 0:
      //song1.play();
      mystate = 1;
      break;

    case 1:
      background('blue');
      fill("yellow");
      circle(600, 70, 50);
      image(tent, 70, 90, 300, 300);
      filter(BLUR, 3);
      text("welcome to the circus", 100, 50);
      fill("white");
      textSize(30);
      text("click", x, 200);
      x = x + 3;
      if (x >= width) {
        x = 0;
        mystate = 2;
      }


      break;


    case 2:
      background('blue');
      image(tent, 70, 90, 300, 300);
      image(clown, 380, 170, 220, 220);

      mystate = 3;

      break;
    case 3:
      background('blue');
      image(tent, 70, 90, 300, 300);
      image(clown, 380, 170, 220, 220);




      break;

    case 4:
      background('blue');
      image(tent, 70, 90, 300, 300);
      image(bird, 350, y, 100, 100);
      image(clown, 380, 170, 220, 220);

      //image(bird, 300, y);
      //song2.play();
      y = y - 1;
      if (y <= 0) {
        mystate = 5;
        //song1.stop();
        song3.play();
        y = 170;
      }


      break;


    case 5:
      background('blue');
      image(tent, 70, 90, 300, 300);
      image(clown, 380, 170, 220, 220);
      image(lion, 100, 70, 500, 500);
      //song3.play();
      timer++;
      if (timer > 5 * 60) {
        myState = 6;
        timer = 0;
      }
      break;

    case 6:
      song1.stop();
      mystate = 0;


      break;


  }

}

function mouseReleased() {
  //song1.pause();
  //  song2.pause();
  //song3.pause();

  myState = myState + 1;
  if (myState > 6) {
    myState = 0;

  }
}


function touchStarted() {
  getAudioContext().resume();
}
