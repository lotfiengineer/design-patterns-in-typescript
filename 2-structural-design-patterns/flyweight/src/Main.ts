import PointIconFactory from "./PointIconFactory";
import PointService from "./PointService";

const service = new PointService(new PointIconFactory());
service.getPoints()

for (const point of service.getPoints())
  point.draw()