import EmailProvider from "./EmailProvider";

export default class EmailClient {
  private providers = new Array<EmailProvider>();

  public addProvider(provider: EmailProvider) {
    this.providers.push(provider);
  }

  public downloadEmails() {
    for (const provider of this.providers)
      provider.downloadEmails();
  }
}
