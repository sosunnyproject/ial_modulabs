// black and white rectangle
// smaller videoSize
var video;
var vScale = 12;

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale)
  // ㄴ original video size.
  // ㄴ divide by vScale: makes less lagging.
}

function draw() {
  background(51);
  video.loadPixels();
  loadPixels();
  for(var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (x + y * video.width) * 4;

      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      var bright = (r + g + b) / 3;

      fill(bright);

      rect(x*vScale, y*vScale, vScale, vScale);

    }
  }
}
