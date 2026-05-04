import { defaultFontFamily } from "./defaultFontFamily";

export default class Font {
  private fontFamily;
  private fontSize = 12;
  private isBold = false;

  constructor(fontFamily: string) {
    this.fontFamily = fontFamily;
  }

  getFontFamily() {
    return this.fontFamily;
  }

  setFontFamily(fontFamily: string) {
    this.fontFamily = fontFamily;
  }

  getFontSize() {
    return this.fontSize;
  }

  setFontSize(fontSize: number) {
    this.fontSize = fontSize;
  }

  getIsBold() {
    return this.isBold;
  }

  setBold(bold: boolean) {
    this.isBold = bold;
  }
}
