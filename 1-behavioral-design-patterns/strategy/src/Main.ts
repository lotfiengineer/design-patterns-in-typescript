// Write code here

import BlackAndWhiteFilter from "./BlackAndWhiteFilter";
import Compressor from "./Compressor";
import Filter from "./Filter";
import ImageStorage from "./ImageStorage";
import JpegCompressor from "./JpegCompressor";
import PngCompressor from "./PngCompressor";

const imageStorage: ImageStorage = new ImageStorage();

imageStorage.store("a", new JpegCompressor(), new BlackAndWhiteFilter());

imageStorage.store("b", new PngCompressor(), new BlackAndWhiteFilter());
