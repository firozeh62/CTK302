function setup() { 
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}



function draw() {

  background(100);


  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed

  } else {
    // when the mouse isn't pressed!

    background(119, 202, 211);
    fill('green')
    rect(300, 800, 1500, 700);

    //hand

    line(423, 336,613, 185);
    fill('red')
    ellipse(650,150,200,170,50);
    quad(577,212,566,212,580,223,580,210)


    fill(219, 189, 124);
    ellipse(290,350,50);
     fill(219, 189, 124);
    ellipse(400,350,50);



    //body
    fill(211, 60, 127)
    quad(313,294,226,511,480,516,375,298);
     //foot
    fill(236, 147, 41)
     arc(400, 517, 60, 70, PI, 0);
     fill(236, 147, 41)
     arc(300, 517, 60, 70, PI, 0);


    //face
    fill(219, 189, 124);
    ellipse(350,250,130,110);
    fill('black');
    ellipse(330,247,20,20);
      fill('black');
    ellipse(370,247,20,20);
    noFill();
    arc(350, 250, 75, 80, 0, PI);
    //hair
    fill(78, 41, 2)
     arc(350, 230, 130, 110, PI, 0);
    quad(286, 227,233, 210,247, 276,289, 228);
     quad(411,227,460,207,467,253,410,230);

     fill('yellow');
    ellipse(285,230,15,20);
    fill('yellow');
    ellipse(415,230,15,20);











  }



  // this shows mouse location - comment it out when you're done!

  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);

}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
