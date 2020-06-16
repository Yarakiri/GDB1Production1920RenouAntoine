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
}

create(){
	this.add.image(1175,540,'jeu1');
}

update(){
 
}


}