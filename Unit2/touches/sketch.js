let numberOfTouches ;
var jungle;

function setup() {
  createCanvas(windowWidth, windowHeight);
jungle = loadImage('assets/jungle.jpg');
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22) ;
      break ;

      case 1:
       text("it's kind of lonely here", 5, 22) ;
       image(jungle, width / 2, height / 2);
      // put a picture here
      break ;

      case 2:
      text("two fingers are touching the screen", 5, 22) ;
            // put a picture here
      break ;

      case 3:
     text("three are touching the screen", 5, 22) ;
            // put a picture here
      break ;


  }

}
