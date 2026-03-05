let sx = 1; 
let sy = 1; 
function setup() { 
  createCanvas(600, 300); 
  rectMode(CENTER); } 
  function draw() { 
    background(240); 
    sx = 1 + 0.5 * sin(frameCount * 0.05); 
    sy = 1 + 0.5 * cos(frameCount * 0.05); 
    push(); 
    translate(width/2, height/2); 
    scale(sx, sy); 
    rect(0, 0, 150, 80); 
    pop();

 }