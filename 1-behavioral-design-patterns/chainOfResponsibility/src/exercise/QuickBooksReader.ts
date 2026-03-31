import DataReader from "./DataReader";

export default class QuickBooksReader extends DataReader {
  protected getExtension(): string {
    return '.qbw';
  }

  protected doRead(fileName: string): void {
    console.log("Reading data from a QuickBooks file.");
  }
}
