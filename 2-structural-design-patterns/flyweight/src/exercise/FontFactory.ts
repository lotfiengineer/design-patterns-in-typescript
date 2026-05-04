import Font from "./Font";

export default class FontFactory {
  // This solution can be improved.
  // How to improve it:
  // Inside this class Make sure that every combination
  // of (fontFamily, fontSize, isBold) attributes will only be stored once.

  // I can hash fontFamily, fontSize and isBold together and store it inside
  // the fonts.
  // this way, the fonts field becomes an array of objects with two properties:
  // { hash: string, font: Font }
  // nice :)

  private fonts: Font[] = [];

  getFont(fontFamily: string) {
    const index = this.fonts.findIndex(
      (font) => font.getFontFamily() === fontFamily,
    );

    if (index === -1) {
      const newFont = new Font(fontFamily);
      this.fonts.push(newFont);
      return newFont;
    }

    return this.fonts[index];
  }
}
