var config = {
	type: Phaser.AUTO,
	width: 2280,
	height: 1080,
physics: {
        default: 'matter',
        matter: {
					enableSleeping: true,
					debug: true,
					gravity: { y: 0 },
				}
    },

scene: [menu, map, map1, jeu1, map2, jeu2, map3, jeu3]

};

this.game = new Phaser.Game(config);