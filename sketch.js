
var car,wall
var speed,weight
var deformation

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(790, 200, 50, 100);

  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed
  deformation=(0.5*weight*speed*speed)/2250;

  if(wall.x-car.x < (car.weidth+wall.weidth)/2)
  {
     car.velocityX=0;
     var deformation=0.5 * weidth * speed * speed /2250
    if(deformation>180)
      {
        car.shapeColor=color(255,0,0);
      }
    if(deformation<180 && deformation>100)
    {
       car.shapeColor=color(230,230,0);
    } 
    if(deformation<100)
      {
        car.shapeColor=color(0,255,0);
      }
  }
  drawSprites();
}