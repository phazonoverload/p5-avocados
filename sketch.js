var movers = [];
var avocado;
var colorBg = '#18DA8D';
var colorGrid = '#9046FF';

function generateGrid() {
  strokeWeight(3);
  stroke(colorGrid);
  for (var w = 0; w < width; w += 20) {
    line(w, 0, w, height);
  }
  for (var h = 0; h < height; h += 20) {
    line(0, h, width, h);
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
}