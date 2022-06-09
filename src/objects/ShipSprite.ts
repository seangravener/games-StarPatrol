import { GameObjects, Physics, Scene } from "phaser"
import { SpriteDefinition } from "../interfaces/sprite.interface"

export class PlayerSprite extends GameObjects.Sprite {
  body: Physics.Arcade.Body
  scene: Scene

  constructor(definition: SpriteDefinition) {
    super(
      definition.scene,
      definition.x,
      definition.y,
      definition.texture,
      definition.frame
    )

    this.scene = definition.scene
  }
}
