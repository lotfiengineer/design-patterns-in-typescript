export default abstract class Iterator {
  public abstract hasNext(): boolean;
  public abstract current(): string;
  public abstract next(): void;
}
