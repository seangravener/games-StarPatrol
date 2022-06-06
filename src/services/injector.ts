import GameService from "./game.service"
import Injectable from "../interfaces/Injectable"

//Because we want to reuse instances as much as possible, we need a container to create and manage those instances for us. This container should: contain a mapping of service names to service classes, instantiate requested services if they don’t exist yet, and return these instances on request. Let’s try one:
export class ServiceContainer {
  definitions: any = {}
  instances: any = {}

  constructor() {
    this.definitions = { game: GameService }
  }

  getService(name: string, deps: any = undefined) {
    const service = this.instances[name]
    this.instances[name] = service || new this.definitions[name]()

    return this.instances[name]
  }
}

class Injector {
  container = new ServiceContainer()

  constructor() {}

  // Injects the dependencies into an uninstantiated class
  make(Class: Injectable) {
    return Class.__inject(this.container)
  }
}

class Player extends Injectable {
  static services = ["logging"]
  hello() {
    console.log("hello world from player", this)
  }
}
