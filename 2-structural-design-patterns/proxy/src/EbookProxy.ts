import Ebook from "./Ebook";
import RealEbook from "./RealEbook";

export default class EbookProxy implements Ebook {
  private fileName: string;
  private ebook?: RealEbook;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  show(): void {
    if (this.ebook === undefined) this.ebook = new RealEbook(this.fileName);

    this.ebook.show();
  }

  getFileName(): string {
    return this.fileName;
  }
}
