var pacman, pacmanImage;
var ghost;
var pellet;

var rightup;
var leftup;
var leftdown;
var rightdown;
var middleup;
var middledown;
var middleright;
var middleleft;

function preload() {
 pacmanImage = loadImage("pacman.gif"); 
}

function setup() {
  createCanvas(400,400);
  rightup = createSprite(320, 80, 80, 80);
  rightdown = createSprite(320, 320, 80, 80);
  leftup = createSprite(80, 80, 80, 80)
  leftdown = createSprite(80, 320, 80, 80)
  middleup = createSprite(200, 80, 80, 80);
  middledown = createSprite(200, 320, 80, 80);
  middleleft = createSprite(80, 200, 80, 80)
  middleright = createSprite(320, 200, 80, 80)

  pacman = createSprite(40,40,20,50);
 
}

function draw() {
  background(255,255,255);  
  pacman.addImage(pacmanImage);
  background("black");

 pacman.scale = 1;
 pacman.speed = 0.1;
 image(pacmanImage, 0, 0, 20, 20);


  drawSprites();
}


//project = backround and  pellets