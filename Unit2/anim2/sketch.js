// Reed Cavi's Rain Man

let x=0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  push();
translate(x,0);
  avatar();
  pop();
  x=x+3;
  if(x>width){
    x=-300;
  }

}

function avatar(){
  //hand
     fill(219, 189, 124);
     ellipse(290,350,50);
      fill(219, 189, 124);
     ellipse(400,350,50);

     line(423, 336,613, 185);
     fill('red');
     ellipse(650,150,200,170,50);
     quad(577,212,566,212,580,223,580,210);



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

    if (mouseIsPressed) {
       fill('black');
     ellipse(330,247,20,10);
       fill('black');
     ellipse(370,247,20,10);
      fill('blue');
      ellipse(300,255,12,8);
      ellipse(290,265,10,8);
      ellipse(280,275,9,7);
      ellipse(270,285,8,6);
      ellipse(390,257,12,8);
      ellipse(400,267,10,8);
      ellipse(410,277,9,7);
      ellipse(420,287,8,6);


    } else {

     fill('black');
     ellipse(330,247,20,20);
       fill('black');
     ellipse(370,247,20,20);}

   if (mouseIsPressed) {
      noFill();
     arc(350, 300, 75, 70,PI,0);} else {

     noFill();
     arc(350, 260, 75, 75, 0,PI);}

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
