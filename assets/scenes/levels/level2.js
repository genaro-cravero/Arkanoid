class level2 extends Phaser.Scene{
    constructor(){
        super("level2");
    }


    create(){

        //* tilemaps
        map = this.add.tilemap('map2');
        mapimages = map.addTilesetImage('images1');
        //?capas
        background = map.createStaticLayer('background', [mapimages],0,0);
        wallsv_layer = map.createStaticLayer('walls_v',[mapimages],0,0).setScale(0.15,1);
        wallsv2_layer = map.createStaticLayer('walls_v2',[mapimages],600,0).setScale(0.15,1);
        wallsh_layer = map.createStaticLayer('walls_h',[mapimages],0,0).setScale(1,0.15);

            //?ladrillos
            brick_y_layer = map.getObjectLayer('brick_y')['objects'];
            brick_y = this.physics.add.group();
            brick_y_layer.forEach(object => {
                obj = brick_y.create(object.x,object.y,'useful','yellow_brick');
                obj.setSize(64,32).setOffset(0,32);
                obj.body.immovable = true;
            });
            brick_g_layer = map.getObjectLayer('brick_g')['objects'];
            brick_g = this.physics.add.group();
            brick_g_layer.forEach(object => {
                obj = brick_g.create(object.x,object.y,'useful','green_brick');
                obj.setSize(64,32).setOffset(0,32);
                obj.body.immovable = true;
            });
            brick_p_layer = map.getObjectLayer('brick_p')['objects'];
            brick_p = this.physics.add.group();
            brick_p_layer.forEach(object => {
                obj = brick_p.create(object.x,object.y,'useful','pink_brick');
                obj.setSize(64,32).setOffset(0,32);
                obj.body.immovable = true;
            });
            brick_r_layer = map.getObjectLayer('brick_r')['objects'];
            brick_r = this.physics.add.group();
            brick_r_layer.forEach(object => {
                obj = brick_r.create(object.x,object.y,'useful','red_brick');
                obj.setSize(64,32).setOffset(0,32);
                obj.body.immovable = true;
            });
            brick_r_layer = map.getObjectLayer('brick_r')['objects'];
            brick_r = this.physics.add.group();
            brick_r_layer.forEach(object => {
                obj = brick_r.create(object.x,object.y,'useful','red_brick');
                obj.setSize(64,32).setOffset(0,32);
                obj.body.immovable = true;
            });
            brick_v_layer = map.getObjectLayer('brick_v')['objects'];
            brick_v = this.physics.add.group();
            brick_v_layer.forEach(object => {
                obj = brick_v.create(object.x,object.y,'useful','purple_brick');
                obj.setSize(64,32).setOffset(0,32);
                obj.body.immovable = true;
            });
            brick_b_layer = map.getObjectLayer('brick_b')['objects'];
            brick_b = this.physics.add.group();
            brick_b_layer.forEach(object => {
                obj = brick_b.create(object.x,object.y,'useful','blue_brick');
                obj.setSize(64,32).setOffset(0,32);
                obj.body.immovable = true;
            });

            brickM_layer = map.getObjectLayer('brick_metal')['objects'];
            brickM=this.physics.add.group();
            brickM_layer.forEach(object => {
                obj = brickM.create(object.x, object.y, "useful", 'metal_brick00'); 
                obj.setSize(64,32).setOffset(0,32);
                obj.body.immovable= true;
            });
        
            
        //!ball and bar
        ball = this.physics.add.sprite(365,568,'useful', 'ball').setScale(0.5).setSize(16,16).setBounce(1);
        ball.setVelocityY(400);
    
        player = this.physics.add.sprite(350,600, 'useful', 'bar0').setScale(1.5).setSize(64,32).setOffset(0,32);
        player.body.immovable= true;
    
        
        ////input events
        cursor_a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        cursor_d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        

        ////collisions
        wallsh_layer.setCollisionByExclusion([-1]);
        wallsv_layer.setCollisionByExclusion([-1]);
        wallsv2_layer.setCollisionByExclusion([-1]);
        this.physics.add.collider(ball,player);
        this.physics.add.collider(ball, wallsh_layer);
        this.physics.add.collider(ball, wallsv_layer);
        this.physics.add.collider(ball, wallsv2_layer);
        this.physics.add.collider(player, wallsv_layer);
        this.physics.add.collider(player, wallsv2_layer);
        this.physics.add.collider(ball,brickM);
        this.physics.add.collider(ball,brick_y);
        this.physics.add.collider(ball,brick_r);
        this.physics.add.collider(ball,brick_g);
        this.physics.add.collider(ball,brick_v);
        this.physics.add.collider(ball,brick_p);
        this.physics.add.collider(ball,brick_b);
        

        wallsh_layer.renderDebug(this.add.graphics(),{
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,134,48,200),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        });
        wallsv2_layer.renderDebug(this.add.graphics(),{
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,134,48,200),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        });
    }


    update(){

        if(cursor_a.isDown){
            player.setVelocityX(-250);
            }else if(cursor_d.isDown){
                player.setVelocityX(250);
                }else{
                    player.setVelocityX(0);
        }




    }


}