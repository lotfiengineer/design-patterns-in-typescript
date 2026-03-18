import AbstractUndoableCommand from "./AbstractUndoableCommand";
import History from "./History";
import UndoableCommand from "./UndoableCommand";
import VideoEditor from "./VideoEditor";

export default class SetTextCommand extends AbstractUndoableCommand {
  // private videoEditor: VideoEditor;
  // private history: History;
  private text: string;

  constructor(videoEditor: VideoEditor, history: History, text: string) {
    super(videoEditor, history);
    this.text = text
  }

  protected doExecute(): void {
    this.videoEditor.setText(this.text)
  }

  undo(): void {
    this.videoEditor.removeText();
  }
}
