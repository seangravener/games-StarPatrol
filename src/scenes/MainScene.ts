import { Inject, Service } from "typedi"
import { Scene } from "phaser"
import { Hero } from "../objects/Hero"
import { lightParticle, redHatHero } from "../../static/images"

@Service()
export class DemoClass {
  // @Inject()
  // public service: SampleService
  constructor() {}

  hello() {
    console.log("hello from demo class")
  }
}

export class MainScene extends Scene {
  private hero: Hero

  @Inject()
  public service: DemoClass

  constructor() {
    super({ key: "MainScene" })

    this.service.hello()
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
