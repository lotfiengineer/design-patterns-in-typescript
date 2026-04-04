import HtmlNode from "./HtmlNode";
import Operation from "./Operation";

export default class HtmlDocument {
  private nodes = Array<HtmlNode>();

  add(node: HtmlNode) {
    this.nodes.push(node);
  }

  execute(operation: Operation) {
    for (const node of this.nodes) 
      node.execute(operation);
  }
}
