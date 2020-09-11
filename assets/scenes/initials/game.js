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
    
    
    scene: [preloadScene, menu, level1, level2, instructions]
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
var objM;
var cursor_a;
var cursor_d;
var cursor_w;
var ballOnBar = true;
var velocityBounce;
var value = 3;
var h1;
var h2;
var h3;
var score = 0;
var vidas;
var brickCounter = 0;
var music;
var brickSound;
var barSound;
var metalSound;
var text;
var Varlevel2 = false;