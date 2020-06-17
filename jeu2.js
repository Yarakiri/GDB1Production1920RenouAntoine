		var vague1;
		var vague2;
		var vague3;
		var surfer;
		var requin1;
		var requin2;
		var vague;
		var perdu = 0;
		var gagne = 0;
		var vct;

class jeu2 extends Phaser.Scene {
	constructor(){
		super("jeu2")
}

	init(){}

	preload(){
		this.load.image('jeu2', 'assets/jeu2.png'); //Background zone 1
		this.load.image('gagne', 'assets/gagne.png');
		this.load.image('perdu', 'assets/perdu.png');
		this.load.image('plage', 'assets/plage.png');
		this.load.image('vague1', 'assets/vague1.png');
		this.load.image('vague2', 'assets/vague2.png');
		this.load.image('vague3', 'assets/vague3.png');

//	Image spritesheet

		this.load.spritesheet('requin-b','assets/requin-b.png',{frameWidth: 73,frameHeight: 160});
		this.load.spritesheet('requin-g','assets/requin-g.png',{frameWidth: 158,frameHeight: 80});
		this.load.spritesheet('surfer-d','assets/surfer-d.png',{frameWidth: 135,frameHeight: 45});
		this.load.spritesheet('surfer-h','assets/surfer-h.png',{frameWidth: 41,frameHeight: 150});

		this.load.image('droite', 'assets/but-surf-d.png'); // image boutton : surfer sur la droite
		this.load.image('bas', 'assets/but-surf-b.png'); // image boutton : surfer vers le bas
		this.load.image('haut', 'assets/but-surf-h.png'); // image boutton : surfer vers le haut
	}

	create(){

		this.add.image(1140,540,'jeu2');


		vague1 = this.physics.add.staticGroup();
		vague2 = this.physics.add.staticGroup();
		vague3 = this.physics.add.staticGroup();
		vct	= this.physics.add.staticGroup();	

		vct.create(1580,500,'plage');
		var perdu = this.add.image(1140,900,'perdu');
		var gagne = this.add.image(1140,900,'gagne');

		vague1 = this.physics.add.image(300,770,'vague1');
		vague2 = this.physics.add.image(750,280,'vague2');
		vague3 = this.physics.add.image(1150,550,'vague3');

		perdu.visible = false;
		gagne.visible = false;
		vct.setAlpha(0);
		requin1 = this.physics.add.sprite(450,200,'requin-b');
		requin2 = this.physics.add.sprite(1350,400,'requin-g');
		surfer = this.physics.add.sprite(150,1000,'surfer-h');

//	Collision

		this.physics.add.collider(vague1,surfer);
		this.physics.add.collider(vague2,surfer);
		this.physics.add.collider(vague3,surfer);
		this.physics.add.collider(surfer,vct,victoire, null, this);
		this.physics.add.collider(surfer,requin1,dgt1, null, this);
		this.physics.add.collider(surfer,requin2,dgt2, null, this);

// Animation perso et requin
    this.anims.create({
      key:'anim_perso_droite',
      frames: this.anims.generateFrameNumbers('surfer-d', {start: 0, end: 9}),
      frameRate: 9,
      repeat: -1
    });
    this.anims.create({
      key:'anim_perso_haut',
      frames: this.anims.generateFrameNumbers('surfer-h', {start: 0, end: 7}),
      frameRate: 6,
      repeat: -1
    });
    this.anims.create({
      key:'anim_perso_stop',
      frames: this.anims.generateFrameNumbers('surfer-h', {start: 0, end: 1}),
      frameRate: 1,
      repeat: -1
    });
    this.anims.create({
    key:'requin-bas',
    frames: this.anims.generateFrameNumbers('requin-b', {start: 0, end: 7}),
    frameRate: 5,
    repeat: -1
    });
    this.anims.create({
    key:'requin-gauche',
    frames: this.anims.generateFrameNumbers('requin-g', {start: 0, end: 7}),
    frameRate: 7,
    repeat: -1
    });



 


    this.time.addEvent({
    	delay: 10000,
    	callback: () => {
    	    this.scene.start("map"); 
    	},
    })
}

	update(){

//	Animation Requin

	requin1.anims.play('requin-bas',true);
	requin1.setVelocityY(100);
	requin1.setVelocityX(0);

	requin2.anims.play('requin-gauche',true);
	requin2.setVelocityY(0);
	requin2.setVelocityX(-100);
	requin2.setFlipX(false);

//	Animation perso à partir des boutons

	this.button = this.add.image(1660, 480, 'haut').setInteractive();
	this.button.on('pointerdown', (pointer)=>{ 
		surfer.anims.play('anim_perso_haut', true);
    	surfer.setVelocityY(-225);
    	surfer.setVelocityX(0);
    	surfer.setFlipY(false);
    })

    this.button = this.add.image(1750, 550, 'droite').setInteractive();
    this.button.on('pointerdown', (pointer)=>{ 
	    surfer.anims.play('anim_perso_droite', true);
   	  	surfer.setVelocityX(350);
    	surfer.setVelocityY(0);
    	surfer.setFlipX(false);
    })

	this.button = this.add.image(1660, 620, 'bas').setInteractive();
	this.button.on('pointerdown', (pointer)=>{ 
      	surfer.anims.play('anim_perso_haut', true);
      	surfer.setVelocityY(225);
      	surfer.setVelocityX(0);
     	surfer.setFlipY(true);
    })

	}
}


// Condition de défaite

function dgt1(surfer, requin1, dgt1){
	perdu.visible = true;
	this.time.addEvent({
	    delay: 3000,
	    callback: () => {
	        this.scene.start("map");
	    },
	})
}
function dgt2(surfer, requin2, dgt2){
	perdu.visible = true;
	this.time.addEvent({
	    delay: 3000,
	    callback: () => {
	    	this.scene.start("map");
	    },
	})
}

// Condition de victoire

function victoire(surfer, vct, victoire){
	gagne.visible = true;
			this.time.addEvent({
	        delay: 3000,
	        callback: () => {
	            this.scene.start("map");
	        },
	    })
}
