import UIControl from "./UIControl";

export default abstract class DialogBox {
  abstract changed(control: UIControl): void;
}
