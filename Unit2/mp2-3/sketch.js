var myState = 0;
var timer = 0;
var torabi1;
var torabi2;
var torabi3;
var torabi4;
var torabi5;
var torabi6;
var torabi7;
var torabi8;
let x = 0;
let font1;
let font2;
let mic;
var vol = 0;
let y = 170;

//function preload() {
//song1 = loadSound("assets/circus.mp3");
//song2 = loadSound("assets/wing1.mp3");
//song3 = loadSound("assets/lion.mp3");

// song1.loop();
// song1.pause();
// song2.loop();
// song2.pause();
// song3.loop();
// song3.pause();




function setup() {

  createCanvas(920,570);
  torabi1 = loadImage("assets/torabi1.png");
  torabi2 = loadImage("assets/torabi2.png");
  torabi3 = loadImage("assets/torabi3.png");
  torabi4 = loadImage("assets/torabi4.png");
  torabi5 = loadImage("assets/torabi5.png");
  torabi6 = loadImage("assets/torabi6.png");
  torabi7 = loadImage("assets/torabi7.png");
  torabi8 = loadImage("assets/torabi8.png");

  font1 = loadFont("assets/ff.otf");
  font2=loadFont("assets/font.ttf");

  //  mic = new p5.AudioIn();
  //  mic.start();

}


function draw() {
  switch (myState) {

    case 0:
      background('blue');
      //textFont(font2);
      fill('yellow');
      textSize(18);
      text("Mohammad Torabi",360,235);
      //  textAlign(CENTER) ;


      //song1.play();
      mystate = 1;
      timer++;
      if (timer > 3 * 60) {
        myState = 2;
        timer = 0;
      }
      break;

    case 1:
      background('blue');
      image(torabi1,0,0);
      fill('yellow')
      text("Mohamad Torabi is a villager who lives in one of northern villages in Iran", 50, 560);

      timer++;
      if (timer > 5 * 60) {
        myState = 2;
        timer = 0;
      }


      break;


    case 2:
      background('blue');
      image(torabi2,0, 0);
      fill('yellow')
      text("Mohamad Torabi is a farmer but he loves photography, he takes lots of pictures from his beautiful village", 50, 560);

      timer++;
      if (timer > 5 * 60) {
        myState = 3;
        timer = 0;
      }


      break;

    case 3:
      background('blue');
      image(torabi3,0, 0);
      fill('yellow')
      text("Mohamad Torabi is a farmer but he loves photography, he takes lots of pictures from his beautiful village", 50, 560);

      timer++;
      if (timer > 5 * 60) {
        myState = 4;
        timer = 0;
      }

      break;

    case 4:
      background('blue');
      image(torabi4,0,0);
      fill('yellow')
      text("Mohamad Torabi is a farmer but he loves photography, he takes lots of pictures from his beautiful village", 50, 560);

      timer++;
      if (timer > 5 * 60) {
        myState = 5;
        timer = 0;
      }

      break;

    case 5:
      background('blue');
      image(torabi5, 0, 0);
      fill('yellow')
      text("He has the famous Instagram page with lots of followers because of his beautiful pictures", 50, 560);

      timer++;
      if (timer > 5 * 60) {
        myState = 6;
        timer = 0;
      }

      break;


    case 6:
      background('blue');
      image(torabi6, 0, 0);
      fill('yellow')
      text("He has the famous Instagram page with lots of followers because of his beautiful pictures", 50, 560);

      timer++;
      if (timer > 5 * 60) {
        myState = 7;
        timer = 0;
      }

      break;

    case 7:
      background('blue');
      image(torabi7, 0, 0);
      fill('yellow')
      text("He has the famous Instagram page with lots of followers because of his beautiful pictures", 50, 560);

      timer++;
      if (timer > 5 * 60) {
        myState = 8;
        timer = 0;
      }

      break;

    case 8:
      background('blue');
      image(torabi8,0, 0);
      fill('yellow')
      text("He has the famous Instagram page with lots of followers because of his beautiful pictures", 50, 560);

      timer++;
      if (timer > 5 * 60) {
        myState = 0;
        timer = 0;


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
}
