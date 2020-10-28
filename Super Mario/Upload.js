var ground1Img, ground2Img, ground3Img, ground4Img, ground5Img;
var luigiRunningRight, luigiRunningLeft, luigiStanding;
var marioRunningRight, marioRunningLeft, marioStanding;
var enemyAnimation, revertedEnemyAnimation, bgimg;
var plainGroundImg, mushroomImg, pipeImg, plantImg;
var brickImg,plainGround2Img, multiBrickImg;
var thwompImg, ghostImg, powerFlowerImg, rGhostImg, bulletImg;
var squareGroundImg, coinImg;
var silver_img, gold_img;

class Upload{
    constructor(){
        bgimg =loadImage("images/bg.png");
        silver_img = loadImage("images/silver.png");
        gold_img = loadImage("images/gold.png");

        ground1Img = loadImage("images/ground.png");
        ground2Img = loadImage("images/ground2.png");
        ground3Img = loadImage("images/ground3.png");
        ground4Img = loadImage("images/ground4.png");
        ground5Img = loadImage("images/ground5.png");
    
        marioRunningRight = loadAnimation("images/mrr1.png", "images/mrr2.png");
        marioRunningLeft = loadAnimation("images/mrl1.png", "images/mrl2.png");
        marioStanding = loadImage("images/mrr1.png");
    
        luigiRunningRight = loadAnimation("images/lrr1.png", "images/lrr2.png");
        luigiRunningLeft = loadAnimation("images/lrl1.png", "images/lrl2.png");
        luigiStanding = loadImage("images/lrr1.png");
    
        enemyAnimation = loadAnimation("images/enemy/1.png", "images/enemy/2.png", "images/enemy/3.png", "images/enemy/4.png");
        
        plainGroundImg = loadImage("images/plainGround.png");

        revertedEnemyAnimation = loadAnimation("images/enemy/r1.png", "images/enemy/r2.png", "images/enemy/r3.png", "images/enemy/r4.png")

        brickImg = loadImage("images/brick.png");

        multiBrickImg = loadImage("images/multiBricks.png");

        plainGround2Img = loadImage("images/plainGround2.png");

        mushroomImg = loadImage("images/powerMushroom.png");
        pipeImg = loadImage("images/pipe.png");
        plantImg = loadImage("images/pirhanaPlant.png");

        thwompImg = loadImage("images/thwomp.png");

        ghostImg = loadAnimation("images/ghost.png");
        powerFlowerImg = loadImage("images/powerFlower.png");

        rGhostImg = loadAnimation("images/rGhost.png");

        bulletImg = loadImage("images/bullet.png");

        squareGroundImg = loadImage("images/squareGround.png");

        coinImg = loadImage("images/coin.png");
    }
}