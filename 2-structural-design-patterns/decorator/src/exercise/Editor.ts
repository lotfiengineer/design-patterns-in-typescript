import Artefact from "./Artefact";
import ErrorArtifact from "./ErrorArtifact";
import MainArtefact from "./MainArtefact";
import SimpleArtefact from "./SimpleArtefact";

export default class Editor {
  openProject(path: string) {
    const artefacts: Artefact[] = [
      new MainArtefact(new SimpleArtefact("Main")),
      new SimpleArtefact("Demo"),
      new ErrorArtifact(new SimpleArtefact("EmailClient")),
      new SimpleArtefact("EmailProvider"),
    ];

    for (const artefact of artefacts) console.log(artefact.render());
  }
}
