import Handler from "./Handler";
import HttpRequest from "./HttpRequest";

export default class Logger extends Handler {
  protected doHandle(request: HttpRequest): boolean {
    console.log("Log");

    return false;
  }
}
