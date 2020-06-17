class map3 extends Phaser.Scene {
  constructor(){
    super("map3")
  }


  init(data){
  }


preload(){
	this.load.image('zone3', 'assets/zone3.png'); //Background zone 1
	this.load.image('zone1start', 'assets/zone1start.png');
	this.load.image('zone1return', 'assets/zone1return.png');
}

create(){
	this.add.image(1140,540,'zone3');
	this.button = this.add.sprite(1450, 700, 'zone1return').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("map");}, this)	// Bouton pour retourner sur la map

	this.button = this.add.sprite(1500, 500, 'zone1start').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("jeu3");}, this)	// Bouton pour commencer le jeu 2
}


update(){
 
}


}