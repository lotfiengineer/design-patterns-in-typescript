import AbstractArtefact from "./AbstractArtefact";

export default class ErrorArtifact implements AbstractArtefact {
  private artefact: AbstractArtefact;

  constructor(artefact: AbstractArtefact) {
    this.artefact = artefact;
  }

  render(): string {
    const icon = "[Error]";
    return `${this.artefact.render()} ${icon}`;
  }
}
