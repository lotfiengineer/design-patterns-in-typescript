import Command from "./fx/Command";

export default class ResizeCommand implements Command {
  execute(): void {
    console.log('Resize')
  }

}