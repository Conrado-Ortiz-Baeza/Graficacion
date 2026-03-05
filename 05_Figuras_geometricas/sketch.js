function setup(){
createCanvas(600,300);  
}
function draw(){
  background(255);
  fill(0,255,0);
  rect(0,0,width,height/2);
  fill(255,255,255);
  rect(0,height/2,width,height/4);
  fill(255,0,0);
  rect(0, height*3/4, width, height/4);
}