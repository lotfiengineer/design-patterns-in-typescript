import FactSegment from "./FactSegment";
import FormatSegment from "./FormatSegment";
import AudioFilter from "./AudioFilter";

export default class NoiseReductionFilter extends AudioFilter {
  apply(segment: FactSegment | FormatSegment): void {
    if (segment instanceof FactSegment) {
      console.log("Reduce noise-FactSegment");
    }

    if (segment instanceof FormatSegment) {
      console.log("Reduce noise-FormatSegment");
    }
  }
}
