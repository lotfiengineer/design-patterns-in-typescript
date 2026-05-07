import Device from "./Device";

export default class SamsungTV implements Device {
  turnOn(): void {
    console.log("Samsung: turnOn");
  }

  turnOff(): void {
    console.log("Samsung: turnOff");
  }

  setChannel(number: number): void {
    console.log("Samsung: setChannel");
  }
}
