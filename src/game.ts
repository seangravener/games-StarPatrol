import "reflect-metadata"
import { Container, Service } from "typedi"

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

@Service()
class ExampleInjectedService {
  printMessage() {
    console.log("hello world!")
  }
}

@Service()
class ExampleService {
  constructor(public injectedServce: ExampleInjectedService) {}
}

const serviceInstance = Container.get(ExampleService)
serviceInstance.injectedServce.printMessage()
