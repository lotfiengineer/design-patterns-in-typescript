import BoldCommand from "./BoldCommand";
import History from "./History";
import HtmlDocument from "./HtmlDocument";
import UndoCommand from "./UndoCommand";

const history = new History();
const document = new HtmlDocument();
const undoCommand = new UndoCommand(history);
document.setContent('Hello world');

const boldCommand = new BoldCommand(document, history);

boldCommand.execute();
console.log(document.getContent());

undoCommand.execute()
console.log(document.getContent());