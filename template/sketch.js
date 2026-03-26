function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(20);

  fill(0);
  circle(mouseX, mouseY, 40);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('sketch', 'png');
  }
}

function keyPressed(){
  if(key === 'r'){
    saveGif('sketch', 5);
  }
}