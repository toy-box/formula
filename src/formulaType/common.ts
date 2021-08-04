import uniq from 'lodash.uniq';
import { IDataType } from './types';
import { DataType } from './DateType';

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
