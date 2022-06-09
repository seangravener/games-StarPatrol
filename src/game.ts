import { Types, Game } from "phaser"
import { GameConfig } from "./config"

import "../styles/style.css"

let _instance: Game

class StarPortal extends Game {
  constructor(config: Types.Core.GameConfig = GameConfig) {
    super(config)
    
  }

  static load() {
    return _instance ? _instance : (_instance = new StarPortal())
  }
}

export { StarPortal }
export default StarPortal.load()

// move to main.js
window.addEventListener("load", () => {
  StarPortal.load()
})
