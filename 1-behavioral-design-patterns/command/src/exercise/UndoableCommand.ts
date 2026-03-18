import Command from "./Command";

export default abstract class UndoableCommand extends Command {
  abstract undo(): void;
}
