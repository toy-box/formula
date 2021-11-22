import uniq from 'lodash.uniq';
import { IDataType } from './types';
import { DataType } from './DateType';
import {
  ArgumentErrorModel,
  ArugumentErrorCode,
} from '../formulaService/exception/ValidateException';

export const uniDataType = (dateType1: DataType, dateType2: DataType) => {
  new DataType([...dateType1.getTypes(), ...dateType2.getTypes()]);
};

export const uniDataTypes = (...dataTypes: DataType[]) => {
  const types: IDataType[] = [];
  dataTypes.forEach((type) => {
    types.push(...type.getTypes());
  });
  return new DataType(types);
};

export const argsNumWrongOrNull = (...args: DataType[]) => {
  return new ArgumentErrorModel(
    args.length == 0
      ? ArugumentErrorCode.PARAM_NULL
      : ArugumentErrorCode.PARAM_COUNT,
    '参数个数错误',
    args.length - 1,
  );
};
