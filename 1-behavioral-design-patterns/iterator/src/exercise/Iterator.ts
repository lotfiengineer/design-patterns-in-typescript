import Product from "./Product";

export default abstract class Iterator {
    public abstract hasNext(): boolean;
    public abstract current(): Product;
    public abstract next(): void;
}