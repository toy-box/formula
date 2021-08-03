import { DateType } from './DateType';

export const DATE = (...args: DateType[]) => {
  if (args.length !== 3) {
    return new DateType('unknow');
  }
  return args.every((arg) => arg.isDecimalLike)
    ? new DateType('date')
    : new DateType('unknow');
};

export const DATEVALUE = (...args: DateType[]) => {
  if (args.length !== 1) {
    return new DateType('unknow');
  }
  return args[0].isDateLike ? new DateType('string') : new DateType('unknow');
};

export const DAY = (...args: DateType[]) => {
  if (args.length !== 1) {
    return new DateType('unknow');
  }
  return args[0].isDateLike ? new DateType('integer') : new DateType('unknow');
};

export const DAYS = (...args: DateType[]) => {
  if (args.length !== 2) {
    return new DateType('unknow');
  }
  return args.every((arg) => arg.isDateLike)
    ? new DateType('integer')
    : new DateType('unknow');
};

export const DAYS360 = (...args: DateType[]) => {
  if (args.length !== 2) {
    return new DateType('unknow');
  }
  return args.every((arg) => arg.isDateLike)
    ? new DateType('integer')
    : new DateType('unknow');
};

export const EDATE = (...args: DateType[]) => {
  if (args.length !== 2) {
    return new DateType('unknow');
  }
  return args[0].isDateLike && args[1].isDecimalLike
    ? new DateType('datetime')
    : new DateType('unknow');
};

export const EOMONTH = (...args: DateType[]) => {
  if (args.length !== 2) {
    return new DateType('unknow');
  }
  return args[0].isDateLike && args[1].isDecimalLike
    ? new DateType('datetime')
    : new DateType('unknow');
};

const oneArgReturnInt = (...args: DateType[]) => {
  if (args.length !== 1) {
    return new DateType('unknow');
  }
  return args[0].isDateLike ? new DateType('integer') : new DateType('unknow');
};

export const HOUR = oneArgReturnInt;

export const MINUTE = oneArgReturnInt;

export const ISOWEEKNUM = oneArgReturnInt;

export const MONTH = oneArgReturnInt;

export const SECOND = oneArgReturnInt;

export const WEEKDAY = oneArgReturnInt;

export const YEAR = oneArgReturnInt;

export const NOW = (...args: DateType[]) => {
  if (args.length !== 0) {
    return new DateType('unknow');
  }
  return new DateType('datetime');
};

export const TODAY = (...args: DateType[]) => {
  if (args.length !== 0) {
    return new DateType('unknow');
  }
  return new DateType('date');
};

export const TIMENOW = (...args: DateType[]) => {
  if (args.length !== 0) {
    return new DateType('unknow');
  }
  return new DateType('time');
};

export const TIMEVALUE = (...args: DateType[]) => {
  if (args.length !== 1) {
    return new DateType('unknow');
  }
  if (args[0].inTypes(['string', 'date', 'datetime', 'timestamp'])) {
    return new DateType('number');
  }
  return new DateType('unknow');
};

export const WEEKNUM = (...args: DateType[]) => {
  if (args.length !== 2) {
    return new DateType('unknow');
  }
  return new DateType('integer');
};
