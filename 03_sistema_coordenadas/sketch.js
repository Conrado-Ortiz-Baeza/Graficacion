function setup(){
createCanvas(600,400);  
}
function draw(){
  background(220);
  //Linea vertical central
  line(width/2,0,width/2,height);
  //Linea horizontal central
  line(0,height/2,width,height/2);
  circle(width/2,height/2,5);
  circle(0,0,20);
  circle(0,height,20);
  circle(width,0,20);
  circle(width,height,20);
  rect(width/2-25,height/2-10,50,20);
}