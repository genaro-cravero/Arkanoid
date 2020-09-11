class menu extends Phaser.Scene{
    constructor(){
        super("menu");
    }


    create(){
        ////animaciones
        this.anims.create({
            key: 'metalAnim',
            frameRate:12,
            frames: this.anims.generateFrameNames('useful',{
                prefix:'metal_brick0',
                start:0,
                end:9
            }),
            repeat:-1
        });
        this.anims.create({
            key: 'barR',
            frameRate:10,
            frames:[{
                key: 'useful',
                frame:'bar02'
            }],
            repeat:0,
        });
        this.anims.create({
            key: 'barI',
            frameRate:10,
            frames:[{
                key: 'useful',
                frame:'bar01'
            }],
            repeat:0,
        });
        this.anims.create({
            key: 'bar',
            frameRate:10,
            frames:[{
                key: 'useful',
                frame:'bar00'
            }],
            repeat:0,
        });
        
        //// Título y opciones
        this.add.text(205,200, 'Arkanoid', { fontSize: '64px', fill: '#FFFF', fontFamily: 'Arial Black'  });

        this.add.text(205,350, 'Level 1', { fontSize: '32px', fill: '#020b96', fontFamily: 'Arial Black'})
        .setInteractive().on('pointerdown', ()=>{this.scene.start('level1')});
        this.add.text(205,400, 'Level 2', { fontSize: '32px', fill: '#4003a8', fontFamily: 'Arial Black'})
        .setInteractive().on('pointerdown', ()=>{this.scene.start('level2')});

    }





}