import Button from "./Button";
import ListBox from "./ListBox";
import EventHandler from "./Observer";
import TextBox from "./TextBox";
import UIControl from "./UIControl";

export default class ArticlesDialogBox {
  private articlesListBox = new ListBox();
  private titleTextBox = new TextBox();
  private saveButton = new Button();

  constructor() {
    this.articlesListBox.addEventHandler(
      new (class implements EventHandler {
        private callback: VoidFunction;

        constructor(callback: VoidFunction) {
          this.callback = callback;
        }

        handle(): void {
          this.callback();
        }
      })(this.articleSelected),
    );

    this.titleTextBox.addEventHandler(
      new (class implements EventHandler {
        private callback: VoidFunction;

        constructor(callback: VoidFunction) {
          this.callback = callback;
        }

        handle(): void {
          this.callback();
        }
      })(this.titleChanged),
    );
  }

  simulateUserInteraction() {
    this.articlesListBox.setSelection("Article 1");
    this.titleTextBox.setContent("");
    this.titleTextBox.setContent("Article 2");
    console.log("TextBox: " + this.titleTextBox.getContent());
    console.log("Button: " + this.saveButton.getIsEnabled());
  }

  private titleChanged = () => {
    const content = this.titleTextBox.getContent();
    const isEmpty = content === "" || content === undefined || content === null;
    this.saveButton.setEnabled(!isEmpty);
  };

  private articleSelected = () => {
    this.titleTextBox.setContent(this.articlesListBox.getSelection());
    this.saveButton.setEnabled(true);
  };
}
