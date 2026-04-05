import FactSegment from "./FactSegment";
import FormatSegment from "./FormatSegment";

export default abstract class AudioFilter {
  abstract apply(factSegment: FactSegment): void;

  abstract apply(formatSegment: FormatSegment): void;
}
