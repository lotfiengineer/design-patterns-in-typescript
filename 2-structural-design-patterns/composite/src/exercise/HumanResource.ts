import Member from "./Member";

export default class HumanResource implements Member {
  deploy(): void {
    console.log("Deploying a human resource");
  }
}
