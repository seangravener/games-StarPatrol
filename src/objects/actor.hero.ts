import { SpriteDefinition } from "../interfaces/sprite.interface"
import { Actor } from "./actor"

export class Hero extends Actor {
  constructor(definition: SpriteDefinition) {
    super(definition)

    this.initSprite()
    this.initPhysics()
    this.scene.add.existing(this)
  }

  private initSprite() {
    this.setScale(0.5)
  }

  private initPhysics() {
    this.scene.physics.world.enable(this)
    this.body.setVelocity(100, 200)
    this.body.setBounce(1, 1)
    this.body.setCollideWorldBounds(true)
  }
}
