import HtmlNode from "./HtmlNode";
import Operation from "./Operation";

export default class AnchorNode implements HtmlNode {
  execute(operation: Operation): void {
    operation.apply(this);
  }
}
