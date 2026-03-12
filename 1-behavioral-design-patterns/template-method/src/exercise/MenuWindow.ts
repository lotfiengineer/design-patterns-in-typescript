import Window from "./Window";

export default class MenuWindow extends Window {
  protected doBeforeClose(): void {
    console.log("Menu before closing");
  }
  
  protected doAfterClose(): void {
    console.log("Menu after closing");
  }
}
