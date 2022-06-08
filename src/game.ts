import { Types, Game } from "phaser"
import { GameConfig } from "./config"

import "../styles/style.css"
import GameService from "./services/game.service"

export class StarPortal extends Game {
  constructor(config: Types.Core.GameConfig = GameConfig) {
    super(config)
  }

  static start() {
    return new GameService(new StarPortal()).game
  }
}

window.addEventListener("load", () => {
  const game = StarPortal.start()
  console.log(game);
})
