// Abstraction

class MailService {
  public sendEmail = (): void => {
    this.connect();
    this.authenticate();
    // send email
    this.disconnect();
  };

  private connect = () => {
    console.log("Connect");
  };

  private disconnect = () => {
    console.log("Disconnect");
  };

  private authenticate = () => {
    console.log("Authenticate");
  };
}
