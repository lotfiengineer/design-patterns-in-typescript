import PointIcon from "./PointIcon";
import PointType from "./PointType";

export default class Point {
  private x: number; // 4 bytes
  private y: number; // 4 bytes
  private icon: PointIcon;

  constructor(x: number, y: number, icon: PointIcon) {
    this.x = x;
    this.y = y;
    this.icon = icon;
  }

  draw() {
    console.log(`${this.icon.getType()} at (${this.x} ${this.y})`);
  }
}
