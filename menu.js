
class menu extends Phaser.Scene {
  constructor(){
    super("menu")
  }


  init(data){
  }

preload(){
	this.load.image('main-menu', 'assets/menu.png');
	this.load.image('start', 'assets/start.png'); //Background du menu 
}

create(){

	
	this.add.image(1140,540,'main-menu');
	this.button = this.add.image(1140, 1000, 'start').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("map");}, this)

}

update(){
 
}


}