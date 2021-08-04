import { DataType } from './DateType';

export const DATE = (...args: DataType[]) => {
  if (args.length !== 3) {
    return new DataType('unknow');
  }
  return args.every((arg) => arg.isDecimalLike)
    ? new DataType('date')
    : new DataType('unknow');
};

export const DATEVALUE = (...args: DataType[]) => {
  if (args.length !== 1) {
    return new DataType('unknow');
  }
  return args[0].isDateLike ? new DataType('string') : new DataType('unknow');
};

export const DAY = (...args: DataType[]) => {
  if (args.length !== 1) {
    return new DataType('unknow');
  }
  return args[0].isDateLike ? new DataType('integer') : new DataType('unknow');
};

export const DAYS = (...args: DataType[]) => {
  if (args.length !== 2) {
    return new DataType('unknow');
  }
  return args.every((arg) => arg.isDateLike)
    ? new DataType('integer')
    : new DataType('unknow');
};

export const DAYS360 = (...args: DataType[]) => {
  if (args.length !== 2) {
    return new DataType('unknow');
  }
  return args.every((arg) => arg.isDateLike)
    ? new DataType('integer')
    : new DataType('unknow');
};

export const EDATE = (...args: DataType[]) => {
  if (args.length !== 2) {
    return new DataType('unknow');
  }
  return args[0].isDateLike && args[1].isDecimalLike
    ? new DataType('datetime')
    : new DataType('unknow');
};

export const EOMONTH = (...args: DataType[]) => {
  if (args.length !== 2) {
    return new DataType('unknow');
  }
  return args[0].isDateLike && args[1].isDecimalLike
    ? new DataType('datetime')
    : new DataType('unknow');
};

const oneArgReturnInt = (...args: DataType[]) => {
  if (args.length !== 1) {
    return new DataType('unknow');
  }
  return args[0].isDateLike ? new DataType('integer') : new DataType('unknow');
};

export const HOUR = oneArgReturnInt;

export const MINUTE = oneArgReturnInt;

export const ISOWEEKNUM = oneArgReturnInt;

export const MONTH = oneArgReturnInt;

export const SECOND = oneArgReturnInt;

export const WEEKDAY = oneArgReturnInt;

export const YEAR = oneArgReturnInt;

export const NOW = (...args: DataType[]) => {
  if (args.length !== 0) {
    return new DataType('unknow');
  }
  return new DataType('datetime');
};

export const TODAY = (...args: DataType[]) => {
  if (args.length !== 0) {
    return new DataType('unknow');
  }
  return new DataType('date');
};

export const TIMENOW = (...args: DataType[]) => {
  if (args.length !== 0) {
    return new DataType('unknow');
  }
  return new DataType('time');
};

export const TIMEVALUE = (...args: DataType[]) => {
  if (args.length !== 1) {
    return new DataType('unknow');
  }
  if (args[0].inTypes(['string', 'date', 'datetime', 'timestamp'])) {
    return new DataType('number');
  }
  return new DataType('unknow');
};

export const WEEKNUM = (...args: DataType[]) => {
  if (args.length !== 2) {
    return new DataType('unknow');
  }
  return new DataType('integer');
};
