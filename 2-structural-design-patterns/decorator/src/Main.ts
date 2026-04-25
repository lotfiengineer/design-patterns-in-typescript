import CloudStream from "./CloudStream";
import CompressedCloudStream from "./CompressedCloudStream";
import EncryptedCloudStream from "./EncryptedCloudStream";
import Stream from "./Stream";

storeCreditCard(
  new EncryptedCloudStream(new CompressedCloudStream(new CloudStream())),
);

function storeCreditCard(stream: Stream) {
  stream.write("1234-1234-1234-1234");
}
