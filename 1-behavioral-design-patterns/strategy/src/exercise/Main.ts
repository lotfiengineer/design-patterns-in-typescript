import AesAlgorithm from "./AesAlgorithm";
import ChatClient from "./ChatClient";
import DesAlgorithm from "./DesAlgorithm";

const chatClient = new ChatClient(new AesAlgorithm());

chatClient.send("a");
