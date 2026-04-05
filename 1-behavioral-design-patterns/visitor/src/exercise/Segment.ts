import AudioFilter from "./AudioFilter";

export default abstract class Segment {
  abstract applyFilter(filter: AudioFilter): void;
}
