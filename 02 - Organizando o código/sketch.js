const WIDTH = 600;
const HEIGHT = 500;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  noStroke();
}


function desenhaEstrela(x, y, brilho = 255) {
  fill(255, 255, 255, brilho);
}

function desenhaNuvem(x, y, escala = 1) {
  fill(200, 200, 200, 150);
  circle(x, y, 40 * escala);
  circle(x + 20, y - 10, 35 * escala);
  circle(x + 40, y, 40 * escala);
}

function arvore(x, y = 350, corFolha = "green") {
  const TRUNK_COLOR = "rgb(65,42,21)";
  
  // Tronco
  fill(TRUNK_COLOR);
  rect(x - 15, y, 30, 60);
  
  // Copa das arvores
  fill(corFolha);
  triangle(x - 40, y + 10, x, y - 50, x + 40, y + 10);
  triangle(x - 35, y - 20, x, y - 80, x + 35, y - 20);
}

function lua(x, y, diametro = 80) {
  fill("lightgray");
  circle(x, y, diametro);
  
  fill(170);
  circle(x - 15, y + 10, diametro * 0.2);
  circle(x + 10, y - 15, diametro * 0.15);
}

function chao(y_pos) {
  fill(20, 60, 20);
  rect(0, y_pos, WIDTH, HEIGHT - y_pos);
}

function draw() {
  background(10, 10, 35);

  for (let i = 0; i < 20; i++) {
    desenhaEstrela(i * 40, (i * 15) % 200, 200);
  }

  lua(500, 80, 100);

  desenhaNuvem(100, 100, 1.2);
  desenhaNuvem(300, 150, 0.8);

  chao(400);

  arvore(80, 360, "#1b4d3e");
  arvore(150, 380, "#228b22");
  arvore(230, 350, "#006400");
  arvore(380, 390, "green");
  arvore(450, 370, "#2e8b57");
  arvore(550, 385, "#1b4d3e");
}