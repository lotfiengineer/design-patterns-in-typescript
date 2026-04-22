import Member from "./Member";

export default class Truck implements Member {
  deploy(): void {
    console.log("Deploying a truck");
  }
}
