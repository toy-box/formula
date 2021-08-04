import {
  DATE,
  DATEVALUE,
  DAY,
  DAYS,
  DAYS360,
  EDATE,
  EOMONTH,
  HOUR,
  MINUTE,
  ISOWEEKNUM,
  MONTH,
  NOW,
} from './date';
import { SUM, MAX } from './math';
import { DataType } from './DateType';

export const formulaType: Record<string, (...args: any) => DataType> = {
  DATE,
  DATEVALUE,
  DAY,
  DAYS,
  DAYS360,
  EDATE,
  EOMONTH,
  HOUR,
  MINUTE,
  ISOWEEKNUM,
  MONTH,
  NOW,
  SUM,
  MAX,
};
