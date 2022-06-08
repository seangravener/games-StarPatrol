import type { Game, Input, Types } from "phaser"
import { Scene, GameObjects } from "phaser"
import GameService from "../services/game.service"

const SCALE = 2
export type TileSpriteArgs = [number, number, number, number, string]

const getStarshipFrames = (scene: Scene) =>
  scene.anims.generateFrameNames("starship", {
    start: 0,
    end: 3,
    zeroPad: 2,
    prefix: "PlayerRed_Frame_",
    suffix: ".png",
  })

export class TitleScene extends Scene {
  game: Game
  canvas: HTMLCanvasElement
  bgTop: GameObjects.TileSprite
  bgBottom: GameObjects.TileSprite
  cursorKeys: Types.Input.Keyboard.CursorKeys

  constructor() {
    super({ key: "TitleScene" })
    this.game = GameService.load()
  }

  init() {
    this.canvas = this.sys.game.canvas
    this.cursorKeys = this.input.keyboard.createCursorKeys()
  }

  create() {
    this.createBackground()
    this.createText()

    this.anims.create({
      key: "idle",
      frames: getStarshipFrames(this),
      frameRate: 8,
      repeat: 2,
    })

    // const starship = this.add.sprite(100, 300, "starship")
    // this.add.image(100, 100, "startship");

    for (const frame of ["01", "02", "03"]) {
      this.make.image({
        x: 200 * parseInt(frame),
        y: 100 * parseInt(frame),
        key: "starship",
        frame: `PlayerRed_Frame_${frame}.png`,
        add: true,
      }).setOrigin(0)
    }

    // starship.play("idle")
  }

  update() {
    this.bgBottom.tilePositionY += 0.5
    this.bgTop.tilePositionY += 0.25
  }

  private createText() {
    const { width, height } = this.cameras.main
    const coords = { x: width / SCALE, y: (height / SCALE) * 0.33 }
    const style = { font: "40px monospace", color: "#ffffff" }

    this.make
      .text({ ...coords, style, text: "Star Portal" })
      .setOrigin(0.5, 0.5)
  }

  private createBackground() {
    const { width, height } = {
      width: this.scale.width * SCALE,
      height: this.scale.height * SCALE,
    }

    const bgBottomArgs: TileSpriteArgs = [0, 0, width, height, "bg:bottom"]
    this.bgBottom = this.add.tileSprite(...bgBottomArgs).toggleFlipY()

    const bgTopArgs: TileSpriteArgs = [0, 0, width, height, "bg:top"]
    this.bgTop = this.add.tileSprite(...bgTopArgs).toggleFlipY()
    this.bgTop.alpha = 0.5
  }
}
