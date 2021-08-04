import { DataType } from './DateType';

export const CONCATENATE = (...args: DataType[]) => {
  if (
    args.length > 0 &&
    args.every((arg) => arg.isDecimalLike || arg.isTextLike)
  ) {
    return new DataType('string');
  }
  return new DataType('unknow');
};

export const EXACT = (...args: DataType[]) => {
  if (args.length === 2 && args.every((arg) => arg.isTextLike)) {
    return new DataType('string');
  }
  return new DataType('unknow');
};

export const FIND = (...args: DataType[]) => {
  if (
    args.length >= 2 &&
    args.length <= 3 &&
    args[0].isTextLike &&
    args[1].isTextLike &&
    (args[2] == null || args[2].isDecimalLike)
  ) {
    return new DataType('string');
  }
  return new DataType('unknow');
};

export const LEFT = (...args: DataType[]) => {
  if (
    args.length >= 1 &&
    args.length <= 2 &&
    args[0].isTextLike &&
    (args[1] == null || args[1].isDecimalLike)
  ) {
    return new DataType('string');
  }
  return new DataType('unknow');
};

export const RIGHT = (...args: DataType[]) => {
  if (
    args.length >= 1 &&
    args.length <= 2 &&
    args[0].isTextLike &&
    (args[1] == null || args[1].isDecimalLike)
  ) {
    return new DataType('string');
  }
  return new DataType('unknow');
};

export const LEN = (...args: DataType[]) => {
  if (args.length === 1 && args[0].isTextLike) {
    return new DataType('number');
  }
  return new DataType('unknow');
};

export const LOWER = (...args: DataType[]) => {
  if (args.length === 1 && args[0].isTextLike) {
    return new DataType('string');
  }
  return new DataType('unknow');
};

export const UPPER = (...args: DataType[]) => {
  if (args.length === 1 && args[0].isTextLike) {
    return new DataType('string');
  }
  return new DataType('unknow');
};

export const NUMBERVALUE = (...args: DataType[]) => {
  if (
    (args.length >= 2 &&
      args.length <= 3 &&
      args[0].isTextLike &&
      args[0].isDecimalLike,
    args[0].isDecimalLike)
  ) {
    return new DataType('string');
  }
  return new DataType('unknow');
};

export const MID = (...args: DataType[]) => {
  if (
    (args.length === 3 && args[0].isTextLike && args[0].isDecimalLike,
    args[0].isDecimalLike)
  ) {
    return new DataType('string');
  }
  return new DataType('unknow');
};

export const PROPER = (...args: DataType[]) => {
  if (args.length === 1 && args[0].isTextLike) {
    return new DataType('string');
  }
  return new DataType('unknow');
};

export const REPT = (...args: DataType[]) => {
  if (args.length === 2 && args[0].isTextLike && args[1].isDecimalLike) {
    return new DataType('string');
  }
  return new DataType('unknow');
};

export const SEARCH = (...args: DataType[]) => {
  if (args.length === 2 && args[0].isTextLike && args[1].isTextLike) {
    return new DataType('integer');
  }
  return new DataType('unknow');
};

export const SPLIT = (...args: DataType[]) => {
  if (args.length === 2 && args[0].isTextLike && args[1].isTextLike) {
    return new DataType('string');
  }
  return new DataType('unknow');
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
    return new DataType('string');
  }
  return new DataType('unknow');
};

export const TRIM = (...args: DataType[]) => {
  if (args.length === 1 && args[0].isTextLike) {
    return new DataType('string');
  }
  return new DataType('unknow');
};

export const TRIM = (...args: DataType[]) => {
  if (args.length === 1 && args[0].isTextLike) {
    return new DataType('string');
  }
  return new DataType('unknow');
};
