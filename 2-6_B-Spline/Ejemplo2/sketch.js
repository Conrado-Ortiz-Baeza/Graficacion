let pts = []; 

function setup(){ 
  createCanvas(600,400); 
  pts = [ createVector(50,200), 
    createVector(100,300), 
    createVector(300,80), 
    createVector(500,260) ]; 
  } 
  function draw(){ 
    background(245); 
    stroke(180); 
    line(pts[0].x,pts[0].y,pts[1].x,pts[1].y); 
    line(pts[1].x,pts[1].y,pts[2].x,pts[2].y); 
    line(pts[2].x,pts[2].y,pts[3].x,pts[3].y); 
    stroke(0); noFill(); 
    curve( pts[0].x,pts[0].y, 
      pts[1].x,pts[1].y, 
      pts[2].x,pts[2].y, 
      pts[3].x,pts[3].y ); 
      fill(0); noStroke(); 
      for(let p of pts){ 
        circle(p.x,p.y,10); 
      } 
}