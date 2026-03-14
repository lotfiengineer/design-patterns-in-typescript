import Command from "./fx/Command";

export default class BlackAndWhiteCommand implements Command {
  execute(): void {
    console.log("Black and white");
  }
}
