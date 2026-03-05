function setup() { 
  createCanvas(600, 400); 
} 
 
function letraA(x,y,s){ 
  stroke(0); 
  strokeWeight(4); 
  line(x, y, x+s*0.5, y-s); 
  line(x+s, y, x+s*0.5, y-s); 
  line(x+s*0.25, y-s*0.5, x+s*0.75, y-s*0.5); 
} 
function draw(){ 
  background(240); 
  letraA(100,150,80); 

}