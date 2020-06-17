var config = {
	type: Phaser.AUTO,
	width: 2280,
	height: 1080,
physics: {
        default: 'arcade',
        matter: {
					debug: true,
					gravity: { y: 0 },
				}
    },

scene: [menu, map, map1, jeu1, map2, jeu2, map3, jeu3, map4, map5, map6] //Toutes les scènes

};

this.game = new Phaser.Game(config);