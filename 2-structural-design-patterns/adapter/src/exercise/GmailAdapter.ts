import EmailProvider from "./EmailProvider";
import GmailClient from "./Gmail/GmailClient";

export default class GmailAdapter implements EmailProvider {
  private gmailClient: GmailClient;

  constructor(client: GmailClient) {
    this.gmailClient = client;
  }

  downloadEmails(): void {
    this.gmailClient.connect();
    this.gmailClient.getEmails();
    this.gmailClient.disconnect();
  }
}
