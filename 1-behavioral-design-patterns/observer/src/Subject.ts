import Observer from "./Observer";

// some people call the Subject class Observable
export default class Subject {
  private observers = new Array<Observer>();

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach((obs) => obs.update());
  }
}
