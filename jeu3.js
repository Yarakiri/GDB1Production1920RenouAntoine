	var objets;
	var h1;

class jeu3 extends Phaser.Scene {
  constructor(){
    super("jeu3")
}


init(data){

  }

preload(){
	this.load.image('jeu3', 'assets/jeu3.png'); //Background zone 1
	this.load.image('cut1', 'assets/butt-cut.png');
	this.load.image('cut2', 'assets/butt-cut.png');
	this.load.image('cut3', 'assets/butt-cut.png');
	this.load.image('h1', 'assets/h1.png');
	this.load.image('h2', 'assets/h2.png');
	this.load.image('h3', 'assets/h3.png');
	this.load.image('m1', 'assets/m1.png');
	this.load.image('m2', 'assets/m2.png');
	this.load.image('b1', 'assets/b1.png');
	this.load.image('b2', 'assets/b2.png');
	this.load.image('b3', 'assets/b3.png');
}

create(){

	objet = this.physics.add.staticGroup();


	this.add.image(1140,580,'jeu3');
	this.button = this.add.image(1450, 440, 'cut1').setInteractive();
	this.button = this.add.image(1450, 565, 'cut2').setInteractive();
	this.button = this.add.image(1450, 730, 'cut3').setInteractive();
	objets.create(1020,490,'h1');
	objets.create(1025,455,'h2');
	objets.create(1025,460,'h3');	
	objets.create(1020,572,'m1');
	objets.create(1015,542,'m2');
	objets.create(1025,800,'b1');
	objets.create(1025,670,'b2');
	objets.create(1025,692,'b3');
	//this.add.image(1025,455,'h2');
	//this.add.image(1025,460,'h3');
	//this.add.image(1020,572,'m1');
	//this.add.image(1015,542,'m2');
	//this.add.image(1025,800,'b1');
	//this.add.image(1025,670,'b2');
	//this.add.image(1025,692,'b3');
	
	h1.visible = false;
}

update(){
 
}


}