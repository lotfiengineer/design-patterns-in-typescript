import Device from "./Device";

export default class SonyTV implements Device {
  turnOn(): void {
    console.log("Sony: turnOn");
  }

  turnOff(): void {
    console.log("Sony: turnOff");
  }

  setChannel(number: number): void {
    console.log("Sony: setChannel");
  }
}
