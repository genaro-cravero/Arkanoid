class preloadScene extends Phaser.Scene{
    constructor(){
        super("preloadScene");
	}

    preload() {
		
		
		this.graphics = this.add.graphics();
		this.newGraphics = this.add.graphics();
		var bBar = new Phaser.Geom.Rectangle(150, 500, 400, 50);
		var loadingBar = new Phaser.Geom.Rectangle(155, 505, 390, 40);

		this.graphics.fillStyle(0xffffff, 1);
		this.graphics.fillRectShape(bBar);

		this.newGraphics.fillStyle(0x1de027, 1);
		this.newGraphics.fillRectShape(loadingBar);

		var loadingText = this.add.text(225,560,"Cargando: ", { fontSize: '32px', fill: '#FFF' });


		this.load.image('images1', '/assets/images/atlas/images1.png');
		this.load.tilemapTiledJSON('map1', '/assets/maps/level_1.json');
		this.load.tilemapTiledJSON('map2', '/assets/maps/level_2.json');
		this.load.atlas('useful', '/assets/images/atlas/images1.png', '/assets/images/atlas/images1_atlas.json');
		
		
		

		this.load.on('progress', this.cargando, {newGraphics:this.newGraphics,loadingText:loadingText});
		this.load.on('complete', this.completo, {scene:this.scene});
	}


	cargando(percentage) {
		this.newGraphics.clear();
		this.newGraphics.fillStyle(0x1de027, 1);
		this.newGraphics.fillRectShape(new Phaser.Geom.Rectangle(155, 505, percentage*390, 40));

		percentage = Math.round(percentage * 100);
		this.loadingText.setText("Cargando: " + percentage + "%");


	}

	completo() {
		
		this.scene.start("menu");
	}





}