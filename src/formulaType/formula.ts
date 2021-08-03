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
import { TYPES, DateType } from './types';

export const formulaType: Record<string, (...args: any) => DateType> = {
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
