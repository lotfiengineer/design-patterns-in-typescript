import Artefact from "./Artefact";


export default class ErrorArtifact implements Artefact {
  private artefact: Artefact;

  constructor(artefact: Artefact) {
    this.artefact = artefact;
  }

  render(): string {
    const icon = "[Error]"
    return `${this.artefact.render()} ${icon}`
  }
}