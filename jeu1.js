class jeu1 extends Phaser.Scene {
  constructor(){
    super("jeu1")
  }


init(data){
  }

preload(){
	this.load.image('jeu1', 'assets/jeu1.png'); //Background zone 1
	this.load.image('aile', 'assets/tatouage-aile.png');
	this.load.image('dauphin', 'assets/tatouage-dauphin.png');
	this.load.image('dragon', 'assets/tatouage-dragon.png');
	this.load.image('fleur', 'assets/tatouage-fleur.png');
	this.load.image('poule', 'assets/tatouage-poule.png');
	this.load.image('raie', 'assets/tatouage-raie.png');
	this.load.image('tortue', 'assets/tatouage-tortue.png');
	this.load.image('rep1', 'assets/aile.png');
	this.load.image('rep2', 'assets/fleur.png');
	this.load.image('rep3', 'assets/totem.png');
	this.load.image('gagne', 'assets/gagne.png');
	this.load.image('perdu', 'assets/perdu.png');
}

create(){
	this.add.image(1140,540,'jeu1');
	var perdu = this.add.image(1140,900,'perdu');
	var gagne = this.add.image(1140,900,'gagne');
	
	perdu.visible = false;
	gagne.visible = false;


	this.time.addEvent({
        delay: 10000,
        callback: () => {
             this.scene.start("map");
        },
    })




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
}

update(){
 
}


}