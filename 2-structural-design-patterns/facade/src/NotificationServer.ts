import AuthToken from "./AuthToken";
import Connection from "./Connection";
import Message from "./Message";

export default class NotificationServer {
  // connect() -> Connection
  // authenticate(appID, key) -> AuthToken
  // send(authToken, message, target)
  // conn.disconnect()
  connect(ipAddress: string) {
    return new Connection();
  }

  authenticate(appID: string, key: string) {
    return new AuthToken();
  }

  send(authToken: AuthToken, message: Message, target: string) {
    console.log('Sending a message');
  }
}
