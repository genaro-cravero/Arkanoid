class instructions extends Phaser.Scene{
    constructor(){
        super("instructions");
    }
    create(){        
        this.add.text(352,100, '"A" y "D" para movimiento,', { fontSize: '32px', fill: '#04adb3', fontFamily: 'Arial Black'}).setOrigin(0.5);
        this.add.text(352,150, '"W" para lanzar.', { fontSize: '32px', fill: '#04b379', fontFamily: 'Arial Black'}).setOrigin(0.5);
        this.add.text(352,200, 'O podés arrastrar!', { fontSize: '32px', fill: '#04b32d', fontFamily: 'Arial Black'}).setOrigin(0.5);
        this.add.text(352,300, ' Destruye todos los bloques de colores,\n los bloques de metal son indestructibles \n y aumentan la velocidad de la pelota. \n Cuida tus vidas!! '
        ,{ fontSize: '20px', fill: '#61b304', fontFamily: 'Arial Black'}).setOrigin(0.5);


        this.add.text(600,500, 'Atrás', { fontSize: '25px', fill: '#b3b304', fontFamily: 'Arial Black'}).setOrigin(0.5)
        .setInteractive().on('pointerdown', ()=>{this.scene.start('menu')});
    }
}