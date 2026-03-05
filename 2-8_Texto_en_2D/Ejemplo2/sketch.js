function setup() { 
  createCanvas(600, 400); 
} 

function draw(){ 
  background(240); 
  translate(width/2, height/2); 
  rotate(PI/6); 
  textAlign(CENTER,CENTER); 
  textSize(40); 
  text("Rotado", 0, 0); 

}