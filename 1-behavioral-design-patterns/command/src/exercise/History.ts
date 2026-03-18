import Command from "./Command";
import UndoableCommand from "./UndoableCommand";

export default class History {
  private commands: UndoableCommand[] = [];

  push(command: UndoableCommand): void {
    this.commands.push(command);
  }

  pop(): UndoableCommand | undefined {
    return this.commands.pop();
  }

  size(): number {
    return this.commands.length;
  }
}
