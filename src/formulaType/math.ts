import { DateType } from './DateType';

export function MAX(...args: DateType[]): DateType {
  if (args.length === 0) {
    return new DateType('unknow');
  }
  return args.every((arg) => arg.isDecimalLike)
    ? new DateType('number')
    : new DateType('unknow');
}

export function SUM(...args: DateType[]): DateType {
  if (args.length === 0) {
    return new DateType('unknow');
  }
  return args.every((arg) => arg.isDecimalLike)
    ? new DateType('number')
    : new DateType('unknow');
}
