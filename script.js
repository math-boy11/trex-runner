var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 200,
    parent: 'game',
    backgroundColor: '#FFFFFF',
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 },
            debug: false
        }
    }
};

var game = new Phaser.Game(config);
var startGame = false;

function preload ()
{
    this.load.image("dino-run1", "assets/gg dino op 3.png");
    this.load.image("dinorun2", "assets/gg dino op 4.png");
    this.load.image("dino", "assets/gg dino op .png");
    this.load.image("floor", "assets/Dino under .png")
}

function create ()
{
    dino = this.physics.add.sprite(59, 140, "dino").setScale(0.5);
    dino.body.setAllowGravity(false);
    ground = this.physics.add.sprite(48, 190, "floor")
    ground.body.setAllowGravity(false)
}

function update ()
{
}