import Compressor from "./Compressor";
import Filter from "./Filter";

export default class ImageStorage {
  constructor() {}

  public store(fileName: string, compressor: Compressor, filter: Filter): void {
    compressor.compress(fileName); // :)

    filter.apply(fileName);
  }
}
