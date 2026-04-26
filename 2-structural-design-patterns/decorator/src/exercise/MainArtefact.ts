import AbstractArtefact from "./AbstractArtefact";

export default class MainArtefact implements AbstractArtefact {
  private artefact: AbstractArtefact;

  constructor(artefact: AbstractArtefact) {
    this.artefact = artefact;
  }

  render(): string {
    const icon = "[Main]";
    return `${this.artefact.render()} ${icon}`;
  }
}
