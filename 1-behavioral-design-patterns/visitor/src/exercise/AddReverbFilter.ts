import FactSegment from "./FactSegment";
import FormatSegment from "./FormatSegment";
import AudioFilter from "./AudioFilter";

export default class AddReverbFilter extends AudioFilter {
  apply(segment: FactSegment | FormatSegment): void {
    if (segment instanceof FactSegment) {
      console.log("Add reverb - FactSegment");
    }
    if (segment instanceof FormatSegment) {
      console.log("Add reverb - FormatSegment");
    }
  }
}
