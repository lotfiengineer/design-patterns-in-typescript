import Observer from "./Observer";

export default class Chart implements Observer {
  update() {
    console.log("Chart got updated");
  }
}
