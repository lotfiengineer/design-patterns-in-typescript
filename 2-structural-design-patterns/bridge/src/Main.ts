import AdvancedRemoteControl from "./AdvancedRemoteControl";
import RemoteControl from "./RemoteControl";
import SamsungTV from "./SamsungTV";
import SonyTV from "./SonyTV";

const remoteControl = new AdvancedRemoteControl(new SamsungTV());
remoteControl.turnOn();
