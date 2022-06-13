import { Types, AUTO } from "phaser"
import { MainScene, LoadScene, TitleScene } from "./Scenes"

export const GameConfig: Types.Core.GameConfig = {
  title: "Star Portal",
  pixelArt: true,
  type: AUTO,
  url: "",
  version: "0.1",
  width: 800,
  height: 480,
  backgroundColor: 0x3a404d,
  parent: "game",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [LoadScene, TitleScene, MainScene],
}
