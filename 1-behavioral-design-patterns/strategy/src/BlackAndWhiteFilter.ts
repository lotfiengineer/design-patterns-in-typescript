import Filter from "./Filter";

export default class BlackAndWhiteFilter implements Filter {
  public apply(fileName: string): void {
    console.log("Applying B&W filter");
  }
}
