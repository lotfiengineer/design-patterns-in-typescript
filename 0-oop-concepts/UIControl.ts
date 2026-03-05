// Inheritance and Polymorphism

abstract class UIControl {
  // Inheritance:
  public enable() {
    console.log("Enable");
  }

  public abstract draw(): void;
}

class TextBox extends UIControl {
  public draw(): void {
    console.log("Drawing a TextBox");
  }
}

class CheckBox extends UIControl {
  public draw(): void {
    console.log("Drawing a CheckBox");
  }
}

const drawUIControl = (control: UIControl) => {
  control.draw();
};

// Polymorphism:
drawUIControl(new TextBox());
drawUIControl(new CheckBox());
