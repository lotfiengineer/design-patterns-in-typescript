import MenuWindow from "./MenuWindow";
import ChatWindow from "./ChatWindow";
import Window from "./Window";

let window: Window = new MenuWindow();
window.close();

window = new ChatWindow();
window.close();
