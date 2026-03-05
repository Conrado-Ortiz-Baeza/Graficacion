function setup() { 
  createCanvas(600, 300); } 
  
  function draw() { 
    background(240); 
    let ang = frameCount * 0.03; 
    push(); 
    translate(300, 150); 
    rotate(ang); 
    rectMode(CENTER); 
    rect(0, 0, 140, 60);
    pop(); 

}