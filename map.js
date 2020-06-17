class map extends Phaser.Scene {
  constructor(){
    super("map")
  }


  init(data){
  }

preload(){
	this.load.image('map', 'assets/map.png'); //Background map
	this.load.image('buttzone1', 'assets/z1.png'); // image boutton : aller en zone 1
	this.load.image('buttzone2', 'assets/z2.png'); // image boutton : aller en zone 2
	this.load.image('buttzone3', 'assets/z3.png'); // image boutton : aller en zone 3
	this.load.image('buttzone4', 'assets/z4.png'); // image boutton : aller en zone 4
	this.load.image('buttzone5', 'assets/z5.png'); // image boutton : aller en zone 5
	this.load.image('buttzone6', 'assets/z6.png'); // image boutton : aller en zone 6
}

create(){
	this.add.image(1165,540,'map');
	this.button = this.add.image(950, 400, 'buttzone1').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("map1");}, this)  // Bouton pour zoom en zone 1

	this.button = this.add.image(100, 580, 'buttzone2').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("map2");}, this)	// Bouton pour zoom en zone 2

	this.button = this.add.image(970, 620, 'buttzone3').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("map3");}, this)	// Bouton pour zoom en zone 3

	this.button = this.add.image(600, 520, 'buttzone4').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("map4");}, this)	// Bouton pour zoom en zone 4

	this.button = this.add.image(270, 180, 'buttzone5').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("map5");}, this)	// Bouton pour zoom en zone 5

	this.button = this.add.image(1230, 520, 'buttzone6').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("map6");}, this)	// Bouton pour zoom en zone 6
}

update(){
 
}

}