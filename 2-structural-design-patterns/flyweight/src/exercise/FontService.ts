import FontFactory from "./FontFactory";

export default class FontService {
  private fontFactory: FontFactory;

  constructor(fontFactory: FontFactory) {
    this.fontFactory = fontFactory;
  }

  getFont(fontFamily: string) {
    const font = this.fontFactory.getFont(fontFamily);

    return font;
  }
}
