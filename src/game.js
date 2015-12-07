function Game() {
  console.log( "Making the Game" )
}

Game.prototype = {
  start: function() {
    this.game = new Phaser.Game( 800, 600, Phaser.AUTO, "", {
      preload: this.preload,
      create: this.create
    })
  },

  preload: function() {
    this.game.load.image( "logo", "assets/phaser.png" )
  },

  create: function() {
    var logo = this.game.add.sprite( this.game.world.centerX, this.game.world.centerY, "logo" )
    logo.anchor.setTo( 0.5, 0.5 )
  }
}

module.exports = Game
