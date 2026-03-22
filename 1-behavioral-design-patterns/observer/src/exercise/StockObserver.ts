import Stock from "./Stock";

export default abstract class StockObserver {
  abstract priceChanged(): void;
}
