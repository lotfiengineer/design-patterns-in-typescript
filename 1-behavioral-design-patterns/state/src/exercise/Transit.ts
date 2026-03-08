import TravelMode from "./TravelMode";

export default class Transit extends TravelMode {
  public getEta(): Object {
    console.log("Calculating ETA (Transit)");
    return 3;
  }

  public getDirection(): Object {
    console.log("Calculating Direction (Transit)");
    return 3;
  }
}
