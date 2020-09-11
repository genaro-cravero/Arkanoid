class level1 extends Phaser.Scene{
    constructor(){
        super("level1");
    }
    ballOnBar = true;
    score = 0;

    create(){
       
        
        //* tilemaps
        map = this.add.tilemap('map1');
        mapimages = map.addTilesetImage('images1');
        //?capas
        background = map.createStaticLayer('background', [mapimages],0,0);
        wallsv_layer = map.createStaticLayer('walls_v',[mapimages],-56,0);
        wallsv2_layer = map.createStaticLayer('walls_v2',[mapimages],56,0);
        wallsh_layer = map.createStaticLayer('walls_h',[mapimages],0,-56);

        //?ladrillos
        let ladrillosss = new Ladrillos({scene:this})
           
            
        //!ball and bar
        ball = this.physics.add.sprite(365,568,'useful', 'ball').setScale(0.5).setSize(16,16).setBounce(1);
    
        player = new Player({scene:this, x:350, y:600, texture:'useful',sprite:'bar00'}).setScale(1.5).setSize(64,32).setOffset(0,32);
        player.body.immovable= true;
        player.setInteractive();
        this.input.setDraggable(player);
        this.input.on('drag',function(pointer,gameObject,dragX){
            gameObject.x = dragX;
        });
        this.input.on('dragend',function(pointer,gameObject,dragX){
            if(ballOnBar === true){                
                ballOnBar = false;
                ball.setVelocityY(-400);
                ball.setVelocityX(20);
            };
        });
        

        vidas = new Health ({scene: this});

    
        
        ////input events
        cursor_a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        cursor_d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        cursor_w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        ////Music y sfx
        this.music = this.sound.add('arkasong1');
        this.music.loop = true;
        this.music.play();
        this.brickSound = this.sound.add('brick');
        this.barSound = this.sound.add('barsound');
        this.metalSound = this.sound.add('metal');

        ////Score
        let textCreator = new Textos({scene: this, x:550, y:660})
      
        ////collisions
        wallsh_layer.setCollisionByExclusion([-1]);
        wallsv_layer.setCollisionByExclusion([-1]);
        wallsv2_layer.setCollisionByExclusion([-1]);
        this.physics.add.collider(ball,player, this.bounceUp, null, this);
        this.physics.add.collider(ball, wallsh_layer);
        this.physics.add.collider(ball, wallsv_layer);
        this.physics.add.collider(ball, wallsv2_layer);
        this.physics.add.collider(player, wallsv_layer);
        this.physics.add.collider(player, wallsv2_layer);
        this.physics.add.collider(ball,brickM, this.doMetal,null,this);
        this.physics.add.collider(ball,brick_y, this.brickDestroy, null, this);
        this.physics.add.collider(ball,brick_g, this.brickDestroy, null, this);
        this.physics.add.collider(ball,brick_v, this.brickDestroy, null, this);
        this.physics.add.collider(ball,brick_p, this.brickDestroy, null, this);
        this.physics.add.collider(ball,brick_r, this.brickDestroy, null, this);
        
        
    }


    update(){

        if(ballOnBar === true){
            ball.body.velocity.x =0;
            ball.body.velocity.y =0;
            ball.x = player.x+10;
            ball.y = player.y-6;
            
            if(cursor_w.isDown){
                ballOnBar = false;
                ball.setVelocityY(-400);
                ball.setVelocityX(20);
            };
        };
        if(ball.y > player.y+60){
            ballOnBar=true;
            value = value -1;
            score = score - 155;
            if(score < 0){
                score = 0;
            }
            text.setText('Puntos: '+ score);
            
            
        };
        
        if(value===0){
            this.gameOver();
        }


    }
    
    bounceUp(){
        this.barSound.play();
        if(ball.x < player.x){
            velocityBounce = player.x - ball.x;
            ball.body.velocity.x = (-5 * velocityBounce);
            return;
        }
        else if(ball.x > player.x){
            velocityBounce = ball.x - player.x;
            ball.body.velocity.x = (5 * velocityBounce);
            return;
        };
    };

    brickDestroy(tiles,brick){
        brick.destroy(brick.x, brick.y);
        score = score + 125;
        text.setText('Puntos: '+ score);
        brickCounter = brickCounter + 1;
        this.brickSound.play();
        if(brickCounter === 102){
            brickCounter = 0;
            ballOnBar = true;
            this.scene.start('level2');
        };    
      }

    
    gameOver(){
        vidas.destroy();
        brickCounter =0;
        score = 0;
        value = 3;
        this.scene.restart('level1');
        this.music.stop();
    }

    doMetal(){
        this.metalSound.play();
        ball.body.velocity.y = ball.body.velocity.y*1.005;
        ball.body.velocity.x =  ball.body.velocity.x*1.005;
        if(ball.body.velocity.y>= 1000){
            ball.body.velocity.y = ball.body.velocity.y/4 
        };
        if(ball.body.velocity.x>= 1000){
            ball.body.velocity.x = ball.body.velocity.x/4 
        };
    }
    
    
    
}