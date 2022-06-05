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
  }

  create() {
    // create bg sprite
    this.add.sprite(200, 200, "bg:1")
    this.add.sprite(0, 0, "player")
  }
}
