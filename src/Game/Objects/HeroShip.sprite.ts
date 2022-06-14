import { Types, Scene } from "phaser"
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
  cursorKeys: Types.Input.Keyboard.CursorKeys

  constructor(scene: Scene, x: number, y: number) {
    super({ scene, x, y, texture: "heroship:idle" })

    this.initPhysics()
    this.initSprite()
    this.initKeyboard()

    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
  }

  preUpdate(time: number, delta: number): void {
    super.preUpdate(time, delta)

    if (this.cursorKeys.left.isDown) {
      console.log("left key")
    }

    if (this.cursorKeys.right.isDown) {
      console.log("right key")
    }

    if (this.cursorKeys.up.isDown) {
      console.log("up key")
    }

    if (this.cursorKeys.down.isDown) {
      console.log("down key")
    }
  }

  create() {
    // this.anims.create({
    //   key: "heroship:idle",
    //   frames: getStarshipFrames(this.scene),
    // })
  }

  private initKeyboard() {
    this.cursorKeys = this.scene.input.keyboard.createCursorKeys()
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
