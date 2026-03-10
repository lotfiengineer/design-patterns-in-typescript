import EncryptionAlgorithm from "./EncryptionAlgorithm";

export default class ChatClient {
  private encryptionAlgorithm: EncryptionAlgorithm;

  constructor(encryptionAlgorithm: EncryptionAlgorithm) {
    this.encryptionAlgorithm = encryptionAlgorithm;
  }

  public send(message: string): void {
    let encryptedMessage = this.encryptionAlgorithm.encrypt(message);

    console.log("Sending the encrypted message...");
  }
}
