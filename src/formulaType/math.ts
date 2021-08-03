import { DateType } from './DateType';

const numbersToNumber = (...args: DateType[]) => {
  if (args.length === 0) {
    return new DateType('unknow');
  }
  return args.every((arg) => arg.isDecimalLike)
    ? new DateType('number')
    : new DateType('unknow');
};

// | 'CEILING'
// | 'CEILINGMATH'
// | 'EXP'
// | 'FLOOR'
// | 'FLOORMATH'
// | 'LN'
// | 'LOG'
// | 'LOG10'
// | 'MOD'
// | 'ROUND'
// | 'ROUNDDOWN'
// | 'ROUNDUP'
// | 'SQRT'

export const MAX = numbersToNumber;

export const MIN = numbersToNumber;

export const SUM = numbersToNumber;

export const ABS = (...args: DateType[]) => {
  if (args.length === 1 && args[0].isDecimalLike) {
    return new DateType('number');
  }
  return new DateType('unknow');
};

export const COUNT = (...args: DateType[]) => {
  return new DateType('integer');
};

export const COUNTA = (...args: DateType[]) => {
  return new DateType('integer');
};

export const POWER = (...args: DateType[]) => {
  if (args.length !== 2) {
    return new DateType('unknow');
  }
  return args.every((arg) => arg.isDecimalLike)
    ? new DateType('number')
    : new DateType('unknow');
};

export const AVERAGE = (...args: DateType[]) => {
  return new DateType('number');
};
