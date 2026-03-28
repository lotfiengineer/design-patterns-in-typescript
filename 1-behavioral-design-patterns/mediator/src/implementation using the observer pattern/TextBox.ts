import UIControl from "./UIControl";

export default class TextBox extends UIControl {
  private content?: string;

  setContent(content?: string) {
    this.content = content;
    this.notifyEventHandlers();
  }

  getContent() {
    return this.content;
  }
}
