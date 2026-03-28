import EventHandler from "../EventHandler";

export default abstract class UIControl {
  private eventHandlers = new Array<EventHandler>();

  addEventHandler(eventHandler: EventHandler) {
    this.eventHandlers.push(eventHandler);
  }

  protected notifyEventHandlers() {
    this.eventHandlers.forEach((e) => e.handle());
  }
}
