import { DataType } from './DateType';

const isNullOrNumber = (arg: DataType) => {
  return arg == null || arg.isDecimalLike;
};

const numbersToNumber = (...args: DataType[]) => {
  if (args.length === 0) {
    return new DataType('unknow');
  }
  return args.every((arg) => arg.isDecimalLike)
    ? new DataType('number')
    : new DataType('unknow');
};

const oneNumberToNumber = (...args: DataType[]) => {
  if (args.length === 1 && args[0].isDecimalLike) {
    return new DataType('number');
  }
  return new DataType('unknow');
};

const twoNumberOpt1ToNumber = (...args: DataType[]) => {
  if (
    args.length >= 1 &&
    args.length <= 2 &&
    args[0].isDecimalLike &&
    isNullOrNumber(args[1])
  ) {
    return new DataType('number');
  }
  return new DataType('unknow');
};

const twoNumberToNumber = (...args: DataType[]) => {
  if (args.length === 2 && args[0].isDecimalLike && args[1].isDecimalLike) {
    return new DataType('number');
  }
  return new DataType('unknow');
};

const threeNumberToNumber = (...args: DataType[]) => {
  if (
    args.length === 3 &&
    args[0].isDecimalLike &&
    args[1].isDecimalLike &&
    args[2].isDecimalLike
  ) {
    return new DataType('number');
  }
  return new DataType('unknow');
};

const threeNumberOpt2ToNumber = (...args: DataType[]) => {
  if (
    args.length >= 1 &&
    args.length <= 3 &&
    args[0].isDecimalLike &&
    isNullOrNumber(args[1]) &&
    isNullOrNumber(args[2])
  ) {
    return new DataType('number');
  }
  return new DataType('unknow');
};

export const CEILING = twoNumberToNumber;

export const CEILINGMATH = threeNumberOpt2ToNumber;

export const EXP = oneNumberToNumber;

export const FLOOR = twoNumberOpt1ToNumber;

export const FLOORMATH = threeNumberOpt2ToNumber;

export const MAX = numbersToNumber;

export const MIN = numbersToNumber;

export const SUM = numbersToNumber;

export const ABS = oneNumberToNumber;

export const COUNT = (...args: DataType[]) => {
  return new DataType('integer');
};

export const COUNTA = (...args: DataType[]) => {
  return new DataType('integer');
};

export const POWER = twoNumberToNumber;

export const AVERAGE = (...args: DataType[]) => {
  return new DataType('number');
};

export const LN = oneNumberToNumber;

export const LOG = twoNumberToNumber;

export const LOG10 = oneNumberToNumber;

export const MOD = twoNumberToNumber;

export const ROUND = twoNumberToNumber;

export const ROUNDDOWN = twoNumberToNumber;

export const ROUNDUP = twoNumberToNumber;

export const SQRT = oneNumberToNumber;
