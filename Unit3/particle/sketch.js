let cars = [];
var snow;

function setup() {
  createCanvas(500, 500);
  noStroke();

  snow = loadImage('assets/snow.jpg');


  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }


}

function draw() {
  image(snow,0,0);

  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }


  }

}

class Car {
  constructor() {
    // attributes
    this.pos = createVector(100, 100);
    this.vel = createVector(random(5, 8), random(5, 8));
    this.a = random(200, 255);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.size = random(8, 20);
  }

  // methods
  display() {

    fill('white');
    textSize(this.size);
    text("snow", this.pos.x, this.pos.y, this.size, this.size);

    //ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
  move() {
    this.pos.add(this.vel);
    this.a -= 2;
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    //if (this.pos.y < 0) this.pos.y = height;
  }
}
