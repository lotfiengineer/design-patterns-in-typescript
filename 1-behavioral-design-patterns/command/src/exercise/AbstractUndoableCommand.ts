import History from "./History";
import UndoableCommand from "./UndoableCommand";
import VideoEditor from "./VideoEditor";

export default abstract class AbstractUndoableCommand extends UndoableCommand {
  protected videoEditor: VideoEditor;
  protected history: History;

  constructor(videoEditor: VideoEditor, history: History) {
    super();
    this.history = history;
    this.videoEditor = videoEditor;
  }

  execute(): void {
    this.doExecute();

    this.history.push(this);
  }

  protected abstract doExecute(): void;
}
