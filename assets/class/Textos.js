class Textos extends Phaser.GameObjects.Text{
  constructor(config){

    super(config.scene, config.x, config.y);
    config.scene.add.existing(this);

    text = config.scene.add.text(config.x, config.y, 'Puntos: ' + score, {fontSize: 20, fontFamily: 'Arial Black'})

  }
  
}