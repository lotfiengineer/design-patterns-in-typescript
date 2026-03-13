import Command from "./Command";

export default class Button {
  private label: string = "";
  private command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  click(): void {
    this.command.execute();
  }

  getLabel(): string {
    return this.label;
  }

  setLabel(label: string): void {
    this.label = label;
  }
}
