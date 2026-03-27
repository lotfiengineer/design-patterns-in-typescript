import UIControl from "./UIControl";

export default class TextBox extends UIControl {
  private content?: string;

  setContent(content?: string) {
    this.content = content;
    this.owner.changed(this);
  }

  getContent() {
    return this.content;
  }
}
