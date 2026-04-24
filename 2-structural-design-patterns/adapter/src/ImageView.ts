import Filter from "./Filter";
import Image from "./Image";

// This class will contain an image and allow us to apply different filters to it.
export default class ImageView {
  private image: Image;

  constructor(image: Image) {
    this.image = image;
  }

  apply(filter: Filter) {
    filter.apply(this.image);
  }
}
