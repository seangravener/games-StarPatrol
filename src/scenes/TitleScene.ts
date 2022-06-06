import { Scene } from "phaser"
import { lightParticle, redHatHero, BG1, BG2 } from "../../static/images"

export class TitleScene extends Scene {
  constructor() {
    super({ key: "TitleScene" })
  }

  preload() {
    // this.load.image("bg:1", BG1)
    // this.load.image("bg:2", BG2)
    // this.load.image("player", redHatHero)
  }

  create() {
    // create bg sprite
    this.add.sprite(420, 120, "bg:1")
    this.add.sprite(20, 60, "bg:2")
    this.add.sprite(400, 500, "player")
    this.add.sprite(400, 500, "particle")

    this.make
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
