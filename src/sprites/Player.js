import Phaser, { Sprite } from 'phaser'

export default class Player extends Sprite {
  constructor({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.setUpPhysics()
    this.setUpAnimations()
    this.cursors = game.input.keyboard.createCursorKeys()
  }

  setUpPhysics() {
    this.game.physics.arcade.enable(this)
    this.body.bounce.y = 0.2
    this.body.gravity.y = 300
    this.body.collideWorldBounds = true
  }

  setUpAnimations() {
    this.animations.add('left', [0, 1, 2, 3], 10, true)
    this.animations.add('right', [5, 6, 7, 8], 10, true)
  }

  updateMovementOnX() {
    if (this.cursors.left.isDown) {
      this.body.velocity.x = -150
      this.animations.play('left')
    } else if (this.cursors.right.isDown) {
      this.body.velocity.x = 150
      this.animations.play('right')
    } else {
      this.body.velocity.x = 0
      this.frame = 4
    }
  }

  updateMovementOnY() {
    if (this.cursors.up.isDown && this.body.onFloor()) {
      this.body.velocity.y = -350
    }
  }

  update() {
    this.updateMovementOnX()
    this.updateMovementOnY()
  }
}
