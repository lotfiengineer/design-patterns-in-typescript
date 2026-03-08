import TravelMode from "./TravelMode";

export default class Bicycling extends TravelMode {
  public getEta(): Object {
    console.log("Calculating ETA (bicycling)");
    return 2;
  }

  public getDirection(): Object {
    console.log("Calculating Direction (bicycling)");
    return 2;
  }
}
