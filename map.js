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
}

create(){
	this.add.image(1165,540,'map');
	this.button = this.add.image(950, 400, 'buttzone1').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("map1");}, this)

	this.button = this.add.image(100, 580, 'buttzone2').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("map2");}, this)

	this.button = this.add.image(970, 600, 'buttzone3').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("map3");}, this)
}

update(){
 
}

}