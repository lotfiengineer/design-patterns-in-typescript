import EventHandler from "./EventHandler";
import Button from "./ui/Button";
import CheckBox from "./ui/CheckBox";
import TextBox from "./ui/TextBox";

export default class SignUpDialogBox {
  private username = new TextBox();
  private password = new TextBox();
  private checkBox = new CheckBox();
  private signUpButton = new Button();

  simulateUserInteraction() {
    this.username.setContent("Mohammad");
    this.password.setContent("123");
    this.checkBox.setChecked(true);

    console.log(
      this.username.getContent(),
      this.password.getContent(),
      this.checkBox.getIsChecked(),
    );

    console.log("SignUpButton: " + this.signUpButton.getIsEnabled());
  }

  constructor() {
    this.username.addEventHandler(
      new (class implements EventHandler {
        private eventHandler: VoidFunction;
        constructor(eventHandler: VoidFunction) {
          this.eventHandler = eventHandler;
        }

        handle(): void {
          this.eventHandler();
        }
      })(this.isFormFilled),
    );

    this.password.addEventHandler(
      new (class implements EventHandler {
        private eventHandler: VoidFunction;
        constructor(eventHandler: VoidFunction) {
          this.eventHandler = eventHandler;
        }

        handle(): void {
          this.eventHandler();
        }
      })(this.isFormFilled),
    );

    this.checkBox.addEventHandler(
      new (class implements EventHandler {
        private eventHandler: VoidFunction;
        constructor(eventHandler: VoidFunction) {
          this.eventHandler = eventHandler;
        }

        handle(): void {
          this.eventHandler();
        }
      })(this.isFormFilled),
    );
  }

  isFormFilled = () => {
    const isUsernameFilled = this.username.isFull();
    const isPasswordFilled = this.password.isFull();
    const isCheckBoxChecked = this.checkBox.getIsChecked();

    const isButtonEnabled =
      isUsernameFilled && isPasswordFilled && isCheckBoxChecked;

    this.signUpButton.setEnabled(isButtonEnabled);
  };
}
