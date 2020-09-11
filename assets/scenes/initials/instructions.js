class instructions extends Phaser.Scene{
    constructor(){
        super("instructions");
    }
    create(){        
        this.add.text(352,100, '"A" y "D" para movimiento,', { fontSize: '32px', fill: '#04adb3', fontFamily: 'Arial Black'}).setOrigin(0.5);
        this.add.text(352,200, '"W" para lanzar.', { fontSize: '32px', fill: '#04b379', fontFamily: 'Arial Black'}).setOrigin(0.5);
        this.add.text(352,300, 'O podés usar el mouse!', { fontSize: '32px', fill: '#04b32d', fontFamily: 'Arial Black'}).setOrigin(0.5);


        this.add.text(600,500, ' Atrás', { fontSize: '25px', fill: '#99b304', fontFamily: 'Arial Black'}).setOrigin(0.5)
        .setInteractive().on('pointerdown', ()=>{this.scene.start('menu')});
    }
}