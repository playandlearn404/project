class Form{
    constructor(){
        this.input = createInput();
        this.button = createButton("Play");
        this.greeting = createElement("h1");

        this.reset = createButton("Reset");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        //create the title
        var title = createElement("h1");
        title.html("Super Mario Bros");
        title.position(displayWidth/2.25, displayHeight/2.5 - (displayHeight/8));

        this.input.position(displayWidth/2.25, displayHeight/2.5);
        this.button.position(displayWidth/2.1, displayHeight/2.5 + (displayHeight/20));
        this.reset.position(10, 10);

        //game when you click play
        this.button.mousePressed(()=>{
            title.hide();
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.updateName();
            player.updateCount(playerCount);

            this.greeting.html("Welcome to Game " + player.name + "!");
            this.greeting.position(displayWidth/2.1 - player.name.length * (displayWidth/110), 125);
        });

        //reset button work
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.updateState(0);

            database.ref('/').update({
                players: null,
                finishedPlayers: 0
            })
        });
    }
}