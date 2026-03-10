export default abstract class EncryptionAlgorithm {
  public abstract encrypt(message: string): string;
}
