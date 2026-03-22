import StockObserver from "./StockObserver";

export default class Subject {
  private observers: StockObserver[] = [];

  addObserver(observer: StockObserver) {
    this.observers.push(observer);
  }

  removeObserver(observer: StockObserver) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers() {
    this.observers.map((obs) => obs.priceChanged());
  }
}
