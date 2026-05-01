import PointType from "./PointType";

export default class PointIcon {
  private type: PointType; // 4 bytes
  private icon: Uint8Array[] | null; // 20 kb -> 20 MB

  constructor(type: PointType, icon: Uint8Array[] | null) {
    this.type = type;
    this.icon = icon;
  }

  getType() {
    return this.type;
  }
}
