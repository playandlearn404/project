// Declaring game variables

var gameState, playeCount, database;
var finishedPlayers;
var distance, set;


function preload() {
   upload= new Upload();
}

function setup() {

    //create the database
  database = firebase.database();

  //set the variables
  gameState = 0;
  distance = 0;
  finishedPlayers = 0;

    set = new Setup();

   /* game = new Game();
  game.getState();
  game.start();*/
}
  
function draw() {
    background(bgimg);

   /* //start the game
  if (playerCount === 2 && finishedPlayers === 0) {
    game.updateState(1);
  }

  //start the game for real
  if (gameState === 1) {
    game.play();
  }

  //end the game
  if (finishedPlayers === 2) {
    game.updateState(2);
    //gameState = 2;
  }

  //display ranking
  if (gameState === 2 && finishedPlayers === 2) {
    game.displayRanks();
  }
}*/ 

    if(ghost.x === mario.x) {
        ghost.velocityX = 0;
    } else if(ghost.x - mario.x > 40 && mario.x > 2400) {
        ghost.changeAnimation("reverted", rGhostImg);
        ghost.velocityX = -2;
    } else if(ghost.x - mario.x < 0 && mario.x > 2400) {
        ghost.changeAnimation("ghost", ghostImg);
        ghost.velocityX = 2;
    }
    if(mario.y < ghost.y && mario.x > 2400) {
        ghost.velocityY = -1;
    }
    if(mario.y > ghost.y && mario.x > 2400) {
        ghost.velocityY = +1;
    }
    ghost.collide(invisibleGround1)
    if(ghost.collide(mario)) {
        mario.remove();
    }
    if(ghost.collide(luigi)) {
        luigi.remove();
    }

    console.log(mario.x);


    if(ghost2.x === luigi.x) {
        ghost2.velocityX = 0;
    } else if(ghost2.x - luigi.x > 40 && luigi.x > 2400) {
        ghost2.changeAnimation("reverted", rGhostImg);
        ghost2.velocityX = -2;
    } else if(ghost2.x - luigi.x < 0 && luigi.x > 2400) {
        ghost2.changeAnimation("ghost", ghostImg);
        ghost2.velocityX = 2;
    }
    if(luigi.y < ghost2.y && luigi.x > 2400) {
        ghost2.velocityY = -1;
    }
    if(luigi.y > ghost2.y && luigi.x > 2400) {
        ghost2.velocityY = +1;
    }
    ghost2.collide(invisibleGround1)
    if(ghost2.collide(luigi)) {
        luigi.remove();
    }
    if(ghost2.collide(mario)) {
        mario.remove();
    }
    

    bullet = createSprite(20, -10000, 20, 20);
    // Infinite Ground
    // plainGround.velocityX=-5;
    

    camera.x = mario.x;
    enemyTarget.x = enemy.x;
    enemyTarget.y = enemy.y - 25;   

    enemyTarget11.x = enemy11.x;
    enemyTarget11.y = enemy11.y - 25;
    if(enemy11.collide(squareGround)) {
        enemy11.changeAnimation("revertedEnemy", revertedEnemyAnimation);
        enemy11.velocityX = 7;
    }
    if(enemy11.collide(squareGround2)) {
        enemy11.changeAnimation("enemy", enemyAnimation);
        enemy11.velocityX = -2;
    }
    enemy11.velocityY += 0.8;
    enemy11.collide(invisibleGround1);





    enemyTarget10.x = enemy10.x;
    enemyTarget10.y = enemy10.y - 25;
    if(enemy10.collide(squareGround)) {
        enemy10.changeAnimation("revertedEnemy", revertedEnemyAnimation);
        enemy10.velocityX = 3;
    }
    if(enemy10.collide(squareGround2)) {
        enemy10.changeAnimation("enemy", enemyAnimation);
        enemy10.velocityX = -2;
    }
    enemy10.velocityY += 0.8;
    enemy10.collide(invisibleGround1);






    enemyTarget9.x = enemy9.x;
    enemyTarget9.y = enemy9.y - 25;
    if(enemy9.collide(squareGround)) {
        enemy9.changeAnimation("revertedEnemy", revertedEnemyAnimation);
        enemy9.velocityX = 5;
    }
    if(enemy9.collide(squareGround2)) {
        enemy9.changeAnimation("enemy", enemyAnimation);
        enemy9.velocityX = -6;
    }
    enemy9.velocityY += 0.8;
    enemy9.collide(invisibleGround1);





    enemyTarget8.x = enemy8.x;
    enemyTarget8.y = enemy8.y - 25;
    if(enemy8.collide(squareGround)) {
        enemy8.changeAnimation("revertedEnemy", revertedEnemyAnimation);
        enemy8.velocityX = 6;
    }
    if(enemy8.collide(squareGround2)) {
        enemy8.changeAnimation("enemy", enemyAnimation);
        enemy8.velocityX = -6;
    }
    enemy8.velocityY += 0.8;
    enemy8.collide(invisibleGround1);





    enemyTarget7.x = enemy7.x;
    enemyTarget7.y = enemy7.y - 25;
    if(enemy7.collide(squareGround)) {
        enemy7.changeAnimation("revertedEnemy", revertedEnemyAnimation);
        enemy7.velocityX = 4;
    }
    if(enemy7.collide(squareGround2)) {
        enemy7.changeAnimation("enemy", enemyAnimation);
        enemy7.velocityX = -5;
    }
    enemy7.velocityY += 0.8;
    enemy7.collide(invisibleGround1);





    enemyTarget6.x = enemy6.x;
    enemyTarget6.y = enemy6.y - 25;
    if(enemy6.collide(squareGround)) {
        enemy6.changeAnimation("revertedEnemy", revertedEnemyAnimation);
        enemy6.velocityX = 4;
    }
    if(enemy6.collide(squareGround2)) {
        enemy6.changeAnimation("enemy", enemyAnimation);
        enemy6.velocityX = -4;
    }
    enemy6.velocityY += 0.8;
    enemy6.collide(invisibleGround1);





    enemyTarget5.x = enemy5.x;
    enemyTarget5.y = enemy5.y - 25;
    if(enemy5.collide(squareGround)) {
        enemy5.changeAnimation("revertedEnemy", revertedEnemyAnimation);
        enemy5.velocityX = 4;
    }
    if(enemy5.collide(squareGround2)) {
        enemy5.changeAnimation("enemy", enemyAnimation);
        enemy5.velocityX = -6;
    }
    enemy5.velocityY += 0.8;
    enemy5.collide(invisibleGround1);





    enemyTarget4.x = enemy4.x;
    enemyTarget4.y = enemy4.y - 25;
    if(enemy4.collide(squareGround)) {
        enemy4.changeAnimation("revertedEnemy", revertedEnemyAnimation);
        enemy4.velocityX = 4;
    }
    if(enemy4.collide(squareGround2)) {
        enemy4.changeAnimation("enemy", enemyAnimation);
        enemy4.velocityX = -5;
    }
    enemy4.velocityY += 0.8;
    enemy4.collide(invisibleGround1);


    enemyTarget3.x = enemy3.x;
    enemyTarget3.y = enemy3.y - 25;
    if(enemy3.collide(squareGround)) {
        enemy3.changeAnimation("revertedEnemy", revertedEnemyAnimation);
        enemy3.velocityX = 6;
    }
    if(enemy3.collide(squareGround2)) {
        enemy3.changeAnimation("enemy", enemyAnimation);
        enemy3.velocityX = -4;
    }
    enemy3.velocityY += 0.8;
    enemy3.collide(invisibleGround1);







    enemyTarget2.x = enemy2.x;
    enemyTarget2.y = enemy2.y - 25;
    if(enemy2.collide(squareGround)) {
        enemy2.changeAnimation("revertedEnemy", revertedEnemyAnimation);
        enemy2.velocityX = 6;
    }
    if(enemy2.collide(squareGround2)) {
        enemy2.changeAnimation("enemy", enemyAnimation);
        enemy2.velocityX = -5;
    }
    enemy2.velocityY += 0.8;
    enemy2.collide(invisibleGround1);


    if(enemy11.isTouching(mario)) {
        mario.remove();
    }
    if(enemy10.isTouching(mario)) {
        mario.remove();
    }
    if(enemy9.isTouching(mario)) {
        mario.remove();
    }
    if(enemy8.isTouching(mario)) {
        mario.remove();
    }
    if(enemy7.isTouching(mario)) {
        mario.remove();
    }
    if(enemy6.isTouching(mario)) {
        mario.remove();
    }
    if(enemy5.isTouching(mario)) {
        mario.remove();
    }
    if(enemy4.isTouching(mario)) {
        mario.remove();
    }
    if(enemy3.isTouching(mario)) {
        mario.remove();
    }
    if(enemy2.isTouching(mario)) {
        mario.remove();
    }

    if(enemy11.isTouching(luigi)) {
        mario.remove();
    }
    if(enemy10.isTouching(luigi)) {
        mario.remove();
    }
    if(enemy9.isTouching(luigi)) {
        mario.remove();
    }
    if(enemy8.isTouching(luigi)) {
        mario.remove();
    }
    if(enemy7.isTouching(luigi)) {
        mario.remove();
    }
    if(enemy6.isTouching(luigi)) {
        mario.remove();
    }
    if(enemy5.isTouching(luigi)) {
        mario.remove();
    }
    if(enemy4.isTouching(luigi)) {
        mario.remove();
    }
    if(enemy3.isTouching(luigi)) {
        mario.remove();
    }
    if(enemy2.isTouching(luigi)) {
        mario.remove();
    }


    if(mario.isTouching(enemyTarget11)) {
        enemy11.remove();
    }
    if(mario.isTouching(enemyTarget10)) {
        enemy10.remove();
    }
    if(mario.isTouching(enemyTarget9)) {
        enemy9.remove();
    }
    if(mario.isTouching(enemyTarget8)) {
        enemy8.remove();
    }
    if(mario.isTouching(enemyTarget7)) {
        enemy7.remove();
    }
    if(mario.isTouching(enemyTarget6)) {
        enemy6.remove();
    }
    if(mario.isTouching(enemyTarget5)) {
        enemy5.remove();
    }
    if(mario.isTouching(enemyTarget4)) {
        enemy4.remove();
    }
    if(mario.isTouching(enemyTarget3)) {
        enemy3.remove();
    }
    if(mario.isTouching(enemyTarget2)) {
        enemy2.remove();
    }


    if(luigi.isTouching(enemyTarget11)) {
        enemy11.remove();
    }
    if(luigi.isTouching(enemyTarget10)) {
        enemy10.remove();
    }
    if(luigi.isTouching(enemyTarget9)) {
        enemy9.remove();
    }
    if(luigi.isTouching(enemyTarget8)) {
        enemy8.remove();
    }
    if(luigi.isTouching(enemyTarget7)) {
        enemy7.remove();
    }
    if(mario.isTouching(enemyTarget6)) {
        enemy6.remove();
    }
    if(luigi.isTouching(enemyTarget5)) {
        enemy5.remove();
    }
    if(luigi.isTouching(enemyTarget4)) {
        enemy4.remove();
    }
    if(luigi.isTouching(enemyTarget3)) {
        enemy3.remove();
    }
    if(luigi.isTouching(enemyTarget2)) {
        enemy2.remove();
    }



    
    // Mario Movement
    if(keyDown("Right_Arrow")) {
        mario.changeAnimation("runRight", marioRunningRight);
        mario.x += 5;
    }
    if(keyDown("Left_Arrow")) {
        mario.changeAnimation("runLeft", marioRunningLeft);
        mario.x -= 5;
    }
    if(keyDown("space")) {
        mario.velocityY = -15;
    }
    mario.velocityY += 0.8;

    // Luigi Movement
    if(keyDown("d")) {
        luigi.changeAnimation("runRight", luigiRunningRight);
        luigi.x += 5;
    }
    if(keyDown("a")) {
        luigi.changeAnimation("runLeft", luigiRunningLeft);
        luigi.x -= 5;
    }
    if(keyDown("w")) {
        luigi.velocityY = -10;
    }
    luigi.velocityY += 0.8;
    enemy.velocityY += 0.8;

    if(mario.isTouching(enemyTarget)) {
        enemy.remove();
        enemyTarget.remove();
    }

    if(luigi.isTouching(enemyTarget)) {
        enemy.remove();
        enemyTarget.remove();
    }

    if(enemy.isTouching(mario)) {
        mario.remove();
    } else if(enemy.isTouching(luigi)) {
        luigi.remove();
    }

    if (enemy.collide(invisibleGround5)) {
        enemy.changeAnimation("revertedEnemy", revertedEnemyAnimation);
        enemy.velocityX = 4;
    }else if (enemy.collide(invisibleGround6)) {
        enemy.changeAnimation("enemy", enemyAnimation);
        enemy.velocityX = -4;
    }

    luigi.collide(invisibleGround1);
    mario.collide(invisibleGround1);
    enemy.collide(invisibleGround1);










    if(plant.isTouching(mario)) {
        mario.remove();
    } else if(plant.isTouching(luigi)) {
        luigi.remove();
    }

    luigi.collide(brick2);
    mario.collide(brick2);
    enemy.collide(brick2); 
    
    luigi.collide(brick3);
    mario.collide(brick3);
    enemy.collide(brick3);   

    luigi.collide(brick4);
    mario.collide(brick4);
    enemy.collide(brick4);   

    luigi.collide(brick5);
    mario.collide(brick5);
    enemy.collide(brick5);   

    luigi.collide(brick6);
    mario.collide(brick6);
    enemy.collide(brick6);   

    luigi.collide(brick7);
    mario.collide(brick7);
    enemy.collide(brick7);   

    luigi.collide(brick8);
    mario.collide(brick8);
    enemy.collide(brick8);   

    luigi.collide(brick9);
    mario.collide(brick9);
    enemy.collide(brick9);   

    luigi.collide(brick10);
    mario.collide(brick10);
    enemy.collide(brick10); 
    
    luigi.collide(pipe);
    mario.collide(pipe);

    enemy.collide(plainGround2);
    luigi.collide(plainGround2);
    mario.collide(plainGround2);

    if(plant.collide(invisibleGround1)) {
        plant.velocityY = -0.2;
    }

    if(plant.collide(invisibleGround7)) {
        plant.velocityY = 3;
    }

    thwomp.collide(invisibleGround8);

    if(thwomp.x - 50 === luigi.x && thwomp.y === 100) {
        thwomp.velocityY = 45;
    }
    if(thwomp.x - 50 === mario.x && thwomp.y === 100) {
        thwomp.velocityY = 45;
    }
    if(thwomp.collide(invisibleGround1)) {
        thwomp.velocityY = -4;
    }

    if(thwomp.collide(mario)) {
        mario.remove();
        thwomp.velocityY = -4;
    } 
    if(thwomp.collide(luigi)) {
        luigi.remove();
        thwomp.velocityY = -4;
    }

    if(mario.collide(brick11)) {
        mushroom.velocityY = -10;
        mushroom.velocityX = +5;
        powerFlower.y = 700;
    }
    if(luigi.collide(brick11)) {
        mushroom.velocityY = -10;
        mushroom.velocityX = +5;  
        powerFlower.y = 700;
    }
    if(mushroom.y !== 750) {
        mushroom.velocityY += 0.8;
    }

    if(powerFlower.y !== 750 && powerFlower.y < 900) {
        powerFlower.velocityY += 0.8;
    }

    mushroom.collide(plainGround2);
    mushroom.collide(invisibleGround1);

    powerFlower.collide(plainGround2);
    powerFlower.collide(invisibleGround1);    

    

    if(mushroom.collide(mario)) {
        mario.scale = 0.15;
        mushroom.remove()
    }
    if(mushroom.collide(luigi)) {
        luigi.scale = 0.15;
        mushroom.remove()
    }

    if(powerFlower.collide(mario)) {
        powerFlower.velocityY = 0;
        powerFlower.y = 1000;   
    }
    if(powerFlower.collide(luigi)) {
        powerFlower.velocityY = 0;   
        powerFlower.y = 2000;
    }

    if(powerFlower.y === 1000) {
        marioFirePower();
    }

    if(powerFlower.y === 2000) {
        luigiFirePower();
    }

    mario.collide(squareGround);
    mario.collide(squareGround2);
    mario.collide(ground3);
    mario.collide(ground4);
    mario.collide(ground5);
    mario.collide(pipe2);
    mario.collide(pipe3);

    if(plant2.collide(ground5)) {
        plant2.velocityY = -2;
    }
    if(plant2.collide(invisibleGround9)) {
        plant2.velocityY = 2;
    }
    if(plant2.collide(mario)) {
        mario.remove();
    }
    if(plant2.collide(luigi)) {
        luigi.remove();
    }


    luigi.collide(squareGround);
    luigi.collide(squareGround2);
    luigi.collide(ground3);
    luigi.collide(ground4);
    luigi.collide(ground5);
    luigi.collide(pipe2);
    luigi.collide(pipe3);


    if(plant3.collide(ground5)) {
        plant3.velocityY = -2;
    }
    if(plant3.collide(invisibleGround10)) {
        plant3.velocityY = 2;
    }
    if(plant3.collide(mario)) {
        mario.remove();
    }
    if(plant3.collide(luigi)) {
        luigi.remove();
    }

    if(ground3.collide(ground4)) {
        ground3.velocityX = -2;
        ground4.velocityX = 2;
    }
    if(ground3.collide(squareGround)) {
        ground3.velocityX = 2;
    }
    if(ground4.collide(squareGround2)) {
        ground4.velocityX = -2;
    }



    drawSprites();
}

