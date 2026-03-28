import EventHandler from "./Observer";

export default abstract class UIControl {
  private eventHandlers: EventHandler[] = [];

  addEventHandler(observer: EventHandler) {
    this.eventHandlers.push(observer);
  }

  protected notifyEventHandlers() {
    for (const eventHandler of this.eventHandlers) eventHandler.handle();
  }
}
