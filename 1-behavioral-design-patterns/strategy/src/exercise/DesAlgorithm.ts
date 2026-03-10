import EncryptionAlgorithm from "./EncryptionAlgorithm";

export default class DesAlgorithm implements EncryptionAlgorithm {
  public encrypt(message: string): string {
    console.log("Encrypting message using DES");
    return "encryptedText";
  }
}
