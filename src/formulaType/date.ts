import { TYPE, TYPES } from './types';
import { DateType } from './DateType';
import { inTypes, DATE_TYPE, NUMBER_TYPE, UNKNOW_TYPE } from './common';

export const DATE = (...args: DateType[]): DateType => {
  if (args.length !== 3) {
    return new DateType('unknow');
  }
  return args.every((arg) => arg.isDecimalLike)
    ? new DateType('date')
    : new DateType('unknow');
};

export const DATEVALUE = (...args: DateType[]): DateType => {
  if (args.length !== 1) {
    return new DateType('unknow');
  }
  return args[0].isDateLike ? new DateType('string') : new DateType('unknow');
};

export const DAY = (...args: DateType[]): DateType => {
  if (args.length !== 1) {
    return new DateType('unknow');
  }
  return args[0].isDateLike ? new DateType('integer') : new DateType('unknow');
};

export const DAYS = (...args: DateType[]): DateType => {
  if (args.length !== 2) {
    return new DateType('unknow');
  }
  return args.every((arg) => arg.isDateLike)
    ? new DateType('integer')
    : new DateType('unknow');
};

export const DAYS360 = (...args: DateType[]): DateType => {
  if (args.length !== 2) {
    return new DateType('unknow');
  }
  return args.every((arg) => arg.isDateLike)
    ? new DateType('integer')
    : new DateType('unknow');
};

export const EDATE = (...args: DateType[]): DateType => {
  if (args.length !== 2) {
    return new DateType('unknow');
  }
  return args[0].isDateLike && args[1].isDecimalLike
    ? new DateType('datetime')
    : new DateType('unknow');
};

export const EOMONTH = (...args: DateType[]): DateType => {
  if (args.length !== 2) {
    return new DateType('unknow');
  }
  return args[0].isDateLike && args[1].isDecimalLike
    ? new DateType('datetime')
    : new DateType('unknow');
};

export const HOUR = (...args: DateType[]): DateType => {
  if (args.length !== 1) {
    return new DateType('unknow');
  }
  return args[0].isDateLike ? new DateType('integer') : new DateType('unknow');
};
export const MINUTE = HOUR;

export const ISOWEEKNUM = HOUR;

export const MONTH = HOUR;

export function NOW(...args: DateType[]): DateType {
  if (args.length !== 0) {
    return new DateType('unknow');
  }
  return new DateType('datetime');
}

export function SECOND(arg1: DateType, ...args: any[]): DateType {
  if (inTypes(arg1, DATE_TYPE) && args == null) {
    return new DateType('integer');
  }
  return UNKNOW_TYPE;
}
