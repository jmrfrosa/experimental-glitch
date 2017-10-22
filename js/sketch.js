let originalImage;

function preload() {
  originalImage = loadImage("assets/originalFile.jpg");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas');

  let noiseImage = noiseFill(originalImage.get(), 130);
  let experimentalImage = experimentalFill(originalImage.get(), 35);

  image(originalImage, 0, 0, width/2, height/2)
  image(noiseImage, width/2, 0, width/2, height/2);
  image(experimentalImage, 0, height/2, width/2, height/2);
}

function draw() {
  
}

function noiseFill(image, threshold = 255) {
  image.loadPixels();
  for(var i = 0; i < image.pixels.length; i++) {
    if (image.pixels[i] < threshold) {
      image.pixels[i] = floor(random(0,255));
    }
  }
  image.updatePixels();
  return image;
}

function experimentalFill(image, threshold = 255) {
  image.loadPixels();
  for(var i = 0; i < image.pixels.length; i++) {
    if (image.pixels[i] < threshold) {
      image.pixels[i] = map(i, 0, 255, 0, image.pixels.length);
    }
  }
  image.updatePixels();
  return image;
}