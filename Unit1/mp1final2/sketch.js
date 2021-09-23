let song1;

function preload() {
  song1 = loadSound("assets/balloon.mp3");
}


function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}



function draw() {

  background(100);


  if (mouseIsPressed) {

    fill(163, 13, 180)
    rect(300, 800, 3500, 4000);

  } else {
    // when the mouse isn't pressed!

    fill(129, 193, 224)
    rect(300, 800, 3500, 4000);
  }


  fill('green')
  rect(300, 800, 1500, 700);

  //balloon
  if (mouseIsPressed) {
    line(423, 336, 613, 185);
    fill('red');
    quad(528, 57, 548, 95, 591, 95, 562, 52);
    quad(704, 197, 700, 245, 716, 202, 704, 197);
    quad(628, 201, 659, 209, 661, 181, 640, 169);
    quad(672, 80, 704, 94, 704, 49, 680, 38);
    quad(764, 133, 807, 154, 807, 113, 768, 89);
    quad(766, 245, 795, 261, 790, 226, 756, 220);

  } else {

    line(423, 336, 613, 185);
    fill('red');
    ellipse(650, 150, 200, 170, 50);
    quad(577, 212, 566, 212, 580, 223, 580, 210);
  }

  //hand
  fill(219, 189, 124);
  ellipse(290, 350, 50);
  fill(219, 189, 124);
  ellipse(400, 350, 50);



  //body
  fill(211, 60, 127)
  quad(313, 294, 226, 511, 480, 516, 375, 298);

  //foot
  fill(236, 147, 41)
  arc(400, 517, 60, 70, PI, 0);
  fill(236, 147, 41)
  arc(300, 517, 60, 70, PI, 0);


  //face


  fill(219, 189, 124);
  ellipse(350, 250, 130, 110);

  if (mouseIsPressed) {
    fill('black');
    ellipse(330, 247, 20, 10);
    fill('black');
    ellipse(370, 247, 20, 10);
    fill('blue');
    ellipse(300, 255, 12, 8);
    ellipse(290, 265, 10, 8);
    ellipse(280, 275, 9, 7);
    ellipse(270, 285, 8, 6);
    ellipse(390, 257, 12, 8);
    ellipse(400, 267, 10, 8);
    ellipse(410, 277, 9, 7);
    ellipse(420, 287, 8, 6);


  } else {

    fill('black');
    ellipse(330, 247, 20, 20);
    fill('black');
    ellipse(370, 247, 20, 20);
  }

  if (mouseIsPressed) {
    noFill();
    arc(350, 300, 75, 70, PI, 0);
  } else {

    noFill();
    arc(350, 260, 75, 75, 0, PI);
  }

  //hair
  fill(78, 41, 2)
  arc(350, 230, 130, 110, PI, 0);
  quad(286, 227, 233, 210, 247, 276, 289, 228);
  quad(411, 227, 460, 207, 467, 253, 410, 230);

  fill('yellow');
  ellipse(285, 230, 15, 20);
  fill('yellow');
  ellipse(415, 230, 15, 20);


  fill("black");
  text(" This is Suzy, she is so cute but she can easily get annoyed \n when her toys are broken. She is able to make toys out of used products.\n to make it clear, you can give her used objects and see how she makes the creative toy out of them.", 0, 60);


}



// this shows mouse location - comment it out when you're done!

fill(0);
text(mouseX + ", " + mouseY, 40, 40);



function mouseRleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.loop();
  }

}

function touchStarted() {
  getAudioContext().resume();
}




// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
