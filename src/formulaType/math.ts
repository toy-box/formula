import { DateType } from './types';
import { notInTypes, inRawTypes, NUMBER_TYPE, inTypes } from './common';

export function MAX(arg: DateType, ...args: DateType[]): DateType;
export function MAX(arg: DateType[]): DateType;
export function MAX(arg: DateType[] | DateType, ...args: DateType[]): DateType {
  if (Array.isArray(arg) && args == null) {
    if (arg.some((dateType) => notInTypes(dateType, NUMBER_TYPE))) {
      return { types: 'unknow' };
    }
    return arg.every((dateType) => inRawTypes(dateType, ['integer']))
      ? { types: 'integer' }
      : { types: 'integer' };
  }
  const mixArgs = [...args].concat(arg);
  if (mixArgs.some((dateType) => inTypes(dateType, NUMBER_TYPE))) {
    return {
      types: 'number',
    };
  }
  return {
    types: 'unknow',
  };
}

export function SUM(arg: DateType, ...args: DateType[]): DateType;
export function SUM(arg: DateType[]): DateType;
export function SUM(arg: DateType[] | DateType, ...args: DateType[]): DateType {
  if (Array.isArray(arg) && args == null) {
    if (arg.some((dateType) => notInTypes(dateType, NUMBER_TYPE))) {
      return { types: 'unknow' };
    }
    return arg.every((dateType) => inRawTypes(dateType, ['integer']))
      ? { types: 'integer' }
      : { types: 'integer' };
  }
  const mixArgs = [...args].concat(arg);
  if (mixArgs.some((dateType) => inTypes(dateType, NUMBER_TYPE))) {
    return {
      types: 'number',
    };
  }
  return {
    types: 'unknow',
  };
}
