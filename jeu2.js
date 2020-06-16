class jeu2 extends Phaser.Scene {
  constructor(){
    super("jeu2")
}


init(data){
  }



preload(){
	this.load.image('jeu2', 'assets/jeu2.png'); //Background zone 1
}

create(){
	this.add.image(1140,540,'jeu2');
}

update(){
 
}


}