let pontoA = null;
let pontoB = null;

function setup() {
  createCanvas(500, 500);
  strokeWeight(3); 
}

function draw() {
  background(220);

  if (pontoA) {
    fill(255, 0, 0);
    noStroke();
    circle(pontoA.x, pontoA.y, 20);
  }

  if (pontoB) {
    let meioX = (pontoA.x + pontoB.x) / 2;
    let meioY = (pontoA.y + pontoB.y) / 2;

    
    stroke(255, 0, 0);
    line(pontoA.x, pontoA.y, meioX, meioY);

    stroke(0, 0, 255);
    line(meioX, meioY, pontoB.x, pontoB.y);

    fill(0, 0, 255);
    noStroke();
    circle(pontoB.x, pontoB.y, 20);
  }
}

function mouseClicked() {
  if (!pontoA) {
    pontoA = { x: mouseX, y: mouseY };
  } else if (!pontoB) {
    pontoB = { x: mouseX, y: mouseY };
  } else {
    pontoA = { x: mouseX, y: mouseY };
    pontoB = null;
  }
}