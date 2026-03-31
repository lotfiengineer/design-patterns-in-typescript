import Handler from "./Handler";
import HttpRequest from "./HttpRequest";

export default class WebServer {
  //* This is a reference to the first handler in the chain.
  private handler: Handler;

  constructor(handler: Handler) {
    this.handler = handler;
  }

  handle(request: HttpRequest) {
    this.handler.handle(request);
  }
}
