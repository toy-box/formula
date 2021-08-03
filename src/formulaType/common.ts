import uniq from 'lodash.uniq';
import { TYPE, TYPES, IDateType } from './types';

export function numbersFn(arg: TYPE[] | TYPE, ...args: TYPE[]) {
  if (Array.isArray(arg) && args == null) {
    if (arg.some((val) => val !== 'number' && val !== 'integer')) {
      return 'unknow';
    }
    return arg.every((val) => val === 'integer') ? 'integer' : 'number';
  }
  const mixArgs = [...args].concat(arg);
  if (mixArgs.some((val) => val !== 'number' && val !== 'integer')) {
    return 'unknow';
  }
  return mixArgs.every((val) => val === 'integer') ? 'integer' : 'number';
}

export function arrTypes(dateType: DateType) {
  return Array.isArray(dateType.types) ? dateType.types : [dateType.types];
}

export function isType(dateType: DateType, type: TYPE) {
  if (Array.isArray(dateType.types)) {
    return dateType.types.every((t) => t === type);
  }
  return dateType.types === type;
}

export function inRawTypes(dateType: DateType, types: TYPES) {
  const typesArr = arrTypes(dateType);
  const inTypesArr = Array.isArray(types) ? types : [types];
  return typesArr.every((t) => inTypesArr.some((inT) => inT === t));
}

export function notInRawTypes(dateType: DateType, types: TYPES) {
  const typesArr = arrTypes(dateType);
  const notInTypesArr = Array.isArray(types) ? types : [types];
  return typesArr.every((t) => !notInTypesArr.some((inT) => inT === t));
}

export function inTypes(dateType: DateType, inTypes: DateType) {
  const typesArr = arrTypes(dateType);
  const inTypesArr = arrTypes(inTypes);
  return typesArr.every((t) => inTypesArr.some((inT) => inT === t));
}

export function notInTypes(dateType: DateType, notIn: DateType) {
  const typesArr = arrTypes(dateType);
  const notInTypesArr = arrTypes(notIn);
  return typesArr.every((t) => !notInTypesArr.some((inT) => inT === t));
}

export function mixTypes(type1: DateType, type2: DateType): DateType {
  return { types: uniq([...arrTypes(type1), ...arrTypes(type2)]) };
}

export const STRING_TYPE: IDateType = { type: ['string', 'text'] };
export const DATE_TYPE: DateType = { type: ['date', 'datetime', 'timestamp'] };
export const NUMBER_TYPE: DateType = { types: ['integer', 'number'] };
export const UNKNOW_TYPE: DateType = { type: 'unknow' };
