import { DataType } from './DateType';
import { TYPE } from './types';

export const DATE = (...args: DataType[]) => {
  if (args.length !== 3) {
    return new DataType(TYPE.UNKNOW);
  }
  return args.every((arg) => arg.isDecimalLike)
    ? new DataType(TYPE.DATE)
    : new DataType(TYPE.UNKNOW);
};

export const DATEVALUE = (...args: DataType[]) => {
  if (args.length !== 1) {
    return new DataType(TYPE.UNKNOW);
  }
  return args[0].isDateLike
    ? new DataType(TYPE.STRING)
    : new DataType(TYPE.UNKNOW);
};

export const DAY = (...args: DataType[]) => {
  if (args.length !== 1) {
    return new DataType(TYPE.UNKNOW);
  }
  return args[0].isDateLike
    ? new DataType(TYPE.NUMBER)
    : new DataType(TYPE.UNKNOW);
};

export const DAYS = (...args: DataType[]) => {
  if (args.length !== 2) {
    return new DataType(TYPE.UNKNOW);
  }
  return args.every((arg) => arg.isDateLike)
    ? new DataType(TYPE.NUMBER)
    : new DataType(TYPE.UNKNOW);
};

export const DAYS360 = (...args: DataType[]) => {
  if (args.length !== 2) {
    return new DataType(TYPE.UNKNOW);
  }
  return args.every((arg) => arg.isDateLike)
    ? new DataType(TYPE.NUMBER)
    : new DataType(TYPE.UNKNOW);
};

export const EDATE = (...args: DataType[]) => {
  if (args.length !== 2) {
    return new DataType(TYPE.UNKNOW);
  }
  return args[0].isDateLike && args[1].isDecimalLike
    ? new DataType(TYPE.DATE)
    : new DataType(TYPE.UNKNOW);
};

export const EOMONTH = (...args: DataType[]) => {
  if (args.length !== 2) {
    return new DataType(TYPE.UNKNOW);
  }
  return args[0].isDateLike && args[1].isDecimalLike
    ? new DataType(TYPE.DATE)
    : new DataType(TYPE.UNKNOW);
};

const oneArgReturnInt = (...args: DataType[]) => {
  if (args.length !== 1) {
    return new DataType(TYPE.UNKNOW);
  }
  return args[0].isDateLike
    ? new DataType(TYPE.NUMBER)
    : new DataType(TYPE.UNKNOW);
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
    return new DataType(TYPE.UNKNOW);
  }
  return new DataType(TYPE.DATE);
};

export const TODAY = (...args: DataType[]) => {
  if (args.length !== 0) {
    return new DataType(TYPE.UNKNOW);
  }
  return new DataType(TYPE.DATE);
};

export const TIMENOW = (...args: DataType[]) => {
  if (args.length !== 0) {
    return new DataType(TYPE.UNKNOW);
  }
  return new DataType(TYPE.TIME);
};

export const TIMEVALUE = (...args: DataType[]) => {
  if (args.length !== 1) {
    return new DataType(TYPE.UNKNOW);
  }
  if (args[0].inTypes([TYPE.STRING, TYPE.DATE])) {
    return new DataType(TYPE.NUMBER);
  }
  return new DataType(TYPE.UNKNOW);
};

export const WEEKNUM = (...args: DataType[]) => {
  if (args.length !== 2) {
    return new DataType(TYPE.UNKNOW);
  }
  return new DataType(TYPE.NUMBER);
};
