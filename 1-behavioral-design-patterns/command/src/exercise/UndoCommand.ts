import Command from "./Command";
import History from "./History";

export default class UndoCommand implements Command {
  private history: History;

  constructor(history: History) {
    this.history = history;
  }

  execute(): void {
    if (this.history.size() > 0) {
      const command = this.history.pop();
      command?.undo();
    }
  }
}
