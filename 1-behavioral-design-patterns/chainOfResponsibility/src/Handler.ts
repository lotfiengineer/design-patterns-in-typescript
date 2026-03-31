import HttpRequest from "./HttpRequest";

export default abstract class Handler {
  private next: Handler | null;

  constructor(next: Handler | null) {
    this.next = next;
  }

  handle(request: HttpRequest) {
    if (this.doHandle(request)) return;

    if (this.next != null) this.next.handle(request);
  }

  protected abstract doHandle(request: HttpRequest): boolean;
}
