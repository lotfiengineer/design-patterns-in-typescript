import TravelMode from "./TravelMode";

export default class Walking extends TravelMode {
  public getEta(): Object {
    console.log("Calculating ETA (walking)");
    return 4;
  }

  public getDirection(): Object {
    console.log("Calculating Direction (walking)");
    return 4;
  }
}
