import DataSource from "./DataSource";
import Observer from "./Observer";

export default class SpreadSheet implements Observer {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  update() {
    console.log("SpreadSheet got notified: " + this.dataSource.getValue());
  }
}
