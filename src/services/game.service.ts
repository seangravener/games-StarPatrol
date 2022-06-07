import { Container, Service } from "typedi"
import { Game } from "phaser"
import ConfigService from "./config.service"

@Service()
export default class GameService extends Game {
  constructor(public service: ConfigService) {
    super(service.config)
  }

  static load() {
    return Container.get(GameService)
  }
}
