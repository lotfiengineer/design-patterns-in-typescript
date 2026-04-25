import Artefact from "./Artefact";

export default class SimpleArtefact implements Artefact {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  render(): string {
    return this.fileName;
  }
}
