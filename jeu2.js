		var vague;
		var surfer;
		var requin1;
		var requin2;
		var requin3;
		var requin4;
		var cursors;

class jeu2 extends Phaser.Scene {
	constructor(){
		super("jeu2")
	}


	init(){
	}



	preload(){
		this.load.image('jeu2', 'assets/jeu2.png'); //Background zone 1
		this.load.image('gagne', 'assets/gagne.png');
		this.load.image('perdu', 'assets/perdu.png');
		this.load.image('vague1', 'assets/vague1.png');
		this.load.image('vague2', 'assets/vague2.png');
		this.load.image('vague3', 'assets/vague3.png');
		this.load.spritesheet('requin-b','assets/requin-b.png',{frameWidth: 73,frameHeight: 160});
		this.load.spritesheet('requin-g','assets/requin-g.png',{frameWidth: 158,frameHeight: 80});
		this.load.spritesheet('surfer-d','assets/surfer-d.png',{frameWidth: 150,frameHeight: 40});
		this.load.spritesheet('surfer-h','assets/surfer-h.png',{frameWidth: 40,frameHeight: 150});

	}

	create(){
		this.add.image(1140,540,'jeu2');


		this.surfer = this.physics.add.staticGroup();
		this.surfer = this.physics.add.sprite(150,1000,'surfer-h');
		this.surfer.setCollideWorldBounds(true);
	
	
		var vague1 = this.add.image(300,770,'vague1');
		var vague2 = this.add.image(750,280,'vague2');
		var vague3 = this.add.image(1150,550,'vague3');
		//vague.create(300,900,'vague1');
		//vague.create(800,550,'vague2');
		//vague.create(1200,700,'vague3');
	
	
		this.physics.add.collider(vague1,surfer);
		this.physics.add.collider(vague2,surfer);
		this.physics.add.collider(vague3,surfer);
	
		var perdu = this.add.image(1140,900,'perdu');
		var gagne = this.add.image(1140,900,'gagne');
		
		perdu.visible = false;
		gagne.visible = false;


			cursors = this.input.keyboard.createCursorKeys(); 


    this.anims.create({
      key:'anim_perso_droite',
      frames: this.anims.generateFrameNumbers('surfer-d', {start: 0, end: 11}),
      frameRate: 11,
      repeat: -1
    });
    this.anims.create({
      key:'anim_perso_haut',
      frames: this.anims.generateFrameNumbers('surfer-h', {start: 0, end: 11}),
      frameRate: 11,
      repeat: -1
    });
    this.anims.create({
      key:'anim_perso_stop',
      frames: this.anims.generateFrameNumbers('surfer-h', {start: 0, end: 0}),
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


	requin1 = this.physics.add.sprite(450,200,'requin-b');
	requin2 = this.physics.add.sprite(1350,400,'requin-g');
	//requin3 = this.physics.add.sprite(450,200,'requin-b');
	//requin4 = this.physics.add.sprite(450,200,'requin-b');


//    this.time.addEvent({
 //   	delay: 10000,
//    	callback: () => {
 //   	    this.scene.start("map"); 
 //   	},
//    })
	}

	update(){

	requin1.anims.play('requin-bas',true);
	requin1.setVelocityY(100);
	requin1.setVelocityX(0);

	requin2.anims.play('requin-gauche',true);
	requin2.setVelocityY(0);
	requin2.setVelocityX(-100);
	requin2.setFlipX(false);

    if (cursors.up.isDown) {
      surfer.anims.play('anim_perso_haut', true);
      surfer.setVelocityY(-175);
      surfer.setVelocityX(0);
      surfer.setFlipX(false);
    }
    else if (cursors.down.isDown) {
      surfer.anims.play('anim_perso_haut', true);
      surfer.setVelocityY(175);
      surfer.setVelocityX(0);
      surfer.setFlipX(true);
    }
    else if (cursors.right.isDown) {
      surfer.anims.play('anim_perso_droite', true);
      surfer.setVelocityX(225);
      surfer.setVelocityY(0);
      surfer.setFlipX(false);
    }
	}
}