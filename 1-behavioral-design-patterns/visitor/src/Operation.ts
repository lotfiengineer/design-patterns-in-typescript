import AnchorNode from "./AnchorNode";
import HeadingNode from "./HeadingNode";

export default abstract class Operation {
  abstract apply(heading: HeadingNode): void;

  abstract apply(anchor: AnchorNode): void;
}