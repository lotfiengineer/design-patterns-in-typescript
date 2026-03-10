import Compressor from "./Compressor";

export default class PngCompressor implements Compressor {
  public compress(fileName: string): void {
    console.log("Compressing using PNG");
  }
}
