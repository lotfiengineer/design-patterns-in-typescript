import Library from "./Library";
import LoggingEbookProxy from "./LoggingEbookProxy";

const library = new Library();
const fileNames = ["a", "b", "c"];

// for (const fileName of fileNames) library.add(new EbookProxy(fileName));
for (const fileName of fileNames) library.add(new LoggingEbookProxy(fileName));

library.openEbook("a");
library.openEbook("b");
