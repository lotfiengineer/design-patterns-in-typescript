
import Tool from "./Tool";

export default class Canvas {
  private currentTool!: Tool;

  public mouseDown = (): void => {
    this.currentTool.mouseDown();
  };

  public mouseUp = (): void => {
    this.currentTool.mouseUp();
  };

  public getCurrentTool(): Tool {
    return this.currentTool;
  }
  public setCurrentTool(value: Tool) {
    this.currentTool = value;
  }
}

