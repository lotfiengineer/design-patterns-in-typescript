import Component from "./Component";

export default class Shape implements Component {
  render() {
    console.log("Render Shape");
  }

  move(): void {
    console.log("Move Shape");
  }
}
