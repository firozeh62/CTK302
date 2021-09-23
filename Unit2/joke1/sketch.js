let state = 0;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {
    case 0:
      background('gray');
      text("Why do you never see elephants \n hiding in trees?", 100, height / 2);
      break;

    case 1:
      background('yellow');
      text("Because  they're so good at it", 100, height / 2);
      break;
  }

}

function mouseReleased() {
  state++;
  if (state > 1) state = 0;
}
