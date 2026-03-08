import TravelMode from "./TravelMode";

export default class Driving extends TravelMode {
  public getEta(): Object {
    console.log("Calculating ETA (driving)");
    return 1;
  }

  public getDirection(): Object {
    console.log("Calculating Direction (driving)");
    return 1;
  }
}
