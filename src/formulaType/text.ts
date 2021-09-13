import { DataType } from './DateType';
import { TYPE } from './types';

export const CONCATENATE = (...args: DataType[]) => {
  if (
    args.length > 0 &&
    args.every((arg) => arg.isDecimalLike || arg.isTextLike)
  ) {
    return new DataType(TYPE.STRING);
  }
  return new DataType(TYPE.UNKNOW);
};

export const EXACT = (...args: DataType[]) => {
  if (args.length === 2 && args.every((arg) => arg.isTextLike)) {
    return new DataType(TYPE.STRING);
  }
  return new DataType(TYPE.UNKNOW);
};

export const FIND = (...args: DataType[]) => {
  if (
    args.length >= 2 &&
    args.length <= 3 &&
    args[0].isTextLike &&
    args[1].isTextLike &&
    (args[2] == null || args[2].isDecimalLike)
  ) {
    return new DataType(TYPE.STRING);
  }
  return new DataType(TYPE.UNKNOW);
};

export const LEFT = (...args: DataType[]) => {
  if (
    args.length >= 1 &&
    args.length <= 2 &&
    args[0].isTextLike &&
    (args[1] == null || args[1].isDecimalLike)
  ) {
    return new DataType(TYPE.STRING);
  }
  return new DataType(TYPE.UNKNOW);
};

export const RIGHT = (...args: DataType[]) => {
  if (
    args.length >= 1 &&
    args.length <= 2 &&
    args[0].isTextLike &&
    (args[1] == null || args[1].isDecimalLike)
  ) {
    return new DataType(TYPE.STRING);
  }
  return new DataType(TYPE.UNKNOW);
};

export const LEN = (...args: DataType[]) => {
  if (args.length === 1 && args[0].isTextLike) {
    return new DataType(TYPE.STRING);
  }
  return new DataType(TYPE.UNKNOW);
};

export const LOWER = (...args: DataType[]) => {
  if (args.length === 1 && args[0].isTextLike) {
    return new DataType(TYPE.STRING);
  }
  return new DataType(TYPE.UNKNOW);
};

export const UPPER = (...args: DataType[]) => {
  if (args.length === 1 && args[0].isTextLike) {
    return new DataType(TYPE.STRING);
  }
  return new DataType(TYPE.UNKNOW);
};

export const NUMBERVALUE = (...args: DataType[]) => {
  if (
    (args.length >= 2 &&
      args.length <= 3 &&
      args[0].isTextLike &&
      args[0].isDecimalLike,
    args[0].isDecimalLike)
  ) {
    return new DataType(TYPE.STRING);
  }
  return new DataType(TYPE.UNKNOW);
};

export const MID = (...args: DataType[]) => {
  if (
    (args.length === 3 && args[0].isTextLike && args[0].isDecimalLike,
    args[0].isDecimalLike)
  ) {
    return new DataType(TYPE.STRING);
  }
  return new DataType(TYPE.UNKNOW);
};

export const PROPER = (...args: DataType[]) => {
  if (args.length === 1 && args[0].isTextLike) {
    return new DataType(TYPE.STRING);
  }
  return new DataType(TYPE.UNKNOW);
};

export const REPT = (...args: DataType[]) => {
  if (args.length === 2 && args[0].isTextLike && args[1].isDecimalLike) {
    return new DataType(TYPE.STRING);
  }
  return new DataType(TYPE.UNKNOW);
};

export const SEARCH = (...args: DataType[]) => {
  if (args.length === 2 && args[0].isTextLike && args[1].isTextLike) {
    return new DataType(TYPE.NUMBER);
  }
  return new DataType(TYPE.UNKNOW);
};

export const SPLIT = (...args: DataType[]) => {
  if (args.length === 2 && args[0].isTextLike && args[1].isTextLike) {
    return new DataType(TYPE.STRING);
  }
  return new DataType(TYPE.UNKNOW);
};

export const SUBSTITUTE = (...args: DataType[]) => {
  if (
    args.length >= 3 &&
    args.length <= 4 &&
    args[0].isTextLike &&
    args[1].isTextLike &&
    args[2].isTextLike &&
    args[3] == null &&
    args[3].isDecimalLike
  ) {
    return new DataType(TYPE.STRING);
  }
  return new DataType(TYPE.UNKNOW);
};

export const TRIM = (...args: DataType[]) => {
  if (args.length === 1 && args[0].isTextLike) {
    return new DataType(TYPE.STRING);
  }
  return new DataType(TYPE.UNKNOW);
};

export const INCLUDES = (...args: DataType[]) => {
  if (
    args.length === 2 &&
    args[1].isTextLike &&
    args[0].checkArrayType(TYPE.STRING)
  ) {
    return new DataType(TYPE.STRING);
  }
  return new DataType(TYPE.UNKNOW);
};
