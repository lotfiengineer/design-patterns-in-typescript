import Authenticator from "./Authenticator";
import Compressor from "./Compressor";
import Encryptor from "./Encryptor";
import HttpRequest from "./HttpRequest";
import Logger from "./Logger";
import WebServer from "./WebServer";

// authenticator -> compressor -> encryptor
const encryptor = new Encryptor(null);
const compressor = new Compressor(encryptor);
// const logger = new Logger(compressor);
const authenticator = new Authenticator(compressor);

const server = new WebServer(authenticator);
server.handle(new HttpRequest("admin", "1234"));
