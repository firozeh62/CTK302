let song1;

function preload() {
  song1 = loadSound("assets/bensound-happyrock.mp3");
}

function setup() {
  createCanvas(500, 500);
  song1.loop();
}

function draw() {

  background("blue");
  //if the song is playing and someone clicked.
  // theen stop the song,otherwise start the song

}

function mouseRleased() {
  if (song1.isPlaying()) {
    song1pause();
  } else {
    song1.loop();
  }

}

function touchStarted() {
  getAudioContext().resume();}
}
