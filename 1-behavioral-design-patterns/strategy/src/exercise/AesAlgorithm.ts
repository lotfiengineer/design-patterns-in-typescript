import EncryptionAlgorithm from "./EncryptionAlgorithm";

export default class AesAlgorithm implements EncryptionAlgorithm {
  public encrypt(message: string): string {
    console.log("Encrypting message using AES");
    return "encryptedText";
  }
}
