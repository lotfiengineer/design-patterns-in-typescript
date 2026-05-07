export default abstract class Device {
  abstract turnOn(): void;
  abstract turnOff(): void;
  abstract setChannel(number: number): void;
}
