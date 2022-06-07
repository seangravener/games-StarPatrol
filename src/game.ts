import "reflect-metadata"
import { Container, Service } from "typedi"

import GameService from "./services/game.service"
import "../styles/style.css"

@Service()
export class StarPortal {
  constructor(public service: GameService) {}

  static load() {
    return Container.get(StarPortal)
  }
}

window.addEventListener("load", () => {
  StarPortal.load()
})