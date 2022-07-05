import type { Game, Input, Types } from "phaser"
import { Scene, GameObjects } from "phaser"
import { HeroShip } from "../Objects/HeroShip.sprite"

// @todo 
const SCALE = 2
export type TileSpriteParams = [number, number, number, number, string]

export class TitleScene extends Scene {
  bgTop: GameObjects.TileSprite
  bgBottom: GameObjects.TileSprite
  canvas: HTMLCanvasElement
  cursorKeys: Types.Input.Keyboard.CursorKeys
  heroShip: HeroShip

  constructor() {
    super({ key: "TitleScene" })
  }

  init() {
    this.canvas = this.sys.game.canvas
    this.cursorKeys = this.input.keyboard.createCursorKeys()
  }

  create() {
    this.createBackground()
    this.createText()
    this.addHeroShip()
  }

  addHeroShip() {
    this.heroShip = new HeroShip(this, 0, 0)
    this.heroShip.play("heroship:idle")
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

    const bgBottomArgs: TileSpriteParams = [0, 0, width, height, "bg:bottom"]
    this.bgBottom = this.add.tileSprite(...bgBottomArgs).toggleFlipY()

    const bgTopArgs: TileSpriteParams = [0, 0, width, height, "bg:top"]
    this.bgTop = this.add.tileSprite(...bgTopArgs).toggleFlipY()
    this.bgTop.alpha = 0.5
  }
}
