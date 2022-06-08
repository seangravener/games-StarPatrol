import { Container, Service } from "typedi"
import { Game } from "phaser"
import ConfigService from "./config.service"
import { GameConfig } from "../config"

@Service()
export default class GameService extends Game {
  constructor(public service: ConfigService) {
    super(GameConfig)
  }

  // static load() {
  //   return Container.get(GameService)
  // }
}

@Service()
export class SampleService {
  feature: 'feature1'

  constructor() {
    // super(service.config)
  }

  // static load() {
  //   return Container.get(GameService)
  // }
}
