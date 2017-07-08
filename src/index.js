import 'pixi'
import 'p2'
import Phaser from 'phaser'

import Intro from './states/Intro'

class Game extends Phaser.Game {
  constructor () {
    super(500, 500, Phaser.CANVAS, 'auto', null)
    this.state.add('Intro', Intro, false)
    this.state.start('Intro')
  }
}

window.game = new Game()
