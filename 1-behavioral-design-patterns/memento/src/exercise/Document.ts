export default class Document {
  private content: string = "";
  private fontName: string = "";
  private fontSize: number = 14;

  public getContent = (): string => {
    return this.content;
  };

  public setContent = (content: string): void => {
    this.content = content;
  };

  public getFontName = (): string => {
    return this.fontName;
  };

  public setFontName = (fontName: string): void => {
    this.fontName = fontName;
  };

  public getFontSize = (): number => {
    return this.fontSize;
  };

  public setFontSize = (fontSize: number): void => {
    this.fontSize = fontSize;
  };

  public toString = () => {
    return `Document: {
            content: ${this.content},
            fontName: ${this.fontName}, 
            fontSize: ${this.fontSize}, 
        }`;
  };
}
