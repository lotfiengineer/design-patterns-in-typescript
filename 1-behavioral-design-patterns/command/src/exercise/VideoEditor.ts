
export default class VideoEditor {
  private contrast = 0.5;
  private text: string = "";

  setText(text: string) {
    this.text = text;
  }

  getText() {
    return this.text;
  }

  removeText() {
    this.text = "";
  }

  getContrast() {
    return this.contrast;
  }

  setContrast(contrast: number) {
    this.contrast = contrast;
  }

  toString() {
    return `
      VideoEditor {
        contrast = ${this.contrast},
        text = '${this.text}'
      }
    `;
  }
}
