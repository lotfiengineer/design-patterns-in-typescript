// Basic Remote Control (turnOn, turnOff)
// Advanced Remote Control (setChannel)
// Movie Remote Control (play, pause, rewind)

//* Hierarchy of classes:
//  RemoteControl
//    SonyRemoteControl
//    SamsungRemoteControl
//    AdvancedRemoteControl
//      SonyAdvancedRemoteControl
//      SamsungAdvancedRemoteControl
//
// 2 types of remote controls -> 2 new classes

import Device from "./Device";

export default class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  turnOn() {
    this.device.turnOn();
  }

  turnOff() {
    this.device.turnOff();
  }
}
