export default class Window {
  close(): void {
    // this.onClosing();
    this.doBeforeClose();

    console.log("Removing the window from the screen");

    // this.onClosed()
    this.doAfterClose();
  }

  // protected onClosing(): void {}
  protected doBeforeClose(): void {}

  // protected onClosed(): void {}
  protected doAfterClose(): void {}
}
