var mario, luigi, enemy; 
var enemyTarget;
var brick2, brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10, brick11;
var plainGround, plainGround2;

var invisibleGround1, invisibleGround5, invisibleGround6, invisibleGround7, invisibleGround8, 
invisibleGround9, invisibleGround10;
var fireGroup;
var mushroom, plant, pipe;
var thwomp;
var powerFlower, bullet, ground3, ground4, ground5, ground6, ground7, ground8, ground9, ground10;

var squareGround,squareGround2; 

var pipe2, pipe3, plant2, plant3;

var enemyGroup, enemy2, enemyTarget2;

var enemy2, enemyTarget2, enemy3, enemyTarget3, enemy4, enemyTarget4, 
enemy5, enemyTarget5, enemy6, enemyTarget6, enemy7, enemyTarget7, enemy8, enemyTarget8, 
enemy9, enemyTarget9, enemy10, enemyTarget10, enemy11, enemyTarget11;
var ghost, ghost2;
var coin, coinGroup, coin2;
class Setup{
    constructor() {
    createCanvas(windowWidth-25, windowHeight-20);


    ground6 = createSprite(2690, 600, 20, 20);
    ground6.addImage("ground1", ground1Img);

    ground7 = createSprite(2690, 760, 20, 20);
    ground7.addImage("ground1", ground1Img);

    ground8 = createSprite(3065, 760, 20, 20);
    ground8.addImage("ground1", ground1Img);

    ground9 = createSprite(3450, 600, 20, 20);
    ground9.addImage("ground1", ground1Img);

    ground10 = createSprite(3850, 760, 20, 20);
    ground10.addImage("ground1", ground1Img);

    

    ghost = createSprite(5250, 890, 20, 20);
    ghost.addAnimation("reverted", rGhostImg);
    ghost.addAnimation("ghost", ghostImg)
    ghost.scale = 0.3;


    ghost2 = createSprite(4800, 890, 20, 20);
    ghost2.addAnimation("reverted", rGhostImg);
    ghost2.addAnimation("ghost", ghostImg)
    ghost2.scale = 0.3;


    enemyGroup = new Group();


    enemy11 = createSprite(1480, 850, 20, 20);
    enemy11.addAnimation("enemy", enemyAnimation);
    enemy11.addAnimation("revertedEnemy", revertedEnemyAnimation);
    enemy11.scale = 1.2;
    enemy11.velocityX = -4;
    enemyTarget11 = createSprite(80, 125, 15, 5);
    enemyTarget11.visible = false;

    enemy10 = createSprite(1580, 850, 20, 20);
    enemy10.addAnimation("enemy", enemyAnimation);
    enemy10.addAnimation("revertedEnemy", revertedEnemyAnimation);
    enemy10.scale = 1.2;
    enemy10.velocityX = -6;
    enemyTarget10 = createSprite(80, 125, 15, 5);
    enemyTarget10.visible = false;

    enemy9 = createSprite(1680, 850, 20, 20);
    enemy9.addAnimation("enemy", enemyAnimation);
    enemy9.addAnimation("revertedEnemy", revertedEnemyAnimation);
    enemy9.scale = 1.2;
    enemy9.velocityX = -5;
    enemyTarget9 = createSprite(80, 125, 15, 5);
    enemyTarget9.visible = false;



    enemy8 = createSprite(1780, 850, 20, 20);
    enemy8.addAnimation("enemy", enemyAnimation);
    enemy8.addAnimation("revertedEnemy", revertedEnemyAnimation);
    enemy8.scale = 1.2;
    enemy8.velocityX = -4;
    enemyTarget8 = createSprite(80, 125, 15, 5);
    enemyTarget8.visible = false;


    enemy7 = createSprite(1890, 850, 20, 20);
    enemy7.addAnimation("enemy", enemyAnimation);
    enemy7.addAnimation("revertedEnemy", revertedEnemyAnimation);
    enemy7.scale = 1.2;
    enemy7.velocityX = -6;
    enemyTarget7 = createSprite(80, 125, 15, 5);
    enemyTarget7.visible = false;


    enemy6 = createSprite(1980, 850, 20, 20);
    enemy6.addAnimation("enemy", enemyAnimation);
    enemy6.addAnimation("revertedEnemy", revertedEnemyAnimation);
    enemy6.scale = 1.2;
    enemy6.velocityX = -5;
    enemyTarget6 = createSprite(80, 125, 15, 5);
    enemyTarget6.visible = false;


    enemy5 = createSprite(2180, 850, 20, 20);
    enemy5.addAnimation("enemy", enemyAnimation);
    enemy5.addAnimation("revertedEnemy", revertedEnemyAnimation);
    enemy5.scale = 1.2;
    enemy5.velocityX = -4;
    enemyTarget5 = createSprite(80, 125, 15, 5);
    enemyTarget5.visible = false;


    enemy4 = createSprite(2280, 850, 20, 20);
    enemy4.addAnimation("enemy", enemyAnimation);
    enemy4.addAnimation("revertedEnemy", revertedEnemyAnimation);
    enemy4.scale = 1.2;
    enemy4.velocityX = -6;
    enemyTarget4 = createSprite(80, 125, 15, 5);
    enemyTarget4.visible = false;


    enemy3 = createSprite(2380, 850, 20, 20);
    enemy3.addAnimation("revertedEnemy", revertedEnemyAnimation);
    enemy3.addAnimation("enemy", enemyAnimation);
    enemy3.scale = 1.2;
    enemy3.velocityX = -5;
    enemyTarget3 = createSprite(80, 125, 15, 5);
    enemyTarget3.visible = false;


    enemy2 = createSprite(1380, 850, 20, 20);
    enemy2.addAnimation("enemy", enemyAnimation);
    enemy2.addAnimation("revertedEnemy", revertedEnemyAnimation);
    enemy2.scale = 1.2;
    enemy2.velocityX = -4;
    enemyTarget2 = createSprite(80, 125, 15, 5);
    enemyTarget2.visible = false;
    



    invisibleGround9 = createSprite(1680, 595, 20, 20);
    invisibleGround9.visible = false;
    invisibleGround10 = createSprite(1915, 595, 20, 20);
    invisibleGround10.visible = false;

    plant3 = createSprite(1915, 695, 20, 20);
    plant3.addImage("plant", plantImg);
    plant3.scale = 0.25;
    plant3.setCollider("rectangle", 0, 0, 125, 245);
    plant3.debug = false;

    plant2 = createSprite(1680, 695, 20, 20);
    plant2.addImage("plant", plantImg);
    plant2.scale = 0.25;
    plant2.setCollider("rectangle", 0, 0, 125, 245);
    plant2.debug = false;

    plant2.velocityY = 2;
    plant3.velocityY = -2;

    pipe3 = createSprite(1915, 695, 20, 20);
    pipe3.addImage("pipe", pipeImg);
    pipe3.scale = 0.2;
    pipe3.setCollider("rectangle", 0, 20, 335, 350);
    pipe3.debug = false;

    pipe2 = createSprite(1680, 695, 20, 20);
    pipe2.addImage("pipe", pipeImg);
    pipe2.scale = 0.2;
    pipe2.setCollider("rectangle", 0, 20, 335, 350);
    pipe2.debug = false;

    ground5 = createSprite(1800, 700, 20, 20);
    ground5.addImage("ground", ground1Img);
    ground5.scale = 1;
    ground5.setCollider("rectangle", 0, 47, 380, 42);
    ground5.debug = false;
    
    ground4 = createSprite(2200, 810, 20, 20);
    ground4.addImage("ground", ground1Img);
    ground4.scale = 0.5;
    ground4.setCollider("rectangle", 0, 47, 380, 45);
    ground4.debug = false;

    squareGround2 = createSprite(2395, 870, 20, 20);
    squareGround2.addImage("ground", squareGroundImg);
    squareGround2.scale = 0.3;
    squareGround2.setCollider("rectangle", 0, 20, 490, 490);
    squareGround2.debug = false;

    ground3 = createSprite(1400, 810, 20, 20);
    ground3.addImage("ground", ground1Img);
    ground3.scale = 0.5;
    ground3.setCollider("rectangle", 0, 47, 380, 45);
    ground3.debug = false;

    ground3.velocityX = 2;
    ground4.velocityX = -2;

    squareGround = createSprite(1195, 870, 20, 20);
    squareGround.addImage("ground", squareGroundImg);
    squareGround.scale = 0.3;
    squareGround.setCollider("rectangle", 0, 20, 490, 490);
    squareGround.debug = false;

    fireGroup = new Group();

    powerFlower = createSprite(700, 750, 20, 20);
    powerFlower.addImage("flower", powerFlowerImg);
    powerFlower.scale = 0.15;

    mushroom = createSprite(700, 750, 20, 20);
    mushroom.addImage("mushroom", mushroomImg);
    mushroom.scale = 0.18;
    mushroom.setCollider("rectangle", 0, 0, 170, 170);
    mushroom.debug = false;

    brick11 = createSprite(700, 750, 20, 20);
    brick11.addImage("brick", brickImg);
    brick11.scale = 0.07;
    brick11.setCollider("rectangle", 0, 0, 500, 500)
    brick11.debug = false;

    invisibleGround8 = createSprite(-130, 23.5, 20, 20);
    invisibleGround8.visible = false;

    thwomp = createSprite(-130, 100, 20, 20);
    thwomp.addImage("thwomp", thwompImg);
    thwomp.scale = 0.7;
    thwomp.setCollider("rectangle", 0, 0, 150, 190);
    thwomp.debug = false;
    
    plant = createSprite(-400, 860, 20, 20);
    plant.addImage("plant", plantImg);
    plant.scale = 0.25;
    plant.setCollider("rectangle", 0, 10, 125, 245);
    plant.debug = false

    pipe = createSprite(-400, 920, 20, 20);
    pipe.addImage("pipe", pipeImg);
    pipe.scale = 0.2;
    pipe.setCollider("rectangle", 0, 0, 345, 315);
    pipe.debug = false;

    invisibleGround7 = createSprite(-400, 825, 20, 20);
    invisibleGround7.visible = false

    plant.velocityY = 1;

    plainGround2 = createSprite(windowWidth - 1170, windowHeight - 85, 20, 5);
    plainGround2.addImage("ground2", plainGround2Img);
    plainGround2.scale = 2.8;
    plainGround2.setCollider("rectangle", -15, 0, 140, 37);
    plainGround2.debug = false;
    
    for(var i= 0; i<=6000; i=i+1650){
        plainGround = createSprite(i, windowHeight - 40, 1170, 20);20
        plainGround.addImage("ground", plainGroundImg); 
        plainGround.scale = 0.65;
    }

    invisibleGround1 = createSprite(windowWidth + 560, windowHeight - 45, 6640, 20);
    invisibleGround1.visible = false;

    invisibleGround5 = createSprite(530, 850, 20, 20);
    invisibleGround5.visible = false;
    invisibleGround6 = createSprite(890, 850, 20, 20);
    invisibleGround6.visible = false;

    for(i = 300; i > 30; i -= 30) {
        brick10 = createSprite(i, 930, 20, 20);
        brick10.addImage("brick", brickImg);
        brick10.scale = 0.07;
    }

    for(i = 270; i > 30; i -= 30) {
        brick9 = createSprite(i + 30, 900, 20, 20);
        brick9.addImage("brick", brickImg);
        brick9.scale = 0.07;
    }

    for(i = 240; i > 30; i -= 30) {
        brick8 = createSprite(i + 60, 870, 20, 20);
        brick8.addImage("brick", brickImg);
        brick8.scale = 0.07;
    }

    for(i = 210; i > 30; i -= 30) {
        brick7 = createSprite(i + 90, 840, 20, 20);
        brick7.addImage("brick", brickImg);
        brick7.scale = 0.07;
    }

    for(i =180; i > 30; i -= 30) {
        brick6 = createSprite(i + 120, 810, 20, 20);
        brick6.addImage("brick", brickImg);
        brick6.scale = 0.07;
    }

    for(i = 150; i > 30; i -= 30) {
        brick5 = createSprite(i + 150, 780, 20, 20);
        brick5.addImage("brick", brickImg);
        brick5.scale = 0.07;
    }

    for(i = 120; i > 30; i -= 30) {
        brick4 = createSprite(i + 180, 750, 20, 20);
        brick4.addImage("brick", brickImg);
        brick4.scale = 0.07;
    }

    for(i = 90; i > 30; i -= 30) {
        brick3 = createSprite(i + 210, 720, 20, 20);
        brick3.addImage("brick", brickImg);
        brick3.scale = 0.07;
    }

    for(i = 60; i > 30; i -= 30) {
        brick2 = createSprite(i + 240, 690, 20, 20);
        brick2.addImage("brick", brickImg);
        brick2.scale = 0.07;
    }

    enemy = createSprite(600, 850, 20, 20);
    enemy.addAnimation("enemy", enemyAnimation);
    enemy.addAnimation("revertedEnemy", revertedEnemyAnimation);
    enemy.scale = 1.2;
    enemy.velocityX = -4;

    mario = createSprite(-300, 0, 20, 20);
    mario.addImage("stand", marioStanding);
    mario.scale = 0.1;
    mario.addAnimation("runRight", marioRunningRight);
    mario.addAnimation("runLeft", marioRunningLeft);


    luigi = createSprite(-600, 600, 20, 20);
    luigi.addImage("stand", luigiStanding);
    luigi.scale = 0.1;
    luigi.addAnimation("runRight", luigiRunningRight);
    luigi.addAnimation("runLeft", luigiRunningLeft);

    luigi.setCollider("rectangle", 0, 0, 350, 510);
    luigi.debug = false;

    enemyTarget = createSprite(80, 125, 15, 5);
    enemyTarget.visible = false;    

    }
}
