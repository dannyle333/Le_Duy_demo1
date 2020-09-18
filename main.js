//import SceneGame1 from 'SceneGame1.js';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 },
            debug: false
        }
    },
    scene: [SceneMenu, SceneGame1, SceneGame2]
        
    
};

var game = new Phaser.Game(config);