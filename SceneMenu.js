class SceneMenu extends Phaser.Scene {
    constructor() {
        super("SceneMenu");
    }

    preload() {
        this.load.image("menu", "assets/menu.jpg");
    }

    create() {
        this.add.image(400, 300, "menu");
        this.add.text(275, 150, "STARFALL\nDEMO", {font: "65px Impact", align: "center"});

        var button = this.add.rectangle(390, 375, 250, 50, 0xb5b5b5);
        this.add.text(325, 355, "START", {font: "40px Arial", align: "center"});

        button.setInteractive();
        button.on('pointerdown', () => this.scene.start("SceneGame1"));
    }
}