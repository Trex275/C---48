const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ghost;
var image1, image2, image3;
var ghost2, ghost3;
var Pac_Man, image4;

function preload() {
  image1 = loadImage("Images/unnamed.png");
  image2 = loadImage("Images/90d2e3ff2856032d36fcc7dc49334191.png");
  image3 = loadImage("Images/71499-blue-games-ghosts-pac-man-ghost-free-download-png-hd.png");
  image4 = loadImage("Images/ballcow.png");
}

function setup() {
  createCanvas(600, 600);

  engine = Engine.create();
  world = engine.world;
  //top to bottom
  maze1 = createSprite(10, 80, 10, 140);
  maze3 = createSprite(63, 15, 100, 10);
  maze6 = createSprite(107, 60, 10, 80);
  maze8 = createSprite(127, 105, 50, 10);
  maze10 = createSprite(152, 86, 10, 50);
  maze13 = createSprite(270, 66, 250, 10);
  maze14 = createSprite(400, 86, 10, 50);
  maze17 = createSprite(430, 105, 50, 10);
  maze18 = createSprite(460, 60, 10, 100);
  maze20 = createSprite(520, 15, 130, 10);
  maze21 = createSprite(588, 80, 10, 140);
  maze23 = createSprite(270, 100, 160, 10);
  maze26 = createSprite(225, 120, 70, 10);
  maze28 = createSprite(195, 110, 10, 10);
  maze32 = createSprite(345, 110, 10, 10);
  maze31 = createSprite(320, 120, 60, 10);
  maze34 = createSprite(260, 145, 10, 60);
  maze35 = createSprite(286, 145, 10, 60);
  maze36 = createSprite(273, 170, 35, 10);
  //bottom to top
  maze2 = createSprite(300, 595, 600, 10);
  maze4 = createSprite(5, 540, 10, 130);
  maze5 = createSprite(5, 362, 10, 80);
  maze7 = createSprite(54, 320, 120, 10);
  maze9 = createSprite(89, 310, 49, 10);
  maze11 = createSprite(69, 280, 10, 50);
  maze12 = createSprite(32, 260, 66, 10);
  maze15 = createSprite(32, 227, 66, 10);
  maze16 = createSprite(32, 187, 66, 10);
  maze19 = createSprite(70, 207, 10, 50);
  maze22 = createSprite(595, 540, 10, 130);
  maze24 = createSprite(595, 362, 10, 80);
  maze25 = createSprite(554, 320, 120, 10);
  maze27 = createSprite(489, 310, 49, 10);
  maze29 = createSprite(469, 284, 10, 47);
  maze30 = createSprite(432, 265, 66, 10);
  maze33 = createSprite(432, 227, 66, 10);
  maze37 = createSprite(308, 425, 200, 10);
  maze38 = createSprite(308, 385, 250, 10);
  maze39 = createSprite(136, 537, 180, 10);
  maze40 = createSprite(160, 480, 10, 60);
  maze41 = createSprite(136, 510, 180, 10);
  maze42 = createSprite(54, 524, 10, 10);
  maze43 = createSprite(219, 524, 10, 10);
  maze44 = createSprite(190, 480, 10, 60);
  maze45 = createSprite(284, 220, 80, 10);
  maze46 = createSprite(284, 260, 80, 10);
  maze47 = createSprite(244, 240, 10, 50);
  maze48 = createSprite(176, 455, 25, 10);
  maze49 = createSprite(466, 190, 10, 80);
  maze50 = createSprite(435, 148, 70, 10);
  maze51 = createSprite(521, 144, 130, 10);

  Pac_Man = createSprite(309, 408, 10, 10);
  Pac_Man.addImage(image4);
  Pac_Man.scale = 0.019;

  ghost = createSprite(257, 239, 10, 10);

}
function draw() {
  background(0, 0, 0);
  fill("purple");
  text(mouseX + "," + mouseY, mouseX, mouseY);

  if (keyIsDown(DOWN_ARROW)) {
    Pac_Man.velocityY = 3;
    Pac_Man.velocityX = 0;
  }
  else if (keyIsDown(UP_ARROW)) {
    Pac_Man.velocityY = -3;
    Pac_Man.velocityX = 0;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    Pac_Man.velocityX = 3;
    Pac_Man.velocityY = 0;
  }
  else if (keyIsDown(LEFT_ARROW)) {
    Pac_Man.velocityX = -3;
    Pac_Man.velocityY = 0;
  }

  textSize(15);
  text(mouseX + ":" + mouseY, mouseX, mouseY);
  if (frameCount % 30 === 0) {

  }

  bouncingballguy();

  drawSprites();

}

function bouncingballguy() {
  Pac_Man.bounceOff(maze1);
  Pac_Man.bounceOff(maze2);
  Pac_Man.bounceOff(maze3);
  Pac_Man.bounceOff(maze4);
  Pac_Man.bounceOff(maze5);
  Pac_Man.bounceOff(maze6);
  Pac_Man.bounceOff(maze7);
  Pac_Man.bounceOff(maze8);
  Pac_Man.bounceOff(maze9);
  Pac_Man.bounceOff(maze10);
  Pac_Man.bounceOff(maze11);
  Pac_Man.bounceOff(maze12);
  Pac_Man.bounceOff(maze13);
  Pac_Man.bounceOff(maze14);
  Pac_Man.bounceOff(maze15);
  Pac_Man.bounceOff(maze16);
  Pac_Man.bounceOff(maze17);
  Pac_Man.bounceOff(maze18);
  Pac_Man.bounceOff(maze19);
  Pac_Man.bounceOff(maze20);
  Pac_Man.bounceOff(maze21);
  Pac_Man.bounceOff(maze22);
  Pac_Man.bounceOff(maze23);
  Pac_Man.bounceOff(maze24);
  Pac_Man.bounceOff(maze25);
  Pac_Man.bounceOff(maze26);
  Pac_Man.bounceOff(maze27);
  Pac_Man.bounceOff(maze28);
  Pac_Man.bounceOff(maze29);
  Pac_Man.bounceOff(maze30);
  Pac_Man.bounceOff(maze31);
  Pac_Man.bounceOff(maze32);
  Pac_Man.bounceOff(maze33);
  Pac_Man.bounceOff(maze34);
  Pac_Man.bounceOff(maze35);
  Pac_Man.bounceOff(maze36);
  Pac_Man.bounceOff(maze37);
  Pac_Man.bounceOff(maze38);
  Pac_Man.bounceOff(maze39);
  Pac_Man.bounceOff(maze40);
  Pac_Man.bounceOff(maze41);
  Pac_Man.bounceOff(maze42);
  Pac_Man.bounceOff(maze43);
  Pac_Man.bounceOff(maze44);
  Pac_Man.bounceOff(maze45);
  Pac_Man.bounceOff(maze46);
  Pac_Man.bounceOff(maze47);
  Pac_Man.bounceOff(maze48);
  Pac_Man.bounceOff(maze49);
  Pac_Man.bounceOff(maze50);
  Pac_Man.bounceOff(maze51);


}