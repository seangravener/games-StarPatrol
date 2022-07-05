import { Types, Scene, Input } from "phaser"
// import {StateMachine} from "javascript-state-machine"
import { BaseShipSprite } from "./BaseShip.sprite"

const MOVE_STATE = {
  init: "idling",
  transitions: [
    { name: "left", from: ["idling", "turning-right"], to: "turning-left" },
    { name: "right", from: ["idling", "turning-left"], to: "turning-right" },
  ],
}

const ANIM_STATE = {
  init: "idle",
  transitions: [
    {
      name: "idling",
      from: ["idling", "turning-right", "turning-left"],
      to: "idle",
    },
    { name: "left", from: ["idle", "turning-right"], to: "turning-left" },
    { name: "right", from: ["idle", "turning-left"], to: "turning-right" },
  ],
}

const getStarshipFrames = (scene: BaseShipSprite) =>
  scene.anims.generateFrameNames("heroship-atlas", {
    start: 1,
    end: 1,
    zeroPad: 2,
    prefix: "PlayerRed_Frame_",
    suffix: ".png",
  })

type FrameRange = { start: number; end: number }
const getHeroShipFrames = (scene: BaseShipSprite, { start, end }: FrameRange) =>
  scene.anims.generateFrameNames("heroship-atlas", {
    start,
    end,
    zeroPad: 2,
    prefix: "PlayerRed_Frame_",
    suffix: ".png",
  })

export class HeroShip extends BaseShipSprite {
  cursorKeys: Types.Input.Keyboard.CursorKeys
  inputKeys: { didPressJump: boolean } = { didPressJump: false }
  animPredicates: { [key: string]: ({}: any) => {} }
  movePredicates: { [key: string]: ({}: any) => {} }
  // animState: StateMachine
  // moveState: StateMachine

  constructor(scene: Scene, x: number, y: number) {
    super({ scene, x, y, texture: "heroship:idle" })

    this.initKeyboard()
    this.initPhysics()
    this.initSprite()
  }

  preUpdate(time: number, delta: number): void {
    super.preUpdate(time, delta)
    this.inputKeys.didPressJump = Input.Keyboard.JustDown(this.cursorKeys.up)

    const speed = 200

    if (this.cursorKeys.left.isDown) {
      // this.body.setAccelerationX(-1000);
      this.body.setVelocity(-speed, 0)
      this.anims.play("turning", !this.inputKeys.didPressJump)
    } else if (this.cursorKeys.right.isDown) {
      this.body.setVelocity(speed, 0)
      // this.body.setAccelerationX(1000);
      this.setFlipX(false)
      this.anims.play("turning", !this.inputKeys.didPressJump)
    } else if (this.cursorKeys.up.isDown) {
      this.body.setVelocity(0, -speed)
      // this.anims.play("idle")
    } else if (this.cursorKeys.down.isDown) {
      this.body.setVelocity(0, speed)
      // this.anims.play("idle")
    } else {
      this.body.setVelocity(0, 0)
      // const key = this.anims.currentAnim.key
      // const parts = key.split("-")
      // const direction = parts[0]
      this.anims.play(`heroship:idle`)
    }
  }

  create() {}

  private initKeyboard() {
    this.cursorKeys = this.scene.input.keyboard.createCursorKeys()
  }

  private initSprite() {
    this.anims.create({
      key: "heroship:idle",
      frames: getHeroShipFrames(this, { start: 1, end: 1 }),
      // frameRate: 8,
      // repeat: 3,
    })

    this.anims.create({
      key: "turning",
      frames: getHeroShipFrames(this, { start: 1, end: 3 }),
      frameRate: 8,
      repeat: 0,
    })

    this.anims.create({
      key: "turning-right",
      frames: getHeroShipFrames(this, { start: 1, end: 3 }),
      frameRate: 8,
      repeat: 0,
    })

    // this.setScale(1.5)
  }

  private initPhysics() {
    this.scene.physics.world.enable(this)
    this.body.setVelocity(100, 200)
    this.body.setCollideWorldBounds(true)
  }

  setupMovement() {
    const MOVE_METHODS = {
      onJump: () => this.body.setVelocityY(-400),
      onFlip: () => this.body.setVelocityY(-300),
      onEnterState: (lifecycle: any) =>
        console.log("moveState: ", lifecycle.to),
    }

    const MOVE_PREDICATES = {
      // jump: () => this.inputKeys.didPressJump,
      // flip: () => this.inputKeys.didPressJump,
      fall: () => !this.body.onFloor(),
      touchdown: () => this.body.onFloor(),
    }

    this.body.setMaxVelocity(250, 400)
    this.body.setDragX(750)

    this.movePredicates = MOVE_PREDICATES
    // this.moveState = new StateMachine({ ...MOVE_STATE, methods: MOVE_METHODS })
  }

  setupAnimations() {
    const ANIM_PREDICATES = {
      idle: () => this.body.onFloor() && this.body.velocity.x === 0,
      run: () =>
        this.body.onFloor() &&
        Math.sign(this.body.velocity.x) === (this.flipX ? -1 : 1),
      pivot: () =>
        this.body.onFloor() &&
        Math.sign(this.body.velocity.x) === (this.flipX ? 1 : -1),
      jump: () => this.body.velocity.y < 0,
      fall: () => this.body.velocity.y > 0,
    }

    const ANIM_METHODS = {
      onEnterState: (lifecycle: any) => {
        this.anims.play(`${lifecycle.to}`)
        console.log("animState: ", `${lifecycle.to}`)
      },
    }

    this.animPredicates = ANIM_PREDICATES
    // this.animState = new StateMachine({ ...ANIM_STATE, methods: ANIM_METHODS })
  }
}
