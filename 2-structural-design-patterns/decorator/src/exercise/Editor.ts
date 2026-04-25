import Artefact from "./Artefact";

export default class Editor {
  openProject(path: string) {
    const artefacts: Artefact[] = [
      new Artefact("Main"),
      new Artefact("Demo"),
      new Artefact("EmailClient"),
      new Artefact("EmailProvider"),
    ];

    artefacts[0].setMain(true);
    artefacts[2].setHasError(true);


    for (const artefact of artefacts) console.log(artefact.render());
  }
}
