import AddReverbFilter from "./AddReverbFilter";
import NormalizeOperation from "./NormalizeOperation";
import NoiseReductionFilter from "./NoiseReductionFilter";
import WaveFile from "./WaveFile";

const waveFile = WaveFile.read("test.wave");

waveFile.applyFilter(new NoiseReductionFilter());
waveFile.applyFilter(new AddReverbFilter());
waveFile.applyFilter(new NormalizeOperation());
