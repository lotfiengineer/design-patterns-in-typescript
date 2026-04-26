import AbstractArtefact from "./AbstractArtefact";

export default class SimpleArtefact implements AbstractArtefact {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  render(): string {
    return this.fileName;
  }
}
