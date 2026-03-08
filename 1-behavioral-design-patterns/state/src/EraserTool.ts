import Tool from "./Tool";

export default class EraserTool extends Tool {
  public mouseDown(): void {
    console.log("Eraser icon");
  }

  public mouseUp(): void {
    console.log("Erase something");
  }
}
