import Command from "./fx/Command";

export default class CompositeCommand implements Command {
  private commands: Command[] = [];

  addCommand(command: Command): void {
    this.commands.push(command);
  }

  execute(): void {
    for (let command of this.commands) {
      command.execute();
    }
  }

}