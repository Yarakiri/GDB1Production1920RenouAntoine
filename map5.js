class map5 extends Phaser.Scene {
  constructor(){
    super("map5")
  }


  init(data){
  }

preload(){
	this.load.image('zone5', 'assets/zone5.png'); //Background zone 1
	this.load.image('zone3return', 'assets/zone3return.png');
}

create(){
	this.add.image(1140,540,'zone5');
	this.button = this.add.sprite(1650, 700, 'zone3return').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("map");}, this)

}

update(){
 
}


}
