var but1 = 0;
var but2 = 0;
var but3 = 0;
var total = 0;

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
	this.load.image('perdu', 'assets/perdu.png');
	this.load.image('gagne', 'assets/gagne.png');
}

create(){

 	this.time.addEvent({
            delay: 10000,
            callback: () => {
               this.scene.start("map");
            },
        })
	


	this.add.image(1140,580,'jeu3');
	var h1 = this.add.image(1020,490,'h1');
	var h2 = this.add.image(1025,455,'h2');
	var h3 = this.add.image(1025,460,'h3');	
	var m1 = this.add.image(1020,572,'m1');
	var m2 = this.add.image(1015,542,'m2');
	var b1 = this.add.image(1025,800,'b1');
	var b2 = this.add.image(1025,670,'b2');
	var b3 = this.add.image(1025,692,'b3');
	var perdu = this.add.image(1200,230,'perdu');
	var gagne = this.add.image(1200,230,'gagne');
	
	perdu.visible = false;
	gagne.visible = false;
	h1.setVisible(false);
	h2.setVisible(false);
	h3.setVisible(false);
	m1.setVisible(false);
	m2.setVisible(false);
	b1.setVisible(false);
	b2.setVisible(false);
	b3.setVisible(false);
	



	this.button = this.add.image(1450, 440, 'cut1').setInteractive();
	this.button.on('pointerdown', (pointer)=>{ 
    but1 = but1 + 1;
       
	
	if (but1 == 1){
		h1.visible = true;
	};
	if (but1 == 2){
		h2.visible = true;
	};
	if (but1 == 3){				
		h3.visible = true;
		total = total +1;
	};
	if (total == 3){			//condition de victoire
		gagne.visible = true;
		this.time.addEvent({
        delay: 3000,
        callback: () => {
            this.scene.start("map");
        },
    })
	}
	if (but1 == 4){				//condition de defaite
		perdu.visible = true;
		this.time.addEvent({
            delay: 3000,
           callback: () => {
               this.scene.start("map");
            },
        })
	
	};
	}); 


	this.button = this.add.image(1450, 565, 'cut2').setInteractive();
	this.button.on('pointerdown', (pointer)=>{ 
    but2 = but2 + 1;

    if (but2 == 1 ){
		m1.visible = true;
	};
	if (but2 == 2 ){
		m2.visible = true;
		total = total +1;
	};
	if (total == 3){			//condition de victoire
		gagne.visible = true;
		this.time.addEvent({
        delay: 3000,
        callback: () => {
            this.scene.start("map");
        },
    })
	};
	if (but2 == 3 ){			//condition de defaite
		perdu.visible = true;
		this.time.addEvent({
            delay: 3000,
            callback: () => {
               this.scene.start("map");
            },
        })
	};
	});

	this.button = this.add.image(1450, 730, 'cut3').setInteractive();
	this.button.on('pointerdown', (pointer)=>{ 
    but3 = but3 + 1;
	if (but3 == 1 ){
		b1.visible = true;
	};
	if (but3 == 2 ){
		b2.visible = true;
	};
	if (but3 == 3 ){
		b3.visible = true;
		total = total +1;
	};
	if (total == 3){			//condition de victoire
		gagne.visible = true;
		this.time.addEvent({
        delay: 3000,
        callback: () => {
            this.scene.start("map");
        },
    })
	}
	if (but3 == 4 ){			//condition de defaite
		perdu.visible = true;
		this.time.addEvent({
            delay: 3000,
           callback: () => {
               this.scene.start("map");
            },
        })
	};
	});
}
update(){}


}