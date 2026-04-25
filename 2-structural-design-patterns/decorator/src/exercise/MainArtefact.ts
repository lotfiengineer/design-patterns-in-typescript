import Artefact from "./Artefact";

export default class MainArtefact implements Artefact {
  private artefact: Artefact;

  constructor(artefact: Artefact) {
    this.artefact = artefact;
  }

  render(): string {
    const icon = "[Main]"
    return `${this.artefact.render()} ${icon}`
  }
}
