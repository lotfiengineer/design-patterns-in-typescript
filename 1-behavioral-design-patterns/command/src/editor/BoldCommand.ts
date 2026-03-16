import HtmlDocument from "./HtmlDocument";
import UndoableCommand from "./UndoableCommand";
import History from "./History";

export default class BoldCommand implements UndoableCommand {
  private prevContent: string = '';
  private document: HtmlDocument;
  private history: History;

  constructor(document: HtmlDocument, history: History) {
    this.document = document;
    this.history = history;
  }

  execute(): void {
    this.prevContent = this.document.getContent();
    this.document.makeBold();
    this.history.push(this);
  }

  unexecute(): void {
    this.document.setContent(this.prevContent);
  }
}
