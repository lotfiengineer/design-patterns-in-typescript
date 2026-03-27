import UIControl from "./UIControl";

export default class Button extends UIControl {
  private isEnabled?: boolean;

  setEnabled(isEnabled: boolean) {
    this.isEnabled = isEnabled;
    this.owner.changed(this);
  }

  getIsEnabled() {
    return this.isEnabled;
  }
}
