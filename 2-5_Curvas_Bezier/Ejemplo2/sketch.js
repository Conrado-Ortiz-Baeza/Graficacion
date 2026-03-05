function setup() { 
  createCanvas(600, 400); 
  P0 = createVector(80,300); 
  P1 = createVector(180,80); 
  P2 = createVector(420,80); 
  P3 = createVector(520,300); 
} 

  function draw() { 
    background(245); 
    stroke(150); 
    line(P0.x,P0.y,P1.x,P1.y); 
    line(P1.x,P1.y,P2.x,P2.y); 
    line(P2.x,P2.y,P3.x,P3.y); 
    strokeWeight(3); 
    stroke(0); 
    noFill();
    bezier(P0.x,P0.y,P1.x,P1.y,P2.x,P2.y,P3.x,P3.y); 
    fill(0); 
    noStroke(); 
    circle(P0.x,P0.y,10); 
    circle(P1.x,P1.y,10); 
    circle(P2.x,P2.y,10); 
    circle(P3.x,P3.y,10); 
  }