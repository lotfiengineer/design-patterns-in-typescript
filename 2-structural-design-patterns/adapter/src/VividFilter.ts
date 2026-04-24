import Filter from "./Filter";
import Image from "./Image";

export default class VividFilter implements Filter {
  apply(image: Image) {
    console.log("Applying Vivid Filter");
  }
}
