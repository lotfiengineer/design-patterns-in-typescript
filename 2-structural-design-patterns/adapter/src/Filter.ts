import Image from "./Image";

export default abstract class Filter {
  abstract apply(image: Image): void;
}
