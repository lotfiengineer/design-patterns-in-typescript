import AudioFilter from "./AudioFilter";
import FactSegment from "./FactSegment";
import FormatSegment from "./FormatSegment";
import Segment from "./Segment";

export default class WaveFile {
  private segments = new Array<Segment>();

  static read(fileName: string): WaveFile {
    const waveFile = new WaveFile();
    waveFile.segments.push(new FormatSegment());
    waveFile.segments.push(new FactSegment());
    waveFile.segments.push(new FactSegment());
    waveFile.segments.push(new FactSegment());

    return waveFile;
  }

  applyFilter(filter: AudioFilter) {
    for (const segment of this.segments) {
      segment.applyFilter(filter);
    }
  }
}
