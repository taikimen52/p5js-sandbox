
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#A2D5C6");

}

function draw() {
  textFont('Courier New');
  textAlign(CENTER, CENTER);
  textSize(50);
  text("hi", windowWidth/2, windowHeight/2);
  noisePattern();
}

function noisePattern(){
  let noiseLevel = 255;
  let noiseScale = 0.4;

  // Iterate from top to bottom.
  for (let y = 0; y < height; y += 2) {
    // Iterate from left to right.
    for (let x = 0; x < width; x += 1) {
      // Scale the input coordinates.
      let nx = noiseScale * x;
      let ny = noiseScale * y;
      let nt = noiseScale * frameCount;

      // Compute the noise value.
      let c = noiseLevel * noise(nx, ny, nt);

      // Draw the point.
      stroke(c, c, 100, 50);

      point(x, y);

    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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
