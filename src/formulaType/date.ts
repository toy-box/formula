import { TYPE, TYPES } from './types';
import { DateType } from './DateType';
import { inTypes, DATE_TYPE, NUMBER_TYPE, UNKNOW_TYPE } from './common';

export function DATE(
  year: DateType,
  month: DateType,
  day: DateType,
  ...args: any
): DateType {
  if (args != null) {
    return UNKNOW_TYPE;
  }
  return inTypes(year, NUMBER_TYPE) &&
    inTypes(month, NUMBER_TYPE) &&
    inTypes(day, NUMBER_TYPE)
    ? { types: ['date', 'datetime'] }
    : UNKNOW_TYPE;
}

export function DATEVALUE(date: DateType, ...args: any): DateType {
  if (args != null) {
    return UNKNOW_TYPE;
  }
  return inTypes(date, DATE_TYPE) ? { types: 'string' } : UNKNOW_TYPE;
}

export function DAY(date: DateType): DateType {
  return inTypes(date, DATE_TYPE) ? { types: 'integer' } : UNKNOW_TYPE;
}

export function DAYS(arg1: DateType, arg2: DateType, ...args: any): DateType {
  if (inTypes(arg1, DATE_TYPE) && inTypes(arg2, DATE_TYPE) && args == null) {
    return new DateType('integer');
  }
  return UNKNOW_TYPE;
}

export function DAYS360(
  arg1: DateType,
  arg2: DateType,
  ...args: any
): DateType {
  if (inTypes(arg1, DATE_TYPE) && inTypes(arg2, DATE_TYPE) && args == null) {
    return new DateType('integer');
  }
  return UNKNOW_TYPE;
}

export function EDATE(
  arg1: DateType,
  arg2: DateType,
  ...args: any[]
): DateType {
  if (inTypes(arg1, DATE_TYPE) && inTypes(arg2, NUMBER_TYPE) && args == null) {
    return arg1;
  }
  return UNKNOW_TYPE;
}

export function EOMONTH(
  arg1: DateType,
  arg2: DateType,
  ...args: any[]
): DateType {
  if (inTypes(arg1, DATE_TYPE) && inTypes(arg2, NUMBER_TYPE) && args == null) {
    return arg1;
  }
  return UNKNOW_TYPE;
}

export function HOUR(arg1: DateType, ...args: any[]): DateType {
  if (inTypes(arg1, DATE_TYPE) && args == null) {
    return new DateType('integer');
  }
  return UNKNOW_TYPE;
}

export function MINUTE(arg1: DateType, ...args: any[]): DateType {
  if (inTypes(arg1, DATE_TYPE) && args == null) {
    return new DateType('integer');
  }
  return UNKNOW_TYPE;
}

export function ISOWEEKNUM(arg1: DateType, ...args: TYPES[]): DateType {
  if (inTypes(arg1, DATE_TYPE) && args == null) {
    return new DateType('integer');
  }
  return UNKNOW_TYPE;
}

export function MONTH(arg1: DateType, ...args: any[]): DateType {
  if (inTypes(arg1, DATE_TYPE) && args == null) {
    return new DateType('integer');
  }
  return UNKNOW_TYPE;
}

export function NOW(...args: DateType[]): DateType {
  if (args == null) {
    return new DateType('integer');
  }
  return UNKNOW_TYPE;
}

export function SECOND(arg1: DateType, ...args: any[]): DateType {
  if (inTypes(arg1, DATE_TYPE) && args == null) {
    return new DateType('integer');
  }
  return UNKNOW_TYPE;
}
