import { Scene } from "phaser"
import { PlayerShip } from "../Objects/HeroShip.sprite"
import { lightParticle, redHatHero } from "../../assets/images"

export class MainScene extends Scene {
  private hero: PlayerShip

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

    // this.hero = new HeroShip({
    //   scene: this,
    //   x: 400,
    //   y: 300,
    //   texture: "redHatHero",
    // })

    emitter.startFollow(this.hero)
  }
}
