import DataReaderFactory from "./DataReaderFactory";

const reader = DataReaderFactory.getDataReaderChain();

reader.read("moneyTransfer.numbers");
reader.read('test.xls');
reader.read('data.numbers');
reader.read('data.qbw')
// reader.read('data.notSupportedFormat')