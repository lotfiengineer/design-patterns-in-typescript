import UIControl from "./UIControl";

export default class Button extends UIControl {
  private isEnabled?: boolean;

  setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
    this.notifyEventHandlers();
  }

  getIsEnabled() {
    return this.isEnabled;
  }
}
