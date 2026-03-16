import Command from "./Command";
import History from "./History";

export default class UndoCommand implements Command {
  //* Reference to history object
  private history: History;

  constructor(history: History) {
    this.history = history;
  }

  execute(): void {
    if (this.history.size() > 0) this.history.pop().unexecute();
  }
}
