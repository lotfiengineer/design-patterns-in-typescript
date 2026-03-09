import BrowseHistory from "./BrowseHistory";
import Iterator from "./Iterator";

const history = new BrowseHistory();

history.push("a");
history.push("b");
history.push("c");

const iterator: Iterator = history.createIterator();

while (iterator.hasNext()) {
  const url = iterator.current();
  console.log(url);
  iterator.next();
}
