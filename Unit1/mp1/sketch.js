function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}



function draw() {

  background(100);


  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    fill('red');
ellipse(100,100,100,100)
quad(351, 351,454, 470,614, 369,486, 217)
  } else {
    // when the mouse isn't pressed!

  }



  // this shows mouse location - comment it out when you're done!

  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);

}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
