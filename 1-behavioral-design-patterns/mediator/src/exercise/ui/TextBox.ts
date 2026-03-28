import UIControl from "./UIControl";

export default class TextBox extends UIControl {
  private content?: string;

  getContent() {
    return this.content;
  }

  setContent(content?: string) {
    this.content = content;
    this.notifyEventHandlers();
  }

  isFull() {
    return (
      this.content !== "" && this.content !== null && this.content !== undefined
    );
  }

  isEmpty() {
    return (
      this.content === "" || this.content === null || this.content === undefined
    );
  }
}
