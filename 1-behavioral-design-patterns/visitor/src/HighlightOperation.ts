import AnchorNode from "./AnchorNode";
import HeadingNode from "./HeadingNode";
import Operation from "./Operation";

export default class HighlightOperation extends Operation {
  // apply(heading: HeadingNode): void;
  // apply(anchor: AnchorNode): void;
  // apply(anchor: unknown): void {
  //   throw new Error("Method not implemented.");
  // }

  apply(node: HeadingNode | AnchorNode): void {
    if (node instanceof HeadingNode) {
      console.log("highlight-heading");
    }

    if (node instanceof AnchorNode) {
      console.log("highlight-anchor");
    }
  }
}
