var avocados = [];
var colorBg = '#FC62D0';
var colorGrid = '#9046FF';
var gridSpacing = 30;

function generateGrid() {
  strokeWeight(1.5);
  stroke(colorGrid);
  for (var w = 0; w < width; w += gridSpacing) {
    line(w, 0, w, height);
  }
  for (var h = 0; h < height; h += gridSpacing) {
    line(0, h, width, h);
  }
}

function Avocado() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.scale = random(0.5, 1.5);

  this.create = function() {
    image(avocadoImg, this.x, this.y, 35 * this.scale, 50 * this.scale);
  }

  this.move = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
}

function preload() {
  avocadoImg = loadImage('assets/avocado.svg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(colorBg);
  for(var i = 0; i < 200; i++) {
    avocados[i] = new Avocado();
  }
}

function draw() {
  background(colorBg);
  generateGrid();
  for(a = 0; a < avocados.length; a++) {
    avocados[a].create();
    avocados[a].move();
  }
}