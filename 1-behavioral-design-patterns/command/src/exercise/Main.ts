import ChangeContrastCommand from "./ChangeContrastCommand";
import History from "./History";
import SetTextCommand from "./SetTextCommand";
import UndoCommand from "./UndoCommand";
import VideoEditor from "./VideoEditor";

const videoEditor = new VideoEditor();
const history = new History();
const undoCommand = new UndoCommand(history);

let changeContrastCommand = new ChangeContrastCommand(
  videoEditor,
  history,
  0.8,
);
changeContrastCommand.execute();

let setTextCommand = new SetTextCommand(videoEditor, history, "Hello all");
setTextCommand.execute()

changeContrastCommand = new ChangeContrastCommand(videoEditor, history, 0.2);
changeContrastCommand.execute();

changeContrastCommand = new ChangeContrastCommand(videoEditor, history, 1);
changeContrastCommand.execute();

console.log(videoEditor.toString())
undoCommand.execute()
console.log(videoEditor.toString())
undoCommand.execute();
console.log(videoEditor.toString())
undoCommand.execute();
console.log(videoEditor.toString())
undoCommand.execute();
console.log(videoEditor.toString())
undoCommand.execute();
console.log(videoEditor.toString())




