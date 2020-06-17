class map6 extends Phaser.Scene {
  constructor(){
    super("map6")
  }


  init(data){
  }

preload(){
	this.load.image('zone6', 'assets/zone6.png'); //Background zone 1
	this.load.image('zone1return', 'assets/zone1return.png');
}

create(){
	this.add.image(1140,540,'zone6');
	this.button = this.add.sprite(700, 500, 'zone1return').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("map");}, this)

}

update(){
 
}


}
