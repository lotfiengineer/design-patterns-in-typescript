import Component from "./Component";
import Shape from "./Shape";

export default class Group implements Component {
  private components = Array<Component>();

  add(component: Component) {
    this.components.push(component);
  }

  render() {
    for (const component of this.components) component.render();
  }

  move(): void {
    for (const component of this.components) component.move();
  }
}
