function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  desenhaCirculo(200, 200, 150);
}

function desenhaCirculo(x, y, tamanho) {
  // Catetos
  let dx = mouseX - x;
  let dy = mouseY - y;

  // Somamos os quadrados e tiramos a raiz
  let distancia = sqrt(pow(dx, 2) + pow(dy, 2));
  let raio = tamanho / 2;
  if (distancia < raio) {
    fill(255, 0, 0);
  } else {
    fill(0, 0, 255);
  }

  noStroke();
  circle(x, y, tamanho);
}