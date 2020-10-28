class Game{
    constructor(){
        
    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        });
    }

    updateState(state){
        database.ref('/').update({
            gameState: state
        });
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form();
            form.display();
            set = new Setup();
        }
    } 
    
    play(){
        form.hide();

        Player.getPlayerInfo();
        player.getFinishedPlayers();
        
        if(allPlayers !== "undefined"){
     // All things from sketch .js function draw


        }
        drawSprites();
    }

    displayRanks(){
 //display the medals
 camera.position.y = 0;
 camera.position.x = 0;

 imageMode(CENTER);

 Player.getPlayerInfo();

 image(gold_img, displayWidth/-4, -100 + displayHeight/9, 200, 240);
 image(silver_img, displayWidth/4, -100 + displayHeight/10, 225, 270);
 

 textAlign(CENTER);
 textSize(50);
 for(var plr in allPlayers){
     if(allPlayers[plr].place === 1){
         text("1st: " + allPlayers[plr].name, 0, 85);
     }else if(allPlayers[plr].place === 2){
         text("2nd: " + allPlayers[plr].name, displayWidth/4, displayHeight/9 + 73);
     }
    }
}
}