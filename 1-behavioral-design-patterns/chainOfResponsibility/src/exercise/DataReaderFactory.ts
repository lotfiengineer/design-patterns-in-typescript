import DataReader from "./DataReader";
import ExcelReader from "./ExcelReader";
import NumbersReader from "./NumbersReader";
import QuickBooksReader from "./QuickBooksReader";

export default class DataReaderFactory {
  // .xls -> .numbers -> .qbw
  static getDataReaderChain(): DataReader {
    const excelReader = new ExcelReader();
    const numbersReader = new NumbersReader();
    const quickBooksReader = new QuickBooksReader();

    excelReader.setNext(numbersReader);
    numbersReader.setNext(quickBooksReader);

    return excelReader;
  }
}
