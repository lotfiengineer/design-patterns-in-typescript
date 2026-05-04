import { defaultFontFamily } from "./defaultFontFamily";
import Font from "./Font";

export default class Cell {
  private row: number;
  private column: number;
  private content?: string;
  private font;

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
    this.font = new Font(defaultFontFamily);
  }

  getContent() {
    return this.content;
  }

  setContent(content: string) {
    this.content = content;
  }

  getFont() {
    return this.font;
  }

  setFont(font: Font) {
    this.font = font;
  }

  render() {
    console.log(
      `(${this.row}, ${this.column}): ${this.content} [${this.font.getFontFamily()}]\n`,
    );
  }
}
