import Caramel from "./avaFilters/Caramel";
import Filter from "./Filter";
import Image from "./Image";

export default class CaramelFilter implements Filter {
  private caramel: Caramel;

  constructor(caramel: Caramel) {
    this.caramel = caramel;
  }

  apply(image: Image): void {
    this.caramel.init();
    this.caramel.render(image);
  }
}
