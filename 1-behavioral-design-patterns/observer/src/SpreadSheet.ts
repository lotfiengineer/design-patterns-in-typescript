import Observer from "./Observer";

export default class SpreadSheet implements Observer {
  update() {
    console.log("SpreadSheet got notified");
  }
}
