import Stock from "./Stock";
import StockObserver from "./StockObserver";

export default class StatusBar implements StockObserver {
  private stocks: Stock[] = [];

  addStock(stock: Stock) {
    this.stocks.push(stock);
    stock.addObserver(this);
  }

  show(): void {
    console.log("Status Bar");
    for (let stock of this.stocks) {
      console.log(stock);
    }
  }

  priceChanged(): void {
    console.log("Price Changed - Refreshing StatusBar");
    this.show();
  }
}
