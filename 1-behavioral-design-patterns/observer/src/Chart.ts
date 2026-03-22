import DataSource from "./DataSource";
import Observer from "./Observer";

export default class Chart implements Observer {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource
  }

  update() {
    console.log("Chart got updated: " + this.dataSource.getValue());
  }
}
