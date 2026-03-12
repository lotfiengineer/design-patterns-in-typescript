import Window from "./Window";

export default class ChatWindow extends Window {
  protected doAfterClose(): void {
    console.log("Disconnecting from the server...");
  }
}
