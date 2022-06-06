import { Scene } from "phaser"
import { lightParticle, redHatHero } from "../../static/images"

// load assets
// display text or graphic loading animation
// load main scene when assets finished

// use parallax starfield backgrounds
// move in all directions

export class BootScene extends Scene {
  constructor() {
    super({ key: "BootScene" })
  }

  preload() {
    this.load.image("bg:1", lightParticle)
    this.load.image("player", redHatHero)

    const progressBar = this.add.graphics()
    const progressBox = this.add.graphics()
    progressBox.fillStyle(0x222222, 0.8)
    progressBox.fillRect(240, 270, 320, 50)

    const width = this.cameras.main.width
    const height = this.cameras.main.height
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: "Loading...",
      style: {
        font: "20px monospace",
        color: "#ffffff",
      },
    })
    loadingText.setOrigin(0.5, 0.5)

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: "0%",
      style: {
        font: "18px monospace",
        // fill: '#ffffff'
      },
    })
    percentText.setOrigin(0.5, 0.5)

    this.load.on("progress", function (value: number) {
      console.log(value)
      progressBar.clear()
      progressBar.fillStyle(0xffffff, 1)
      progressBar.fillRect(250, 280, 300 * value, 30)

      percentText.setText(value * 100 + "%")
    })

    this.load.on("complete", () => {
      // progressBar.destroy()
      // progressBox.destroy()
      // loadingText.destroy()
      // percentText.destroy()
      // assetText.destroy();

      this.time.addEvent({
        delay: 3000,
        loop: false,
        callback: () => {
          this.scene.start("TitleScene")
        },
      })
    })
  }

  create() {
    // create bg sprite
    // this.add.sprite(20, 20, "bg:1")
    // this.add.sprite(200, 200, "player")
  }
}
