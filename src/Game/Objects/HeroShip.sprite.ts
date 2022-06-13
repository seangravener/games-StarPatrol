import { Types, Scene } from "phaser"
import { SpriteDefinition } from "../Interfaces/sprite.interface"
import { BaseShipSprite } from "./BaseShip.sprite"

const getStarshipFrames = (scene: BaseShipSprite) =>
  scene.anims.generateFrameNames("heroship:idle", {
    start: 1,
    end: 1,
    zeroPad: 2,
    prefix: "PlayerRed_Frame_",
    suffix: ".png",
  })

export class HeroShip extends BaseShipSprite {
  constructor(scene: Scene, x: number, y: number) {
    super({ scene, x, y, texture: "heroship:idle" })

    this.initPhysics()
    this.initSprite()
    this.scene.add.existing(this)
  }

  create() {
    // this.anims.create({
    //   key: "heroship:idle",
    //   frames: getStarshipFrames(this.scene),
    // })
  }

  private initSprite() {
    this.anims.create({
      key: "heroship:idle",
      frames: getStarshipFrames(this),
      // frameRate: 8,
      // repeat: 3,
    })

    // this.setScale(1.5)
  }

  private initPhysics() {
    this.scene.physics.world.enable(this)
    this.body.setVelocity(100, 200)
    this.body.setCollideWorldBounds(true)
  }
}
