function setup() { 
  createCanvas(600, 400); 
} 
function draw() { 
  background(240); 
  stroke(40); 
  translate(width/2, height); 
  rama(100); 

}

function rama(len) { 
  line(0, 0, 0, -len); 
  translate(0, -len); 
  if (len > 8) { 
    push();
    rotate(PI/4); 
    rama(len * 0.7); 
    pop(); push(); 
    rotate(-PI/4); 
    rama(len * 0.7); 
    pop(); } 
}