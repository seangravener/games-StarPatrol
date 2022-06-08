import { Scene } from "phaser"
import { Hero } from "../objects/actor.hero"
import { lightParticle, redHatHero } from "../../static/images"

export class MainScene extends Scene {
  private hero: Hero

  constructor() {
    super({ key: "MainScene" })
  }

  preload(): void {
    this.load.image("redHatHero", redHatHero)
    this.load.image("lightParticle", lightParticle)
  }

  create(): void {
    const particles = this.add.particles("lightParticle")

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 0.5, end: 0 },
      blendMode: "ADD",
    })

    this.hero = new Hero({
      scene: this,
      x: 400,
      y: 300,
      texture: "redHatHero",
    })

    emitter.startFollow(this.hero)
  }
}
