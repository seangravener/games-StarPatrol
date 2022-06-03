import { GameObjects, Physics } from 'phaser'
import { SpriteDefinition } from '../interfaces/SpriteDefinition'

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
  }
}
