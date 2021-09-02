
let flower, minion, tiger;
let font1;

function setup() {
  createCanvas(500, 500);
  flower=loadImage("assets/flower.jpg");
    minion=loadImage("assets/minion.jpg");
      tiger=loadImage("assets/tiger.jpg");
      imageMode(CENTER);
      font1=loadFont("assets/c.ttf");

}

function draw() {

  background('yellow');

  image(flower,width/2,height/2,100,100);
  image(minion,width/2,height/2-120,100,100);
    image(tiger,width/2,height/2+120,100,100);

    textFont(font1);
    textSize(40);
    text("Go you redbird",100,100);


}
