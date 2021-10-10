let state = 0;
let minion;
let mickey;

function setup() {
  createCanvas(400, 400);
  minion = loadImage("assets/minion.jpg");
  mickey = loadImage("assets/mickey.png");


}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("purple");
      text("state 0", 100, 100);
      noStroke() ;
      fill(255, 90) ;
      for (let j = 0; j <= height; j += 20) {
        for (let i = 0; i <= width; i += 20) {
          rect(i, j, 5, 15);
        }
      }
      break;

    case 1:
      background("orange");
        image(mickey,20,30);
      text("state 1", 100, 100);
      break;


    case 2:
      background("yellow");
      text("state 2", 100, 100);
      break;

    case 3:
      background("purple");
      image(minion,0,0);
      text("state 3", 100, 100);
      break;

    case 4:
      background("blue");
      text("state 4", 100, 100);
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}
