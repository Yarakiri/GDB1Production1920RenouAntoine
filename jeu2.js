class jeu2 extends Phaser.Scene {
  constructor(){
    super("jeu2")
}


init(data){
  }



preload(){
	this.load.image('jeu2', 'assets/jeu2.png'); //Background zone 1
	this.load.image('gagne', 'assets/gagne.png');
	this.load.image('perdu', 'assets/perdu.png');
}

create(){

	this.time.addEvent({
        delay: 10000,
        callback: () => {
             this.scene.start("map"); //Ton événement au bout du temps "delay: 9000"
        },
    })
	this.add.image(1140,540,'jeu2');

	var perdu = this.add.image(1140,900,'perdu');
	var gagne = this.add.image(1140,900,'gagne');
	
	perdu.visible = false;
	gagne.visible = false;







	
}

update(){
 
}


}