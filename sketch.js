var movers = [];
var avocado;
var colorBg = '#18DA8D';
var colorGrid = '#9046FF';
var gridSpacing = 40;

function generateGrid() {
  strokeWeight(3);
  stroke(colorGrid);
  for (var w = 0; w < width; w += gridSpacing) {
    line(w, 0, w, height);
  }
  for (var h = 0; h < height; h += gridSpacing) {
    line(0, h, width, h);
  }
}

function generateAvocado() {
  var sizeHeight = gridSpacing * 1.5;
  var sizeWidth = (sizeHeight / 10) * 7;
  
  for(var a = gridSpacing / 4; a < height; a += gridSpacing * 2) {
    for(var b = gridSpacing / 2; b < width; b += gridSpacing * 2) {
      image(avocado, b, a, sizeWidth, sizeHeight); 
    }
  }
}

function preload() {
  avocado = loadImage('assets/avocado.svg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(colorBg);
}

function draw() {
  generateGrid();
  generateAvocado();
}