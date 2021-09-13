import { DataType } from './DateType';
import { uniDataTypes } from './common';
import { TYPE } from './types';

export const AND = (...args: DataType[]) => {
  if (args.length === 0) {
    return new DataType(TYPE.UNKNOW);
  }
  return new DataType(TYPE.BOOLEAN);
};

export const IF = (...args: DataType[]) => {
  if (args.length < 2 && args.length > 3) {
    return new DataType(TYPE.UNKNOW);
  }
  if (args[0].isBoolean || args[0].isDecimalLike) {
    return new DataType(TYPE.BOOLEAN);
  }
  return new DataType(TYPE.UNKNOW);
};

export const NOT = (...args: DataType[]) => {
  return new DataType(TYPE.BOOLEAN);
};

export const OR = (...args: DataType[]) => {
  return new DataType(TYPE.BOOLEAN);
};

export const SWITCH = (...args: DataType[]) => {
  if (args.length < 3) {
    return new DataType(TYPE.UNKNOW);
  }
  const isDefault = (args.length - 3) % 2 === 1;
  const types = [...args.filter((arg, index) => (index - 1) % 2 === 0)];
  isDefault && types.push(args[args.length - 1]);
  return uniDataTypes(...types);
};

export const ISBLANK = (...args: DataType[]) => {
  if (args.length !== 1) {
    return new DataType(TYPE.UNKNOW);
  }
  return new DataType(TYPE.BOOLEAN);
};
