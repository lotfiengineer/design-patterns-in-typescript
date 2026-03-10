import Compressor from "./Compressor";

export default class JpegCompressor implements Compressor {
  public compress(fileName: string): void {
    console.log("Compressing using JPEG");
  }
}