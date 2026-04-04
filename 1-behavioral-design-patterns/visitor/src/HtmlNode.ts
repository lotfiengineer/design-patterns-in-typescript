import Operation from "./Operation";

export default abstract class HtmlNode {
  abstract execute(operation: Operation): void;
}
