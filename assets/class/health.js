class Health extends Phaser.GameObjects.Sprite{
    value;
    constructor(config){
        super(config.scene)

        config.scene.add.existing(this);
        this.scene.events.on('update', this.update , this);

        h1 = config.scene.add.sprite(12, 650, 'useful', 'bar00').setScale(0.5).setTint(0xff0000).setOrigin(0);
        h2 = config.scene.add.sprite(52, 650, 'useful', 'bar00').setScale(0.5).setTint(0xff0000).setOrigin(0);
        h3 = config.scene.add.sprite(92, 650, 'useful', 'bar00').setScale(0.5).setTint(0xff0000).setOrigin(0);


    }
    update(){
        
        if(value === 2){
            h3.destroy();
            
            }else if (value ===1){
                h2.destroy();
             
                }else if(value===0){
                    h1.destroy();
        };
        
    }


}