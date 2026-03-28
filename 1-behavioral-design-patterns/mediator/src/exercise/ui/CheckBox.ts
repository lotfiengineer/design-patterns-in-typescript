import UIControl from "./UIControl";

export default class CheckBox extends UIControl {
  private isChecked = false;

  getIsChecked() {
    return this.isChecked;
  }

  setChecked(checked: boolean) {
    this.isChecked = checked;
    this.notifyEventHandlers();
  }
}
