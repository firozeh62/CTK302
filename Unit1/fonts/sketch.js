let font1;
let font2;

function setup() {
  createCanvas(500, 500);
  font1=loadFont("assets/c.ttf");
  font2=loadFont("assets/font.ttf");
}

function draw() {
  background("yellow");
  textFont(font1);
  textSize(50);
  text("hello world",100,100);
textFont(font2);
textSize(48);
text("Firozeh" ,width/2,150);
}
