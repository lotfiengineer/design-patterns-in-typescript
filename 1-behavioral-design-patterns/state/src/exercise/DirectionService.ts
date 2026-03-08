import TravelMode from "./TravelMode";

export default class DirectionService {
  private travelMode: TravelMode;

  constructor(travelMode: TravelMode) {
    this.travelMode = travelMode;
  }

  public getEta(): Object {
    return this.travelMode.getEta();
  }

  public getDirection(): Object {
    return this.travelMode.getDirection();
  }

  public getTravelMode(): TravelMode {
    return this.travelMode;
  }

  public setTravelMode(travelMode: TravelMode): void {
    this.travelMode = travelMode;
  }
}
