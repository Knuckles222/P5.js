let x;
let y;
let diam = 50;
let speed;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  speed = 5;
} 
function draw() {
  background(220);
  
  noStroke();
  fill("#80C8FF");
  ellipse(x, y, diam, diam);
  
  if (keyIsPressed){
    if (keyCode === UP_ARROW) {
      y -= speed;
    }
    if (keyCode === DOWN_ARROW) {
      y += speed;
    }
    if (keyCode === LEFT_ARROW) {
      x -= speed;
    }
    if (keyCode === RIGHT_ARROW) {
      x += speed;
    }
  }
}