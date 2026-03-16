import Command from "./Command";

export default abstract class UndoableCommand implements Command {
  abstract execute(): void;
  abstract unexecute(): void;
}
