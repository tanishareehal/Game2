var Play = 0;
var Pause = 1;
var Resume = 2;
var End = 3;
var Complete = 4;
var gameState = Play;

var obstaclesGroup;
var wallsGroup;
var textGroup;
var buttonGroup;

var bg;
var money=0;
var pc, npc1, npc2, npc3, npc4;
var ground, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5,obstacle6,obstacle7,obstacle8;
var obstacle9,obstacle10,obstacle11,obstacle12,obstacle13,obstacle14,obstacle15,obstacle16,obstacle17;
var obstacle18,obstacle19,obstacle20,obstacle21,obstacle22,obstacle23,obstacle24,obstacle25;
var obstacle26, obstacle27, obstacle28, obstacle29, obstacle30, obstacle31, obstacle32;
var obstacleImage, obstacleImage2, obstacleImage3, obstacleImage4;
var textbox1, textbox2, textbox3, textbox4;
var resumeButton1, resumeButton2, resumeButton3, resumeButton4;
var wall1, wall2, wall3, wall4;
var endwall;


function preload() {
  obstacleImage = loadImage("IMG_3689.png");
  obstacleImage2 = loadImage("IMG_3690.png");
  obstacleImage3 = loadImage("IMG_3689.png");
  bg = loadImage("IMG_3680.jpg");
  button1 = loadImage("button.png")
  button2 = loadImage("button.png")
  button3 = loadImage("button.png")
  button4 = loadImage("button.png")
}

function setup() {
createCanvas(1200,400);

textbox1 = createSprite(1075, 200, 700, 350);
textbox2 = createSprite(2425, 200, 700, 350);

resumeButton1 = createSprite(1400, 270, 45, 40);
resumeButton1.addImage(button1);
resumeButton1.scale = 0.50;

resumeButton2 = createSprite(2750, 270, 45, 40);
resumeButton2.addImage(button1);
resumeButton2.scale = 0.50;

pc = createSprite(100,400,30,150);

wall1 = createSprite(1000,350,30,1500);
wall1.visible = false;
//wallsGroup.add(wall1);

wall2 = createSprite(2350,350,30,1500);
wall2.visible = false;
//wallsGroup.add(wall2);

wall3 = createSprite(4750,350,30,1500);
//wallsGroup.add(wall3);

npc1 = createSprite(1060,350,30,150);

obstacle1 = createSprite(300, 340, 40, 40);
obstacle1.addImage(obstacleImage);
obstacle1.scale = 0.157;

obstacle2 = createSprite(600, 355, 40, 100);
obstacle2.addImage(obstacleImage2);
obstacle2.scale = 0.25;

obstacle3 = createSprite(900, 325, 40, 60);
obstacle3.addImage(obstacleImage3);
obstacle3.scale = 0.24;

obstacle4 = createSprite(1200, 360, 40, 60);

obstacle5 = createSprite(1500, 360, 40, 60);

obstacle6 = createSprite(1750, 360, 40, 60);

obstacle7 = createSprite(2050, 360, 40, 60);

obstacle8 = createSprite(2250, 360, 40, 60);

obstacle9 = createSprite(2550,360,40,60);

obstacle10 = createSprite(2950,360,40,60);

obstacle11 = createSprite(3200,360,40,60);

obstacle12 = createSprite(3500,360,40,60);

obstacle13 = createSprite(3750,360,40,60);

obstacle14 = createSprite(4050,360,40,60);

obstacle15 = createSprite(4400,360,40,60);

obstacle16 = createSprite(4600,360,40,60);

npc2 = createSprite(2400,350,30,150);

npc3 = createSprite(4800,350,30,150);

ground = createSprite(10,400,10000,20);
ground.x = ground.width /2;

money = 0; 

obstaclesGroup = new Group();
wallsGroup = new Group();
textGroup = new Group();

}

function draw() {
background(bg);

if(gameState === Play) {

  textbox1.visible = false;
  resumeButton1.visible = false;

  textbox2.visible = false;
  resumeButton2.visible = false;
  
  if(keyDown("SPACE") ) {
    pc.velocityY = -10;
  }
  pc.velocityY = pc.velocityY + 0.5
  if(keyDown("RIGHT_ARROW")) {
    changePosition(5,0);
  }

  if(keyDown("LEFT_ARROW")) {
    changePosition(-5,0);
  }

  /*if (pc.isTouching(wall1)){
   gameState = Pause;
    }*/

   if (pc.isTouching(wallsGroup)){
    gameState = Pause;
    }
}

 else if (gameState === Pause) {

  if(keyDown("SPACE")) {
  pc.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")) {
    changePosition(0,0);
  }

  if(keyDown("LEFT_ARROW")) {
    changePosition(0,0);
  }

    resumeButton1.visible = true;
    textbox1.visible = true;

    resumeButton2.visible = true;
    textbox2.visible = true;

    if(mousePressedOver(resumeButton1)) {
      gameState = Resume;
    }
}
 else if (gameState === Resume) {

  textbox1.visible = false;
  resumeButton1.visible = false;

  textbox2.visible = false;
  resumeButton2.visible = false;

  if(keyDown("SPACE") ) {
    pc.velocityY = -10;
  }
  pc.velocityY = pc.velocityY + 0.5

  if(keyDown("RIGHT_ARROW")) {
    changePosition(5,0);
  }
  if(keyDown("LEFT_ARROW")) {
    changePosition(-5,0);
  } 
 }

text("$ "+ money, 1000,50);

camera.position.x = pc.x;

  if (ground.x > 1200){
    ground.x = ground.width/2;
  }

  function changePosition(x,y){
    pc.x = pc.x + x;
    pc.y = pc.y + y;
  }

//obstaclesGroup.add(obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,obstacle9,obstacle10,obstacle11,obstacle12,obstacle13,obstacle14,obstacle15,obstacle16,obstacle17,obstacle18,obstacle19,obstacle20,obstacle21,obstacle22,obstacle23,obstacle24,obstacle25,obstacle26,obstacle27,obstacle28,obstacle29,obstacle30,obstacle31,obstacle32);

wallsGroup.add(wall1, wall2, wall3, wall4);


pc.collide(ground);

 drawSprites();
}