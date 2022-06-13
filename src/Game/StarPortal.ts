import { Types, Game } from "phaser"
import { GameConfig } from "./GameConfig"

import "../assets/styles/style.css"

let _instance: Game

class StarPortal extends Game {
  constructor(config: Types.Core.GameConfig = GameConfig) {
    super(config)
  }

  static load() {
    return _instance ? _instance : (_instance = new StarPortal())
  }
}

export default StarPortal
export { StarPortal, GameConfig }
