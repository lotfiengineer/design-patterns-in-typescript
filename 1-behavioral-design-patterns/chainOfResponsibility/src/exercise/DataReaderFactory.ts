import DataReader from "./DataReader";
import ExcelReader from "./ExcelReader";
import NumbersReader from "./NumbersReader";
import QuickBooksReader from "./QuickBooksReader";

export default class DataReaderFactory {
  // .xls -> .numbers -> .qbw
  static getDataReaderChain(): DataReader {
    const quickBooksReader = new QuickBooksReader(null);
    const numbersReader = new NumbersReader(null);
    const excelReader = new ExcelReader(null);

    excelReader.setNext(numbersReader);
    numbersReader.setNext(quickBooksReader);

    return excelReader;
  }
}
