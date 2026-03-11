function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);

  fill(255);
  circle(mouseX, mouseY, 40);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}