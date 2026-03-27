import Button from "./Button";
import DialogBox from "./DialogBox";
import ListBox from "./ListBox";
import TextBox from "./TextBox";
import UIControl from "./UIControl";

export default class ArticlesDialogBox extends DialogBox {
  private articlesListBox = new ListBox(this);
  private titleTextBox = new TextBox(this);
  private saveButton = new Button(this);

  simulateUserInteraction() {
    this.articlesListBox.setSelection("Article 1");
    this.titleTextBox.setContent("")
    this.titleTextBox.setContent("Article 2")
    console.log("TextBox: " + this.titleTextBox.getContent());
    console.log("Button: " + this.saveButton.getIsEnabled());
  }

  //* We implement all the interaction between the objects
  //* inside the changed method.
  changed(control: UIControl): void {
    if (control === this.articlesListBox) this.articleSelected();
    else if (control === this.titleTextBox) this.titleChanged();
    else if (control === this.saveButton) this.editArticle();
  }

  private editArticle() {
    // Save to database
  }

  private titleChanged() {
    const content = this.titleTextBox.getContent();
    const isEmpty = content === "" || content === undefined || content === null;
    this.saveButton.setEnabled(!isEmpty);
  }

  private articleSelected() {
    this.titleTextBox.setContent(this.articlesListBox.getSelection());
    this.saveButton.setEnabled(true);
  }
}
