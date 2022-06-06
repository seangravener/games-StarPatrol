import { Game } from "phaser"

let _instance: Game = undefined

export default class GameService {
  get game(): Game {
    return _instance
  }

  constructor(instance: Game) {
    _instance = instance
  }

  static load() {
    return _instance
  }
}
