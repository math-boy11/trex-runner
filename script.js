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
            gravity: { y: 910 },
            debug: false
        }
    }
};

var game = new Phaser.Game(config);
var startGame = false;
var dinoChangeCostume = null;
var score = 0;
var highscore = parseInt(localStorage.getItem("highscore"));
var soundEffects = new Audio();
var die = 0;
var peramsString = window.location.search;
var urlParams = new URLSearchParams(peramsString);
if (urlParams.get("bot") == 'true') {
    console.log("Hidden bot mode activated!")
    var botActivated = true;
}

function preload ()
{
    this.load.image("dino-run1", "assets/gg dino op 3.png");
    this.load.image("dino-run2", "assets/gg dino op 4.png");
    this.load.image("dino", "assets/gg dino op .png");
    this.load.image("floor", "assets/Dino under .png");
    this.load.image("retry", "assets/retry.png");
    this.load.image("cactus1", "assets/obsticle/cactus1.png")
    this.load.image("cactus2", "assets/obsticle/cactus2.png")
    this.load.image("cactus3", "assets/obsticle/cactus3.png")
    this.load.image("cactus4", "assets/obsticle/cactus4.png")
    this.load.image("cactus5", "assets/obsticle/cactus5.png")
    this.load.image("cactus6", "assets/obsticle/cactus6.png")
    this.load.image("cactus7", "assets/obsticle/cactus7.png")
    this.load.image("cactus8", "assets/obsticle/cactus8.png")
}

function create ()
{
    scene = this;
    dino = this.physics.add.sprite(59, 140, "dino").setScale(0.5);
    ground = this.physics.add.sprite(48, 190, "floor").setImmovable(true);
    ground.body.setAllowGravity(false);
    this.physics.add.collider(dino, ground, function(){
        if (dinoChangeCostume == null && startGame == true) {
            console.log("set interval")
        dinoChangeCostume = setInterval(function(){
            if (dino.texture.key == "dino-run1") {
                dino.setTexture("dino-run2");
            } else {
                dino.setTexture("dino-run1");
            }
        }, 70);
    }
    });
    obsticle = this.physics.add.sprite(820, 146, "obsicle").setScale(0.5).refreshBody();
    obsticle.body.setAllowGravity(false);
    this.input.on("pointerup", function(){

if (startGame == false) {
    startGame = true;
    dino.setTexture("dino-run1");
    scoreInterval = setInterval(function(){score++;scoreText.setText(score);score100 = score + 100; }, 100);
    scoreInterval2 = setInterval(function(){
        soundEffects.src = "assets/100.m4a";
        soundEffects.currentTime = 0;
        soundEffects.play();
    }, 10000)

    
    setTimeout(function(){
        randNum = Phaser.Math.Between(1, 8);
        obsticle.setTexture("cactus" + randNum);
        obsticle.setVelocityX(-300);
    }, 3000)
} else {
    if (dino.body.touching.down) {
        soundEffects.src = "assets/jump.m4a";
        soundEffects.currentTime = 0;
        soundEffects.play();
        clearInterval(dinoChangeCostume);
        dinoChangeCostume = null
        dino.setTexture("dino");
    dino.setVelocityY(-500);
    }
}

    });
    this.input.keyboard.on('keydown-SPACE', function (event) {

if (startGame == false) {
    startGame = true;
    dino.setTexture("dino-run1");
    scoreInterval = setInterval(function(){score++;scoreText.setText(score);score100 = score + 100; }, 100);
    scoreInterval2 = setInterval(function(){
        soundEffects.src = "assets/100.m4a";
        soundEffects.currentTime = 0;
        soundEffects.play();
    }, 10000)

    
    setTimeout(function(){
        randNum = Phaser.Math.Between(1, 8);
        obsticle.setTexture("cactus" + randNum);
        obsticle.setVelocityX(-300);
    }, 3000)
} else {
    if (dino.body.touching.down) {
        soundEffects.src = "assets/jump.m4a";
        soundEffects.currentTime = 0;
        soundEffects.play();
        clearInterval(dinoChangeCostume);
        dinoChangeCostume = null
        dino.setTexture("dino");
    dino.setVelocityY(-500);
    }
}
    });
    this.input.keyboard.on('keydown-UP', function (event) {

if (startGame == false) {
    startGame = true;
    dino.setTexture("dino-run1");
    scoreInterval = setInterval(function(){score++;scoreText.setText(score);score100 = score + 100; }, 100);
    scoreInterval2 = setInterval(function(){
        soundEffects.src = "assets/100.m4a";
        soundEffects.currentTime = 0;
        soundEffects.play();
    }, 10000)

    
    setTimeout(function(){
        randNum = Phaser.Math.Between(1, 8);
        obsticle.setTexture("cactus" + randNum);
        obsticle.setVelocityX(-300);
    }, 3000)
} else {
    if (dino.body.touching.down) {
        soundEffects.src = "assets/jump.m4a";
        soundEffects.currentTime = 0;
        soundEffects.play();
        clearInterval(dinoChangeCostume);
        dinoChangeCostume = null
        dino.setTexture("dino");
    dino.setVelocityY(-500);
    }
}
    });
    this.physics.add.overlap(dino, obsticle, function(){die++;obsticle.setVelocity(0);dino.setVelocity(0);clearInterval(dinoChangeCostume);dino.setTexture("dino");dino.body.setAllowGravity(false);clearInterval(scoreInterval);if (score > highscore){localStorage.setItem("highscore", score)}clearInterval(scoreInterval2);
    if (die == 1) {
    soundEffects.src = "assets/die.m4a";
    soundEffects.currentTime = 0;
    soundEffects.play();
    }
    retryBtn.setAlpha(1);
    gameOverText.setAlpha(1);
});
    scoreText = this.add.text(16, 16, score, { fontSize: '25px', fill: '#000' });
    highscoreText = this.add.text(690, 16, highscore, { fontSize: '25px', fill: '#000' });
    gameOverText = this.add.text(430, 16, "Game Over!", { fontSize: '25px', fill: '#000' }).setAlpha(0);
    retryBtn = this.add.sprite(500, 70, "retry").setInteractive().setAlpha(0);
    retryBtn.on("pointerup", function(){
        location.reload();
    });
}

function update ()
{
    xPos = Math.round(obsticle.x);
    if (xPos < -19) {
        randNum = Phaser.Math.Between(1, 8);
        obsticle.setTexture("cactus" + randNum);
        obsticle.setPosition(820, obsticle.y);
    }
    obsticle.body.setSize(obsticle.width, obsticle.height, true)

    if (botActivated == true) {
        if (Math.round(obsticle.x) == 230){
            if (dino.body.touching.down) {
                soundEffects.src = "assets/jump.m4a";
                soundEffects.currentTime = 0;
                soundEffects.play();
                clearInterval(dinoChangeCostume);
                dinoChangeCostume = null
                dino.setTexture("dino");
            dino.setVelocityY(-500);
            }
        }
    }
}