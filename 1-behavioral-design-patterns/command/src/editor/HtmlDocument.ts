export default class HtmlDocument {
  private content: string = "";

  makeBold(): void {
    this.content = `<b>${this.content}</br>`;
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string): void {
    this.content = content;
  }
}
