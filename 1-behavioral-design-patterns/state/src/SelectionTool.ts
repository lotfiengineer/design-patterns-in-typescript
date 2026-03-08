import Tool from "./Tool";

export default class SelectionTool extends Tool {
  public mouseDown(): void {
    console.log("Selection icon");
  }

  public mouseUp(): void {
    console.log("Draw a dashed rectangle");
  }
}
