import { Scene } from "phaser"
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

// load assets
// display text or graphic loading animation
// load main scene when assets finished

// use parallax starfield backgrounds
// move in all directions

export class LoadScene extends Scene {
  constructor() {
    super({ key: "LoadScene" })
  }

  preload() {
    this.load.image("bg:bottom", BGBottom)
    this.load.image("bg:top", BGTop)

    this.load.atlas("starship", starship, starshipMap)
    this.load.atlas("platform", platform, platformMap)
    this.load.atlas("phaser", phaser, phaserMap)

    this.createProgressBar()
  }

  private createProgressBar() {
    const { progressBar, percentText, loadingText } = makeProgressBar(this)

    this.load.on("progress", function (value: number) {
      console.log(value)
      progressBar.clear()
      progressBar.fillStyle(0xffffff, 1)
      progressBar.fillRect(250, 280, 300 * value, 30)

      percentText.setText(value * 100 + "%")
    })

    this.load.on("complete", () => {
      // assetText.destroy();
      this.time.addEvent({
        delay: 1000,
        loop: false,
        callback: () => {
          progressBar.destroy()
          // progressBox.destroy()
          loadingText.destroy()
          percentText.destroy()

          this.scene.start("TitleScene")
        },
      })
    })
  }

  create() {
    // create bg sprite
    // this.add.sprite(20, 20, "bg:1")
    // this.add.sprite(200, 200, "player")

    this.anims.generateFrameNames("PlayerGreen_Frame_01.png", {
      start: 0,
      end: 5,
      zeroPad: 3,
      prefix: "string prefix",
      suffix: ".png",
    })
  }
}
