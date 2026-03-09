import Iterator from "./Iterator";
import Product from "./Product";

export default class ProductCollection {
  private products: Product[] = [];

  public add(product: Product): void {
    this.products.push(product);
  }

  public createIterator(): Iterator {
    return new this.ListIterator(this);
  }

  ListIterator = class ListIterator implements Iterator {
    private productCollection: ProductCollection;
    private index: number = 0;

    constructor(productCollection: ProductCollection) {
      this.productCollection = productCollection;
    }

    public hasNext(): boolean {
      return this.index < this.productCollection.products.length;
    }

    public current(): Product {
      return this.productCollection.products[this.index];
    }
    
    public next(): void {
      this.index++;
    }
  };
}
