class menu extends Phaser.Scene{
    constructor(){
        super("menu");
    }


    create(){

        
        this.add.text(205,200, 'Arkanoid', { fontSize: '64px', fill: '#FFFF', fontFamily: 'Arial Black'  });

        this.add.text(205,350, 'Level 1', { fontSize: '32px', fill: '#020b96', fontFamily: 'Arial Black'})
        .setInteractive().on('pointerdown', ()=>{this.scene.start('level1')});
        this.add.text(205,400, 'Level 2', { fontSize: '32px', fill: '#4003a8', fontFamily: 'Arial Black'})
        .setInteractive().on('pointerdown', ()=>{this.scene.start('level2')});

    }





}