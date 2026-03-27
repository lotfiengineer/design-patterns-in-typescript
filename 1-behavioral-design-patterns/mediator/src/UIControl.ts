import DialogBox from "./DialogBox";

export default class UIControl {
  protected owner: DialogBox;

  constructor(owner: DialogBox) {
    this.owner = owner;
  }
}