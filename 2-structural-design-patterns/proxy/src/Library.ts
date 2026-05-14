import Ebook from "./Ebook";

// We need a method for adding an ebook to our library
export default class Library {
  private ebooks: Record<string, Ebook> = {};

  add(ebook: Ebook) {
    this.ebooks[ebook.getFileName()] = ebook;
  }

  openEbook(fileName: string) {
    const ebook = this.ebooks[fileName];

    if (!ebook) return;

    ebook.show();
  }
}
