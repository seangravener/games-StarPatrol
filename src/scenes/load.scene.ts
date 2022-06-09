import { GameObjects, Scene } from "phaser"
import { BGBottom, BGTop, lightParticle } from "../../static/images"

import {
  starshipMap,
  starship,
  phaser,
  phaserMap,
  platform,
  platformMap,
} from "../../static/sprites"
import { makeProgressBar } from "../lib/helpers"

type Text = GameObjects.Text
type Graphics = GameObjects.Graphics

type updateBarParams = {
  scene?: Scene
  box?: Graphics
  bar?: Graphics
  text?: Text
  loadingText?: Text
}

export class LoadScene extends Scene {
  progress: updateBarParams

  constructor() {
    super({ key: "LoadScene" })
  }

  preload() {
    this.load.image("bg:bottom", BGBottom)
    this.load.image("bg:top", BGTop)

    this.load.atlas("heroship", starship, starshipMap)
    this.load.atlas("platform", platform, platformMap)
    this.load.atlas("phaser", phaser, phaserMap)

    this.initProgressBar()
  }

  private initProgressBar() {
    this.progress = makeProgressBar(this)
    this.load.on("progress", this.handleLoadProgress.bind(this))
    this.load.on("complete", this.handleLoadComplete.bind(this))
  }

  private handleLoadProgress(value: number) {
    const { bar, text } = this.progress

    text.setText(value * 100 + "%")
    bar
      .clear()
      .fillStyle(0xffffff, 1)
      .fillRect(250, 280, 300 * value, 30)
  }

  private handleLoadComplete() {
    this.time.addEvent({
      delay: 1000,
      loop: false,
      callback: () => {
        this.destroyGraphics()
        this.startNextScene()
      },
    })
  }

  create() {}

  destroyGraphics() {
    const { bar, box, loadingText, text } = this.progress

    for (let graphic of [bar, box, loadingText, text]) {
      graphic.destroy()
    }
  }

  startNextScene() {
    this.scene.start("TitleScene")
  }
}
