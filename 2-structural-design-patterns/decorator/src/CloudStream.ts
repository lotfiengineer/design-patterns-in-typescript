import Stream from "./Stream";

// With this class we are going to read or write data to the cloud
export default class CloudStream implements Stream {
  write(data: string) {
    console.log("Storing " + data);
  }
}
