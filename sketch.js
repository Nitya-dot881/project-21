var wall,thickness;
var speed,weight,bullet;


function setup() {
  createCanvas(1600,400);
 bullet= createSprite(50, 200, 200, 20);
 wall= createSprite(900, 200, thickness, height/2);
  bullet.shapeColor="white"
  wall.shapeColor=color(80,80,80);

  
}

function draw()
 {
  background ("black"); 
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet.velocityX=speed/3; 

  function hasCollided(bullet,wall)
  {
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x
  if(bulletRightEdge>= wallLeftEdge)
  {
     return true;
  }
  return false;
}
   if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0
    var damage=0.5*weight*speed* speed/(thickness*thickness*thickness);
    if(damage>10)
    {
       wall.shapeColor=color(255,0,0);
    }
    
    if(damage<10)
    {
       wall.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}