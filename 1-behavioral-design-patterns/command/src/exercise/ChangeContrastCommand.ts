import AbstractUndoableCommand from "./AbstractUndoableCommand";
import History from "./History";
import UndoableCommand from "./UndoableCommand";
import VideoEditor from "./VideoEditor";

export default class ChangeContrastCommand extends AbstractUndoableCommand {
  private prevContrast: number;
  private contrast: number;

  constructor(videoEditor: VideoEditor, history: History, contrast: number) {
    super(videoEditor, history);
    this.contrast = contrast;
    this.prevContrast = videoEditor.getContrast();
  }

  protected doExecute(): void {
    this.videoEditor.setContrast(this.contrast);
  }

  undo(): void {
    this.videoEditor.setContrast(this.prevContrast);
  }
}
