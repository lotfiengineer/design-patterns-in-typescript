import UIControl from "./UIControl";

export default class ListBox extends UIControl {
  private selection?: string;

  setSelection(selection?: string) {
    this.selection = selection;
    this.owner.changed(this);
  }

  getSelection() {
    return this.selection;
  }
}
