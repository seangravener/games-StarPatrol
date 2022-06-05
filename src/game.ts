import { Types, Game } from "phaser"
import { GameConfig } from "./config"

// export class GameMain extends Game {
//   constructor(config: Types.Core.GameConfig) {
//     super(config)
//   }
// }

window.addEventListener("load", () => {
  new Game(GameConfig)
})
