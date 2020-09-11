class Ladrillos extends Phaser.GameObjects.Sprite{
    constructor(config){
  
      super(config.scene);
      config.scene.add.existing(this);
     
      brick_y_layer = map.getObjectLayer('brick_y')['objects'];
            brick_y = config.scene.physics.add.group();
            brick_y_layer.forEach(object => {
                obj = brick_y.create(object.x,object.y,'useful','yellow_brick');
                obj.setSize(64,32).setOffset(0,32);
                obj.body.immovable = true;
            });
            brick_g_layer = map.getObjectLayer('brick_g')['objects'];
            brick_g = config.scene.physics.add.group();
            brick_g_layer.forEach(object => {
                obj = brick_g.create(object.x,object.y,'useful','green_brick');
                obj.setSize(64,32).setOffset(0,32);
                obj.body.immovable = true;
            });
            brick_p_layer = map.getObjectLayer('brick_p')['objects'];
            brick_p = config.scene.physics.add.group();
            brick_p_layer.forEach(object => {
                obj = brick_p.create(object.x,object.y,'useful','pink_brick');
                obj.setSize(64,32).setOffset(0,32);
                obj.body.immovable = true;
            });
            brick_r_layer = map.getObjectLayer('brick_r')['objects'];
            brick_r = config.scene.physics.add.group();
            brick_r_layer.forEach(object => {
                obj = brick_r.create(object.x,object.y,'useful','red_brick');
                obj.setSize(64,32).setOffset(0,32);
                obj.body.immovable = true;
            });
            brick_v_layer = map.getObjectLayer('brick_v')['objects'];
            brick_v = config.scene.physics.add.group();
            brick_v_layer.forEach(object => {
                obj = brick_v.create(object.x,object.y,'useful','purple_brick');
                obj.setSize(64,32).setOffset(0,32);
                obj.body.immovable = true;
            });
    
            brickM_layer = map.getObjectLayer('brick_metal')['objects'];
            brickM=config.scene.physics.add.group();
            brickM_layer.forEach(object => {
                obj = brickM.create(object.x, object.y, "useful", 'metal_brick00'); 
                obj.anims.play('metalAnim');
                obj.setSize(64,32).setOffset(0,32);
                obj.body.immovable= true;
            });
            if(Varlevel2 === true){
                brick_b_layer = map.getObjectLayer('brick_b')['objects'];
                brick_b = config.scene.physics.add.group();
                brick_b_layer.forEach(object => {
                    obj = brick_b.create(object.x,object.y,'useful','blue_brick');
                    obj.setSize(64,32).setOffset(0,32);
                    obj.body.immovable = true;
                });
            }
    }
    
  }