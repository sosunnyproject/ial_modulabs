var video;
var vScale = 12;

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  // video.size(320, 240);
  video.size(width/vScale, height/vScale)
  // ㄴ original video size.
  // ㄴ divide by vScale: makes less lagging.
}

function draw() {
  background(51);
  video.loadPixels(); // pixels of video
  loadPixels(); // pixels of canvas
  for(var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      // var index = (x + y * video.width) * 4;
      var index = ((video.width-x+1) + y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      var bright = (r + g + b) / 3;
      var w = map(bright, 0, 225, vScale, 0);
      fill(bright);
      noStroke();
      fill(map(bright, 0, 225, 100, 50), map(sin(bright),-1, 1, 200, 0), map(tan(bright),-1, 1, 200, 100) );
      rectMode(CENTER);
      // rect(x*vScale, y*vScale,w, w);
        if ( 5 < w && w < 7 ) {
          rect(x*vScale, y*vScale, w, w);
        } else if ( w >= 7) {
          ellipse(x*vScale, y*vScale, w, w);
        }
    }
  }
  // updatePixels();
}
