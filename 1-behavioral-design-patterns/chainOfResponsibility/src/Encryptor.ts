import Handler from "./Handler";
import HttpRequest from "./HttpRequest";

export default class Encryptor extends Handler {
  protected doHandle(request: HttpRequest): boolean {
    console.log("Encryption");
    return false;
  }
}
