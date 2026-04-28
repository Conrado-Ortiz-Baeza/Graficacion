function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {
  background(235);
  orbitControl();

  // Ejes de referencia
  strokeWeight(2);
  stroke(255, 0, 0);
  line(0, 0, 0, 200, 0, 0);
  stroke(0, 255, 0);
  line(0, 0, 0, 0, 200, 0);
  stroke(0, 0, 255);
  line(0, 0, 0, 0, 0, 200);
  noStroke();

  // Cubo cercano
  push();
  translate(-180, 0, 100);
  rotateY(frameCount * 0.02);
  fill(200, 80, 80);
  box(80);
  pop();
}