
let flower, minion, tiger;
function setup() {
  createCanvas(500, 500);
  flower=loadImage("assets/flower.jpg");
    minion=loadImage("assets/minion.jpg");
      tiger=loadImage("assets/tiger.jpg");
      imageMode(CENTER);
}

function draw() {

  background('yellow');



  image(flower,width/2,height/2,100,100);
  image(minion,width/2,height/2-120,100,100);
    image(tiger,width/2,height/2+120,100,100);



}
