class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(config){
        super(config.scene, config.x, config.y, config.texture, config.sprite)

        config.scene.add.existing(this);
        config.scene.physics.add.existing(this)
        this.scene.events.on('update', this.update , this);
        

    }
    update(){
        if(cursor_a.isDown){
            player.setVelocityX(-250);
            player.anims.play('barI')
            }else if(cursor_d.isDown){
                player.anims.play('barR')
                player.setVelocityX(250);
                }else{
                    player.anims.play('bar')
                    player.setVelocityX(0);
        }
        
        
    }


}