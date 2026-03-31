import Handler from "./Handler";
import HttpRequest from "./HttpRequest";

export default class Compressor extends Handler {
  protected doHandle(request: HttpRequest): boolean {
    console.log("Compress");

    return false;
  }
}
