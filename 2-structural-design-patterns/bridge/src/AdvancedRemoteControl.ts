import Device from "./Device";
import RemoteControl from "./RemoteControl";

export default class AdvancedRemoteControl extends RemoteControl {
  constructor(device: Device) {
    super(device);
  }

  setChannel(number: number) {
    this.device.setChannel(number);
  }
}
