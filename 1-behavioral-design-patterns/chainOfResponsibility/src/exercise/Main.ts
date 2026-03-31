import DataReaderFactory from "./DataReaderFactory";

const reader = DataReaderFactory.getDataReaderChain();

reader.read("moneyTransfer.numbers");
