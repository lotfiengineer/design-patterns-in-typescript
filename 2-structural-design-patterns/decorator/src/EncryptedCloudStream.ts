import CloudStream from "./CloudStream";
import Stream from "./Stream";

export default class EncryptedCloudStream implements Stream {
  private stream: Stream;

  constructor(stream: Stream) {
    this.stream = stream;
  }

  write(data: string): void {
    const encrypted = this.encrypt(data);
    this.stream.write(encrypted);
  }

  private encrypt(data: string): string {
    return "^@)(#*(!@&#@$*()@#)!*";
  }
}
