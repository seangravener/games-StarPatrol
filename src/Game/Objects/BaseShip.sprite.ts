import { GameObjects, Physics, Scene } from "phaser"
import { SpriteDefinition } from "../Interfaces/sprite.interface"

export class BaseShipSprite extends GameObjects.Sprite {
  body: Physics.Arcade.Body

  constructor({ scene, x, y, texture, frame }: SpriteDefinition) {
    super(scene, x, y, texture, frame)
    
    scene.add.existing(this);
    scene.physics.add.existing(this);
  }
}
