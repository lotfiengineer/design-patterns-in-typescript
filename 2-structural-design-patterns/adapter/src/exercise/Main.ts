import EmailClient from "./EmailClient";
import GmailClient from "./Gmail/GmailClient";
import GmailAdapter from "./GmailAdapter";

const client = new EmailClient();
const gmailAdapter = new GmailAdapter(new GmailClient());
client.addProvider(gmailAdapter);
client.downloadEmails();
