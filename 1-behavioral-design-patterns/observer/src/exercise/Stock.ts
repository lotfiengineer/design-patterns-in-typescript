import Subject from "./Subject";

export default class Stock extends Subject {
  private symbol: string;
  private price: number;

  constructor(symbol: string, price: number) {
    super();
    this.symbol = symbol;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price: number) {
    this.price = price;
    this.notifyObservers();
  }

  toString() {
    return `
      Stock {
        symbol = ${this.symbol},
        price = ${this.price} 
      } 
    `;
  }
}
