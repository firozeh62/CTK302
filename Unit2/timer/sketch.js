var myState = 0;
var timer = 0;
var tom;
var tom2;
var tom3;
var tom4;







function setup() {

  createCanvas(920, 570);
  tom = loadImage("assets/tom.jpg");
  tom2 = loadImage("assets/tom2.jpg");
  tom3 = loadImage("assets/tom3.jpg");
  tom4 = loadImage("assets/tom4.jpg");


}


function draw() {
  switch (myState) {

    case 0:
      background('blue');
      image(tom, 0, 0);

      mystate = 1;
      timer++;
      if (timer > 2 * 60) {
        myState = 2;
        timer = 0;
      }
      break;

    case 1:
      background('blue');
      image(tom2, 0, 0);


      timer++;
      if (timer > 3 * 60) {
        myState = 2;
        timer = 0;
      }


      break;


    case 2:
      background('blue');
      image(tom3, 0, 0);

      timer++;
      if (timer > 4 * 60) {
        myState = 3;
        timer = 0;
      }


      break;

    case 3:
      background('blue');
      image(tom4, 0, 0);


      timer++;
      if (timer > 5 * 60) {
        myState = 0;
        timer = 0;
      }

      break;

  }



  function mouseReleased() {
    //song1.pause();
    //  song2.pause();
    //song3.pause();

    myState = myState + 1;
    if (myState > 4) {
      myState = 0;

    }
  }


  function touchStarted() {
    getAudioContext().resume();
  }
}
