import Message from "./Message";
import NotificationServer from "./NotificationServer";

export default class NotificationService {
  send(message: string, target: string) {
    const server = new NotificationServer();
    const connection = server.connect("ip");
    const authToken = server.authenticate("appID", "key");

    server.send(authToken, new Message(message), target);
    connection.disconnect();
  }
}
