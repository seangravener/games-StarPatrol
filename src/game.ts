import "reflect-metadata"
import { Container, Service } from "typedi"

import GameService from "./services/game.service"
import "../styles/style.css"

@Service()
export class StarPortal {
  constructor(public game: GameService) {
    console.log('DI??', this.game)
  }

  static load() {
    return Container.get(StarPortal)
  }
}

window.addEventListener("load", () => {
  const starportal = StarPortal.load()
  console.log(starportal.game instanceof GameService);
  console.log(starportal);
})