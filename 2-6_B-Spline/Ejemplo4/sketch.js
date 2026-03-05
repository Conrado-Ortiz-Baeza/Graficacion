let t = 0; 
function setup(){ 
  createCanvas(600,400); 
}

function draw(){
  background(245); 
  let x = curvePoint(50,100,300,500,t); 
  let y = curvePoint(200,300,80,260,t); 
  circle(x,y,20); 
  t += 0.01; 
  if(t>1) 
    t=0; 
}