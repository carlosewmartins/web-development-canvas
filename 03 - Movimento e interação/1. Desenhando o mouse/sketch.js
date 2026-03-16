function setup() {
  createCanvas(500, 500);
}

function mostrarMouse(posX,posY,tamTexto) {
  textSize(tamTexto);
  text(`mouse: x: ${mouseX} y: ${mouseY}`, posX, posY);
}

function draw() {
  background(200);
  mostrarMouse(10,15,15);
}

function mouseClicked() {
  fill("red")
}