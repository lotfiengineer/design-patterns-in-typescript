import AudioFilter from "./AudioFilter";
import Segment from "./Segment";

export default class FormatSegment extends Segment {
  applyFilter(filter: AudioFilter): void {
    filter.apply(this);
  }
}
