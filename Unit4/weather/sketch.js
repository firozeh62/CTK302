// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var temp=0;
var humid=0;
var sun;
let song1;
let mic;

function preload() {
  song1 = loadSound("assets/bird.mp3");
}



function setup() {
  createCanvas(400, 400);
    sun = loadImage('assets/sun.jpg');

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Normal,IL,US&units=imperial&';

  //You can also use "zipcode" - var myIDString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=18631f3f81dd5e511dea6ed745537c73'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp=weather.main.temp;
  humid=weather.main.humidity;

}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(200);
      image(sun, 0, 0);
      fill('black');
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("tempreture is " + temp, 20, 40);
      text("tempreture is " + temp, 20, 40);
  text("humidity is " + temp, 20, 60);
    song1.play();

      // cloud
      fill('blue');
      noStroke();
      ellipse(x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed/3;
      if (x > width) x = 0;

      break;

  }
}

function touchStarted() {
  getAudioContext().resume();
}
