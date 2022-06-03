import { Scene } from 'phaser'
import { Redhat } from '../objects/redhat'

import redHatHero from '../../static/images/redhat.png'
import redParticle from '../../static/images/red.png'

export class MainScene extends Scene {
  private Hero: Redhat

  constructor() {
    super({ key: 'MainScene' })
  }

  preload(): void {
    this.load.image('redhat', redHatHero)
    this.load.image('redParticle', redParticle)
  }

  create(): void {
    const particles = this.add.particles('redParticle')

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 0.5, end: 0 },
      blendMode: 'ADD',
    })

    this.Hero = new Redhat({
      scene: this,
      x: 400,
      y: 300,
      texture: 'redhat',
    })

    emitter.startFollow(this.Hero)
  }
}
