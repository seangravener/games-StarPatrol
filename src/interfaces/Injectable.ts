import { ServiceContainer } from "../services/injector";
// The parent class of classes that can make use of automatic DI
// Does two things:
//   1. Specify the services we want access to, and 
//   2. Provide a mechanism to access them
export default class Injectable {
  static services: any[] = []
  static __inject(container: ServiceContainer) {
    this.services.forEach(serviceName => {
      console.log(serviceName, '!!serve name!!');
      // this.prototype[serviceName] = container.getService(serviceName)
    }
  }
}