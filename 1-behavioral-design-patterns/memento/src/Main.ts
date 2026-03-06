// Exercise code
import Document from "./exercise/Document";
import History from "./exercise/History";

const document = new Document();
const history = new History();

document.setContent("I am ");
document.setFontName("B Zar");
document.setFontSize(18);
history.push(document.createState());

document.setContent("Learning ");
document.setFontName("B Nazanin");
document.setFontSize(22);
history.push(document.createState());

document.setContent("the memento design");
document.setFontName("Nastaliq");
document.setFontSize(10);
history.push(document.createState());

document.setContent("pattern");
document.setFontName("Iran Sans");
document.setFontSize(7);

console.log(document.toString());

document.restore(history.pop());
console.log(document.toString());

document.restore(history.pop());
console.log(document.toString());

// // Tutorial code
// import { Editor } from "./Editor";
// import History from "./History";

// let editor = new Editor();
// let history = new History();

// editor.setContent("");
// history.push(editor.createState());

// editor.setContent("a");
// history.push(editor.createState());

// editor.setContent("b");
// history.push(editor.createState());

// editor.setContent("c");

// editor.restore(history.pop());
// editor.restore(history.pop());
// editor.restore(history.pop());

// console.log(editor.getContent());
