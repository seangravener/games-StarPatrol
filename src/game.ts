import { Types, Game } from "phaser"
import { GameConfig } from "./config"

import "../styles/style.css"

export class StarPortal extends Game {
  constructor(config: Types.Core.GameConfig) {
    super(config)
  }

  static load() {
    return new Game(GameConfig)
  }
}

window.addEventListener("load", () => {
  StarPortal.load()
})
