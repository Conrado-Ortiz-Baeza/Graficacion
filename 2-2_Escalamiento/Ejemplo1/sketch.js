let s = 1; 
function setup() {
   createCanvas(600, 300); 
  } 
  function draw() {
     background(240);
    s = 1 + 0.5 * sin(frameCount * 0.05); 
    push(); 
    translate(300, 150); 
    scale(s); rectMode(CENTER); 
    rect(0, 0, 120, 60); 
    pop(); 

}