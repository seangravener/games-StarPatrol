import { GameObjects, Physics, Scene } from "phaser"
import { SpriteDefinition } from "../Interfaces/sprite.interface"

export class BaseShipSprite extends GameObjects.Sprite {
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
