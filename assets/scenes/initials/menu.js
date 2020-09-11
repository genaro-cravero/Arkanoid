let arkatext;
let i = 0;
let hsv;
let topc;
let bottomc;

class menu extends Phaser.Scene{
    constructor(){
        super("menu");
    }


    create(){
        hsv = Phaser.Display.Color.HSVColorWheel();

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
        arkatext = this.add.text(352,200, 'Arkanoid', { fontSize: '64px', fill: '#00000', fontFamily: 'Arial Black'  }).setStroke('#fff',5).setOrigin(0.5);

        this.add.text(205,350, 'Level 1', { fontSize: '32px', fill: '#020b96', fontFamily: 'Arial Black'})
        .setInteractive().on('pointerdown', ()=>{this.scene.start('level1')});
        this.add.text(253,400, 'Level 2', { fontSize: '32px', fill: '#4003a8', fontFamily: 'Arial Black'})
        .setInteractive().on('pointerdown', ()=>{this.scene.start('level2')});

        this.add.text(315,480, 'Instrucciones', { fontSize: '16px', fill: '#ac06c2', fontFamily: 'Arial Black'})
        .setInteractive().on('pointerdown', ()=>{this.scene.start('instructions')});
    }
    update(){
        topc = hsv[i].color;
        bottomc = hsv[359 - i].color;

        arkatext.setTint(topc, bottomc, topc, bottomc);

        i++;

        if (i === 360)
        {
            i = 0;
        }
     
    }




}