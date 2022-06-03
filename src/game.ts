import { Types, Game } from "phaser"
import { GameConfig } from "./config"

export class GameMain extends Game {
  constructor(c: Types.Core.GameConfig) {
    super(c)
  }
}

window.addEventListener("load", () => {
  new Game(GameConfig)
})
