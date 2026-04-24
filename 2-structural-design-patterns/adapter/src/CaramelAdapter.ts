import Caramel from "./avaFilters/Caramel";
import Filter from "./Filter";
import Image from "./Image";

// We can also use inheritance to implement the adapter pattern
export default class CaramelAdapter extends Caramel implements Filter {
  apply(image: Image): void {
    this.init();
    this.render(image);
  }
}
