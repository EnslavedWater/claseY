var suelo,sueloimg;
var trex ,trex_running;
var sueloinvisible;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  sueloimg = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
 trex =createSprite(50, 160, 20, 50);
 trex.addAnimation("running", trex_running);
 trex.scale = 0.5;
 suelo = createSprite(200, 180, 400, 20);
 suelo.addImage(sueloimg);
 suelo.VelocityX = -5;
sueloinvisible = createSprite(200, 190, 400, 10);
sueloinvisible.visible = false
}

function draw(){
  background("white");
  if (keyDown("space")&&trex.y >= 150){
    trex.velocityY=-10
    
  }
  trex.velocityY = trex.velocityY +0.5;
  if(suelo.x <0){
    suelo.x=suelo.with/2
  }
  drawSprites();
trex.collide(sueloinvisible);
}