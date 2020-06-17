var aile;
var dauphin;
var dragon;
var fleur;
var poule;
var raie;
var tortue;
var dragon2;
var aile2;
var dauphin2;
var dragon2;
var fleur2;
var poule2;
var raie2;
var tortue2;
var timer;


class jeu1 extends Phaser.Scene {
  constructor(){
    super("jeu1")
  }


init(data){
  }

preload(){

	this.load.image('jeu1', 'assets/jeu1.png'); //Background zone 1
	this.load.image('gagne', 'assets/gagne-z1.png');
	this.load.image('perdu', 'assets/perdu-z1.png');

	// Images tatouages

	this.load.image('aile', 'assets/tatouage-aile.png');
	this.load.image('dauphin', 'assets/tatouage-dauphin.png');
	this.load.image('dragon', 'assets/tatouage-dragon.png');
	this.load.image('fleur', 'assets/tatouage-fleur.png');
	this.load.image('poule', 'assets/tatouage-poule.png');
	this.load.image('raie', 'assets/tatouage-raie.png');
	this.load.image('tortue', 'assets/tatouage-tortue.png');

	// Images boutons
	this.load.image('rep1', 'assets/aile.png');
	this.load.image('rep2', 'assets/fleur.png');
	this.load.image('rep3', 'assets/totem.png');

	// Sprite animation timer
	this.load.spritesheet('timer','assets/timer-drap.png',{frameWidth: 115,frameHeight: 121});

}

create(){
	
	this.add.image(1140,540,'jeu1');

	var perdu = this.add.image(1140,800,'perdu');
	var gagne = this.add.image(1140,800,'gagne');
	
	perdu.visible = false;
	gagne.visible = false;

	timer = this.physics.add.sprite(100,100,'timer');

//Timer
    this.time.addEvent({
    	delay: 10000,
    	callback: () => {
    		perdu.visible = true;
    		this.time.addEvent({
    				delay: 3000,
    				callback: () => {
    	    		this.scene.start("map"); 
    			},
   			})
    	    
    	},
    })


// Boutons réponse défaite

	this.button = this.add.image(1350, 620, 'rep1').setInteractive();
	this.button.on('pointerdown', (pointer)=>{ 
    perdu.visible = true;
    this.time.addEvent({
            delay: 3000,
           callback: () => {
               this.scene.start("map");
            },
        })
	});

// Boutons réponse défaite

	this.button = this.add.image(1600, 620, 'rep2').setInteractive();
	this.button.on('pointerdown', (pointer)=>{ 
    perdu.visible = true;
    this.time.addEvent({
            delay: 3000,
           callback: () => {
               this.scene.start("map");
            },
        })
	});

// Boutons réponse victoire

	this.button = this.add.image(1850, 620, 'rep3').setInteractive();
	this.button.on('pointerdown', (pointer)=>{ 
    gagne.visible = true;
    this.time.addEvent({
            delay: 3000,
           callback: () => {
               this.scene.start("map");
            },
        })
	});

// Mouvement des tatouages

	aile = this.physics.add.sprite(400,700,'aile');
	aile.body.velocity.x=100;

	aile2 = this.physics.add.sprite(1400,800,'aile');
	aile2.body.velocity.y=-100;

	dauphin = this.physics.add.sprite(200,400,'dauphin');
	dauphin.body.velocity.x=100;

	dauphin2 = this.physics.add.sprite(1700,800,'dauphin');
	dauphin2.body.velocity.x=-100;

	dragon = this.physics.add.sprite(200,300,'dragon');
	dragon.body.velocity.y=100;

	dragon2 = this.physics.add.sprite(1500,600,'dragon');
	dragon2.body.velocity.x=-100;

	fleur = this.physics.add.sprite(1800,500,'fleur');
	fleur.body.velocity.y=100;

	fleur2 = this.physics.add.sprite(800,500,'fleur');
	fleur2.body.velocity.x=100;

	poule = this.physics.add.sprite(600,600,'poule');
	poule.body.velocity.x=100;

	poule2 = this.physics.add.sprite(100,800,'poule');
	poule2.body.velocity.y=-100;

	raie = this.physics.add.sprite(1200,700,'raie');
	raie.body.velocity.x=100;

	raie2 = this.physics.add.sprite(200,200,'raie');
	raie2.body.velocity.y=100;

	tortue = this.physics.add.sprite(1700,100,'tortue');
	tortue.body.velocity.x=-100;

	tortue2 = this.physics.add.sprite(1700,900,'tortue');
	tortue2.body.velocity.y=-100;

//	Animation timer

	this.anims.create({
    key:'timer-drap',
    frames: this.anims.generateFrameNumbers('timer', {start: 0, end: 16}),
    frameRate: 1.5,
    repeat: -1
    });
}

update(){

	timer.anims.play('timer-drap',true);
	timer.setVelocityY(0);
	timer.setVelocityX(0);
}
}


