import { Scene } from "phaser"
import { lightParticle, redHatHero } from "../../static/images"

export class TitleScene extends Scene {
  constructor() {
    super({ key: "TitleScene" })
  }

  preload() {
    this.load.image("bg:1", lightParticle)
    this.load.image("player", redHatHero)
  }

  create() {
    // create bg sprite
    // this.add.sprite(20, 20, "bg:1")
    // this.add.sprite(200, 200, "player")

    const loadingText = this.make
      .text({
        x: this.cameras.main.width / 2,
        y: this.cameras.main.height / 2 - 50,
        text: "Title Scene!",
        style: {
          font: "40px monospace",
          color: "#ffffff",
        },
      })
      .setOrigin(0.5, 0.5)
  }
}
