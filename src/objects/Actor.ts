import { GameObjects, Physics } from 'phaser'
import { SpriteDefinition } from '../interfaces/sprite.interface'

export class Actor extends GameObjects.Sprite {
  body: Physics.Arcade.Body

  constructor(definition: SpriteDefinition) {
    super(
      definition.scene,
      definition.x,
      definition.y,
      definition.texture,
      definition.frame
    )

    this.initSprite()
    this.initPhysics()
    this.scene.add.existing(this)
  }

  private initSprite() {
    this.setScale(0.5)
  }

  private initPhysics() {
    // this.scene.physics.world.enable(this)
    // this.body.setVelocity(100, 200)
    // this.body.setBounce(1, 1)
    // this.body.setCollideWorldBounds(true);
  }
}
