export default abstract class DataReader {
  private next: DataReader | null;

  constructor(next?: DataReader | null) {
    if (next === undefined) {
      this.next = null;
      return;
    }

    this.next = next;
  }

  read(fileName: string) {
    // implement the template method
    if (fileName.endsWith(this.getExtension())) {
      this.doRead(fileName);
      return;
    }

    if (this.next !== null) this.next.read(fileName);
    else throw new Error("File format not supported.");
  }

  setNext(next: DataReader) {
    this.next = next;
  }

  protected abstract getExtension(): string;

  protected abstract doRead(fileName: string): void;
}
