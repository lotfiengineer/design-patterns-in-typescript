import Stream from "./Stream";

export default class CompressedCloudStream implements Stream {
  private stream: Stream;

  constructor(stream: Stream) {
    this.stream = stream;
  }

  write(data: string): void {
    const compressed = this.compress(data);
    this.stream.write(compressed);
  }

  compress(data: string): string {
    return data.substring(0, 5);
  }
}
