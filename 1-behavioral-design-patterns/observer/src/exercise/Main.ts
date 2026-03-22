import StatusBar from "./StatusBar";
import Stock from "./Stock";
import StockListView from "./StockListView";

const stock1 = new Stock("a", 10);
const stock2 = new Stock("b", 20);
const stock3 = new Stock("c", 30);

const statusBar = new StatusBar();
const stockListView = new StockListView();

statusBar.addStock(stock1);
statusBar.addStock(stock2);
statusBar.addStock(stock3);

stockListView.addStock(stock1);
stockListView.addStock(stock2);

stock1.setPrice(100);
stock3.setPrice(34);
