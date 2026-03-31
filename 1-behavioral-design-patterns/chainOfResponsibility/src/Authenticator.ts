import Handler from "./Handler";
import HttpRequest from "./HttpRequest";

export default class Authenticator extends Handler {
  //* This constructor in the Authenticator class is not necessary.
  //* Typescript compiler handles it for us.
  constructor(next: Handler | null) {
    super(next);
  }

  protected doHandle(request: HttpRequest): boolean {
    const isValid =
      request.getUsername() === "admin" && request.getPassword() === "1234";

    console.log("Authentication");

    return !isValid;
  }
}