function marioFirePower() {
    
    bullet.setCollider("rectangle", 0, 0, 20, 20);
    bullet.debug = false;
    
    if(keyWentDown("p")) {
        bullet.y = mario.y;
        bullet.x = mario.x;
        bullet.addImage("bullet", bulletImg);
        bullet.velocityX = 30;
        fireGroup.add(bullet);
   }
   if(keyWentDown("o")) {
        bullet.y = mario.y;
        bullet.x = mario.x;
        bullet.addImage("bullet", bulletImg);
        bullet.velocityX = -30;
        fireGroup.add(bullet);
   }
    if(fireGroup.collide(enemy)) {
        enemy.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy2)) {
        enemy2.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy3)) {
        enemy3.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy4)) {
        enemy4.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy5)) {
        enemy5.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy6)) {
        enemy6.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy7)) {
        enemy7.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy8)) {
        enemy8.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy9)) {
        enemy9.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy10)) {
        enemy10.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy11)) {
        enemy11.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(plant)) {
        plant.remove();
        fireGroup.destroyEach();
    }
    if(plant2.collide(fireGroup)) {
        plant2.remove();
        fireGroup.destroyEach();
    }
    if(plant3.collide(fireGroup)) {
        plant3.remove();
        fireGroup.destroyEach();
    }
}


