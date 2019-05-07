//black and white
var video;

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width, height);
}

function draw() {
  background(0);
  video.loadPixels(); // pixels of video
  loadPixels(); // pixels of canvas

  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (x + y * video.width) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];

      var bright = (r + g + b) / 3;

      pixels[index+0] = bright;
      pixels[index+1] = bright;
      pixels[index+2] = bright;
      pixels[index+3] = 255;
    }
  }
  updatePixels();
}
