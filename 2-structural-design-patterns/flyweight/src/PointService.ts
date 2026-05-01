import Point from "./Point";
import PointIcon from "./PointIcon";
import PointIconFactory from "./PointIconFactory";
import PointType from "./PointType";

export default class PointService {
  private iconFactory: PointIconFactory;

  constructor(iconFactory: PointIconFactory) {
    this.iconFactory = iconFactory;
  }

  getPoints(): Point[] {
    const points: Point[] = [];

    const point = new Point(
      1,
      2,
      this.iconFactory.getPointIcon(PointType.CAFE),
    );
    points.push(point);

    return points;
  }
}
