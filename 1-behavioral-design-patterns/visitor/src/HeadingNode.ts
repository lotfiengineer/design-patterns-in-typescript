import HtmlNode from "./HtmlNode";
import Operation from "./Operation";

export default class HeadingNode implements HtmlNode {
  execute(operation: Operation): void {
    operation.apply(this);
  }
}
