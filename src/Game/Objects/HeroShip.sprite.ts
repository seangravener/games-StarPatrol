import { Types, Scene } from "phaser"
import { SpriteDefinition } from "../Interfaces/sprite.interface"
import { BaseShipSprite } from "./BaseShip.sprite"

const getStarshipFrames = (scene: Scene) =>
  scene.anims.generateFrameNames("heroship:idle")

export class PlayerShip extends BaseShipSprite {
  constructor(scene: Scene, x: number, y: number) {
    super({ scene, x, y, texture: "starship" })
    
    this.initPhysics()
    // this.initSprite()
    this.scene.add.existing(this)
  }

  create() {
    // this.anims.create({
    //   key: "heroship:idle",
    //   frames: getStarshipFrames(this.scene),
    // })
  }

  private initSprite() {
    // this.setScale(0.5)
  }

  private initPhysics() {
    this.scene.physics.world.enable(this)
    this.body.setVelocity(100, 200)
    this.body.setBounce(1, 1)
    this.body.setCollideWorldBounds(true)
  }
}
