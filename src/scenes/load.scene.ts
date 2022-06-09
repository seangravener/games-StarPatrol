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
import { makeProgressBar, updateProgressBar } from "../lib/helpers"

// load assets
// display text or graphic loading animation
// load main scene when assets finished

// use parallax starfield backgrounds
// move in all directions

export class LoadScene extends Scene {
  progress: {
    scene?: Scene
    progressBox?: GameObjects.Graphics
    progressBar?: GameObjects.Graphics
    percentText?: GameObjects.Text
    loadingText?: GameObjects.Text
  }

  constructor() {
    super({ key: "LoadScene" })
  }

  preload() {
    this.load.image("bg:bottom", BGBottom)
    this.load.image("bg:top", BGTop)

    this.load.atlas("starship", starship, starshipMap)
    this.load.atlas("platform", platform, platformMap)
    this.load.atlas("phaser", phaser, phaserMap)

    this.initProgressBar()
  }

  private initProgressBar() {
    this.progress = makeProgressBar(this)
    this.load.on("progress", updateProgressBar(this.progress))
    this.load.on("complete", this.handleLoadComplete.bind(this))
  }

  handleLoadComplete() {
    this.time.addEvent({
      delay: 1000,
      loop: false,
      callback: () => {
        this.destroyGraphics()
        this.startNextScene()
      },
    })
  }

  create() {
    this.anims.generateFrameNames("PlayerGreen_Frame_01.png", {
      start: 0,
      end: 5,
      zeroPad: 3,
      prefix: "string prefix",
      suffix: ".png",
    })
  }

  destroyGraphics() {
    const { progressBar, progressBox, loadingText, percentText } = this.progress

    for (let graphic of [progressBar, progressBox, loadingText, percentText]) {
      graphic.destroy()
    }
  }

  startNextScene() {
    this.scene.start("TitleScene")
  }
}
