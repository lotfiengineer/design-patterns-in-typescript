import FactSegment from "./FactSegment";
import FormatSegment from "./FormatSegment";
import AudioFilter from "./AudioFilter";

export default class NormalizeOperation extends AudioFilter {
  apply(segment: FactSegment | FormatSegment): void {
    if (segment instanceof FactSegment) {
      console.log("Normalize - FactSegment");
    }
    if (segment instanceof FormatSegment) {
      console.log("Normalize - FormatSegment");
    }
  }
}
