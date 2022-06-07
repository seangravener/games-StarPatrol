import Container, { Service } from "typedi"
import { GameConfig } from "../config"

@Service()
export default class ConfigService {
  get config() {
    return GameConfig
  }

  static load() {
    return Container.get(ConfigService)
  }
}
