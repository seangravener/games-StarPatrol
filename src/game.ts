import { Types, Game } from "phaser"
import { GameConfig } from "./config"

import "../styles/style.css"
import GameService from "./services/game.service"

export class StarPortal extends Game {
  constructor(config: Types.Core.GameConfig) {
    super(config)
  }

  static load() {
    // bleh. favor DI? Singleton?
    new GameService(new StarPortal(GameConfig))
  }
}

window.addEventListener("load", () => {
  StarPortal.load()
})
