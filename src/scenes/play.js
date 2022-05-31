// Declaracion de variables para esta escena
 
var player;
var stars;
var bombs;
var platforms;
var cursors;
var score;
var gameOve;
var scoreText;
var scoreTime;
var time;
var plataform;
var point;

// Clase Play, donde se crean todos los sprites, el escenario del juego y se inicializa y actualiza toda la logica del juego.
export class Play extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Play");
  }

  preload() {
    this.load.tilemapTiledJSON("map", "public/assets/tilemaps/map.json");
    this.load.image("tilesBelow", "public/assets/images/sky_atlas.png");
    this.load.image("tilesPlatform", "public/assets/images/platform_atlas.png");
  }

  create ()
    {
        gameOver = false
        score=0
        time=0
        //  A simple background for our game
        this.add.image(400, 300, 'sky');
    
        // Creo un Game over y lo hago invisible
        this.gameoverImage = this.add.image(400, 90, 'gameover');
        this.gameoverImage.visible = false;
    
        //Creo plataforma de movimiento
    
        this.plataform = this.physics.add.image(400, 430, 'plataform');
        this.plataform.body.allowGravity=false;
        this.plataform.setVelocity(10, 0);
        this.plataform.setCollideWorldBounds(true);
        this.plataform.setBounce(1);
        
    
        
    
    
    
        //  The platforms group contains the ground and the 2 ledges we can jump on
        platforms = this.physics.add.staticGroup();
    
        //  Here we create the ground.
        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    
        //  Now let's create some ledges
       
        platforms.create(50, 250, 'ground1');
        platforms.create(750, 220, 'ground2');
        
        
    
        // The player and its settings
        player = this.physics.add.sprite(100, 450, 'dude');
    
        //  Player physics properties. Give the little guy a slight bounce.
        player.setBounce(0.3);
        player.setCollideWorldBounds(true);
    
        //  Our player animations, turning, walking left and walking right.
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });
    
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    
        //  Input Events
        cursors = this.input.keyboard.createCursorKeys();
    
        point = this.physics.add.group({
            key: 'point',
            repeat: 4,
            setXY: { x: 100, y: 0, stepX: 150 }
        });
    
        point.children.iterate(function (child) {
    
            //  Give each star a slightly different bounce
            child.setBounceY(Phaser.Math.FloatBetween(0.3, 0.3));
    
        });
    
        //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
        stars = this.physics.add.group({
            key: 'star',
            repeat: 5,
            setXY: { x: 12, y: 0, stepX: 150 }
        });
    
        stars.children.iterate(function (child) {
    
            //  Give each star a slightly different bounce
            child.setBounceY(Phaser.Math.FloatBetween(0.3, 0.3));
    
        });
    
        bombs = this.physics.add.group();
    
        //  The score
        scoreText = this.add.text(16, 16, 'Puntos: 0', { fontSize: '32px', fill: '#FFFFFF' });
        scoreTime = this.add.text(600, 16, 'Tiempo: 0', { fontSize: '32px', fill: '#FFFFFF' });

    // Collide the player and the stars with the platforms
    // REPLACE Add collision with worldLayer
    this.physics.add.collider(player, worldLayer);
    this.physics.add.collider(stars, worldLayer);
    this.physics.add.collider(bombs, worldLayer);
    this.physics.add.collider(player, this.plataform);
    this.physics.add.collider(platforms, this.plataform);
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(bombs, platforms);
    this.physics.add.collider(bombs, this.plataform);
    this.physics.add.collider(point, platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.physics.add.overlap(player, stars, this.collectStar, null, this);
    this.physics.add.overlap(player, point, collectPoint, null, this); 
    this.physics.add.collider(player, bombs, this.hitBomb, null, this);

    gameOver = false;
    score = 0;
  }

  update() {
    if (gameOver) {
      return;
    }

    if (cursors.left.isDown) {
      player.setVelocityX(-160);

      player.anims.play("left", true);
    } else if (cursors.right.isDown) {
      player.setVelocityX(160);

      player.anims.play("right", true);
    } else {
      player.setVelocityX(0);

      player.anims.play("turn");
    }

    // REPLACE player.body.touching.down
    if (cursors.up.isDown && player.body.blocked.down) {
      player.setVelocityY(-330);
    }
  }

  collectStar (player, star)
    {
        star.disableBody(true, true);
    
        //  Add and update the score
        score += 5;
        scoreText.setText('Puntos: ' + score);
    
      
        if (stars.countActive(true) === 0 && point.countActive(true) === 0)
        {
            
            //  A new batch of stars to collect
            stars.children.iterate(function (child) {
    
                child.enableBody(true, child.x, 0, true, true);
    
            });
    
            point.children.iterate(function (child) {
    
                child.enableBody(true, child.x, 0, true, true);
    
            });
    
            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    
            var bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;
    
           
        }
    }
    
     collectPoint (player, point)
    {
        point.disableBody(true, true);
    
        //  Add and update the score
        score += 10;
        scoreText.setText('Puntos: ' + score);
    
    
        if (stars.countActive(true) === 0 && point.countActive(true) === 0)
        {
            
            //  A new batch of stars to collect
            point.children.iterate(function (child) {
    
                child.enableBody(true, child.x, 0, true, true);
    
            });
    
    
            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    
            var bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;
    
           
        }
    }

  hitBomb(player, bomb) {
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play("turn");

    gameOver = true;

    // Función timeout usada para llamar la instrucción que tiene adentro despues de X milisegundos
    setTimeout(() => {
      // Instrucción que sera llamada despues del segundo
      this.scene.start(
        "Retry",
        { score: score } // se pasa el puntaje como dato a la escena RETRY
      );
    }, 1000); // Ese número es la cantidad de milisegundos
  }
}