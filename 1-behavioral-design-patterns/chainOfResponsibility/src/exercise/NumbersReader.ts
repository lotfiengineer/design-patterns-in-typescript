import DataReader from "./DataReader";

export default class NumbersReader extends DataReader {
  protected getExtension(): string {
    return ".numbers";
  }

  protected doRead(fileName: string): void {
    console.log("Reading data from a Numbers spreadsheet.");
  }
}