function luigiFirePower() {
    bullet.setCollider("rectangle", 0, 0, 20, 20);
    bullet.debug = false;
    
    if(keyWentDown("p")) {
        bullet.y = luigi.y;
        bullet.x = luigi.x;
        bullet.addImage("bullet", bulletImg);
        bullet.velocityX = 30;
        fireGroup.add(bullet);
   }
   if(keyWentDown("o")) {
        bullet.y = luigi.y;
        bullet.x = luigi.x;
        bullet.addImage("bullet", bulletImg);
        bullet.velocityX = -30;
        fireGroup.add(bullet);
   }
   if(enemy.collide(fireGroup)) {
        enemy.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy2)) {
        enemy2.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy3)) {
        enemy3.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy4)) {
        enemy4.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy5)) {
        enemy5.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy6)) {
        enemy6.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy7)) {
        enemy7.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy8)) {
        enemy8.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy9)) {
        enemy9.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy10)) {
        enemy10.remove();
        fireGroup.destroyEach();
    }
    if(fireGroup.collide(enemy11)) {
        enemy11.remove();
        fireGroup.destroyEach();
    }
    if(plant.collide(fireGroup)) {
        plant.remove();
        fireGroup.destroyEach();
    }
    if(plant2.collide(fireGroup)) {
        plant2.remove();
        fireGroup.destroyEach();
    }
    if(plant3.collide(fireGroup)) {
        plant3.remove();
        fireGroup.destroyEach();
    }
}