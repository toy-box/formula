import { DataType } from './DateType';
import { uniDataTypes } from './common';

export const AND = (...args: DataType[]) => {
  if (args.length === 0) {
    return new DataType('unknow');
  }
  return new DataType('boolean');
};

export const IF = (...args: DataType[]) => {
  if (args.length < 2 && args.length > 3) {
    return new DataType('unknow');
  }
  if (args[0].isBoolean || args[0].isDecimalLike) {
    return new DataType('boolean');
  }
  return new DataType('unknow');
};

export const NOT = (...args: DataType[]) => {
  return new DataType('boolean');
};

export const OR = (...args: DataType[]) => {
  return new DataType('boolean');
};

export const SWITCH = (...args: DataType[]) => {
  if (args.length < 3) {
    return new DataType('unknow');
  }
  const isDefault = (args.length - 3) % 2 === 1;
  const types = [...args.filter((arg, index) => (index - 1) % 2 === 0)];
  isDefault && types.push(args[args.length - 1]);
  return uniDataTypes(...types);
};
