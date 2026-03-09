import Iterator from "./Iterator";

export default class BrowseHistory {
  private urls: string[] = [];

  public push(url: string): void {
    this.urls.push(url);
  }

  public pop(): string {
    const lastIndex = this.urls.length - 1;
    const lastUrl = this.urls[lastIndex];
    this.urls.pop();

    return lastUrl;
  }

  public createIterator(): Iterator {
    return new this.ListIterator(this);
  }

  // We can use 'urls' field from BrowseHistory inside ListIterator,
  // Because the ListIterator is inside the BrowseHistory class
  // It can see all the members of BrowseHistory class even if they are private.
  // That's why we have access to the 'urls' field.
  ListIterator = class ListIterator implements Iterator {
    private history: BrowseHistory;
    private index: number = 0;

    constructor(history: BrowseHistory) {
      this.history = history;
    }

    public hasNext(): boolean {
      return this.index < this.history.urls.length;
    }

    public current(): string {
      return this.history.urls[this.index];
    }

    public next(): void {
      this.index++;
    }
  };
}
