import Phaser, { State } from 'phaser'
import Player from '../sprites/Player'

export default class Intro extends State {
  preload() {
    this.load.spritesheet('player', './assets/images/player.png', 32, 48)
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    this.player = new Player({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: 'player'
    })

    this.game.add.existing(this.player)
  }

  update() {
    //
  }
}
