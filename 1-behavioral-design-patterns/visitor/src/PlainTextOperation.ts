import AnchorNode from "./AnchorNode";
import HeadingNode from "./HeadingNode";
import Operation from "./Operation";

export default class PlainTextOperation implements Operation {
  apply(heading: HeadingNode): void;
  apply(anchor: AnchorNode): void;

  apply(node: unknown): void {
    if (node instanceof HeadingNode) {
      console.log("text-heading");
    }

    if (node instanceof AnchorNode) {
      console.log("text-anchor");
    }
  }
}
