var fixedRect, movingRect;
var o1,o2,o3,o4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.velocityY = -5;
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.velocityY = 5;
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  car = createSprite(100,100,50,50);
  car.shapeColor = "green";


  wall = createSprite(200,100,50,50);
  wall.shapeColor = "green";

  o3 = createSprite(300,100,50,50);
  o3.shapeColor = "green";

  o4 = createSprite(400,100,50,50);
  o4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  car.x = World.mouseX;
  car.y = World.mouseY;
 
  if(isTouching(car,wall)){
    car.shapeColor = "red";
    wall.shapeColor = "red";
  } else{
    car.shapeColor = "blue";
    wall.shapeColor = "blue";
  }

   bounceoff(o3,fixedRect);


  drawSprites();
}

