let font1;

function setup() {
  createCanvas(500, 500);
  font1=loadFont("assets/c.ttf");
}

function draw() {
  background("yellow");
  textFont(font1);
  textSize(50);
  text("hello world",200,200);

}
