class map2 extends Phaser.Scene {
  constructor(){
    super("map2")
  }


  init(data){
  }


preload(){
	this.load.image('zone2', 'assets/zone2.png'); //Background zone 2
	this.load.image('zone2start', 'assets/zone2start.png');
	this.load.image('zone2return', 'assets/zone2return.png');
}

create(){
	this.add.image(1140,540,'zone2');
	this.button = this.add.sprite(950, 700, 'zone2return').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("map");}, this)

	this.button = this.add.sprite(1000, 500, 'zone2start').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("jeu2");}, this)
}


update(){
 
}


}