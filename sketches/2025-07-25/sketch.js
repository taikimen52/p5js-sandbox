let a = 1.8;
let b = 0.2;
let c = 1.2;
let d = 0.0;

let x = 0.0;
let y = 0.0;

let scaler = 50;

function setup() {
  createCanvas(600, 600);
	frameRate(40);
}

function draw(){
	background(0,30,30,20);
	translate(width / 2, height / 2);
  
   for (let i = 0; i <5000; i++) {
    let xNext = sin(a * y) + c* cos(a * x);      
    let yNext = sin(c * x) + d* cos(b * y);
   
    x = xNext;
    y = yNext;
     
    stroke(255,250,250)
    point(x * scaler, y * scaler);
	 }
	if(d< 3.2){
		d += 0.01;
		b += 0.005;
	}else{
		noLoop;
	}
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