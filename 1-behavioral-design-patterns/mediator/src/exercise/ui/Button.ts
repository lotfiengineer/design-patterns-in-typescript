import UIControl from "./UIControl";

export default class Button extends UIControl {
  private isEnabled?: boolean;

  getIsEnabled() {
    return this.isEnabled;
  }

  setEnabled(checked?: boolean) {
    this.isEnabled = checked;
    this.notifyEventHandlers();
  }
}
