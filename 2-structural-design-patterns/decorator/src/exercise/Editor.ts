import AbstractArtefact from "./AbstractArtefact";
import ErrorArtifact from "./ErrorArtifact";
import MainArtefact from "./MainArtefact";
import SimpleArtefact from "./SimpleArtefact";

export default class Editor {
  openProject(path: string) {
    const artefacts: AbstractArtefact[] = [
      // We can write the code below too
      // new MainArtefact(new SimpleArtefact("Main")),
      new SimpleArtefact("Main"),
      new SimpleArtefact("Demo"),
      new SimpleArtefact("EmailClient"),
      new SimpleArtefact("EmailProvider"),
    ];

    artefacts[0] = new ErrorArtifact(new MainArtefact(artefacts[0]));
    artefacts[2] = new ErrorArtifact(artefacts[2]);

    for (const artefact of artefacts) console.log(artefact.render());
  }
}
