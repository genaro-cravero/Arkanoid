var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 704,
        height: 704,
    },     
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false,
        }

    },
    
    
    scene: [preloadScene, menu, level1, level2]
};

var game = new Phaser.Game(config);

//? Variables globales
var map;
var mapimages;
var wallsv_layer;
var wallsv2_layer;
var wallsh_layer;
var background;
var brick_y;
var brick_y_layer;
var brick_g;
var brick_g_layer;
var brick_p;
var brick_p_layer;
var brick_v;
var brick_v_layer;
var brick_r;
var brick_r_layer;
var brick_b;
var brick_b_layer;
var brickM_layer;
var brickM;
var ball;
var player;
var obj;
var obj1;
var cursor_a;
var cursor_d;

