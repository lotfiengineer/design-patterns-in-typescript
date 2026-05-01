import PointIcon from "./PointIcon";
import PointType from "./PointType";

type Icons = {
  type: PointType;
  value: PointIcon;
}[];

export default class PointIconFactory {
  private icons: Icons = [];

  getPointIcon(type: PointType): PointIcon {
    const index = this.icons.findIndex((icon) => icon.type === type);

    if (index === -1) {
      const icon = new PointIcon(type, null);
      this.icons.push({
        type: type,
        value: icon,
      });

      return icon;
    }

    return this.icons[index].value;
  }
}
