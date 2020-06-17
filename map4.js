class map4 extends Phaser.Scene {
  constructor(){
    super("map4")
  }


  init(data){
  }

preload(){
	this.load.image('zone4', 'assets/zone4.png'); //Background zone 1
	this.load.image('zone3return', 'assets/zone3return.png');
}

create(){
	this.add.image(1140,540,'zone4');
	this.button = this.add.sprite(1140, 500, 'zone3return').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("map");}, this)
}

update(){
 
}


}
