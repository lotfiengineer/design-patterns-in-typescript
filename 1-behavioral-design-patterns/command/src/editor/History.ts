import UndoableCommand from "./UndoableCommand";

export default class History {
  private commands: UndoableCommand[] = [];

  push(command: UndoableCommand) {
    this.commands.push(command);
  }

  pop(): UndoableCommand {
    const last = this.commands.pop() as UndoableCommand;
    return last;
  }

  size(): number {
    return this.commands.length;
  }
}
