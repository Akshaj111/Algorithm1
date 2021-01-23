var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
fixedRect = createSprite(400, 100, 50, 80);
fixedRect.shapeColor = "white"
movingRect = createSprite(400,800,80,30);
movingRect.shapeColor = "green";
movingRect.velocityY = -5;
fixedRect.velocityY = 5;

}

function draw() {
  background("cyan");  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
   ){
    movingRect.shapeColor = "orange";
    fixedRect.shapeColor = "red";
    movingRect.velocityX = movingRect.velocityX*(-1);
    fixedRect.velocityX = movingRect.velocityX*(-1);
  }
  if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY*(-1);
      fixedRect.velocityY = fixedRect.velocityY*(-1);
    }
 // console.log(movingRect.x-fixedRect.x)
  drawSprites();
}