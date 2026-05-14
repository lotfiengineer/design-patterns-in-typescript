import Ebook from "./Ebook";

export default class RealEbook implements Ebook {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.load();
  }

  // Read the file from the disk
  load() {
    console.log("Loading the ebook " + this.fileName);
  }

  show() {
    console.log("Showing the ebook " + this.fileName);
  }

  getFileName() {
    return this.fileName;
  }
}
