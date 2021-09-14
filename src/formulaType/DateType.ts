import { MetaValueType } from '@toy-box/meta-schema';
import { IDataType, TYPE, TYPES } from './types';

const makeType = (type: TYPE | IDataType) => {
  if (typeof type === 'string') {
    return { type };
  }
  return type;
};

export class DataType {
  private types: IDataType[] = [];
  constructor(types: IDataType | TYPE | (TYPE | IDataType)[]) {
    if (typeof types === 'string') {
      this.types = [{ type: types }];
    } else {
      this.types = Array.isArray(types)
        ? types.map((t) => makeType(t))
        : [makeType(types)];
    }
  }

  getTypes() {
    return this.types;
  }

  checkArrayType(itemTypes: TYPES) {
    const types = Array.isArray(itemTypes) ? itemTypes : [itemTypes];
    return (
      this.isArray &&
      this.types.every((t) => t.itemType != null && types.includes(t.itemType))
    );
  }

  inTypes(types: TYPE[]) {
    return this.types.every((t) => types.includes(t.type));
  }

  get isMixType() {
    return this.types.length > 1;
  }

  get isUnknow() {
    return this.types.some((t) => t.type === TYPE.UNKNOW);
  }

  get isDecimalLike() {
    return this.types.every((t) => t.type === TYPE.NUMBER);
  }

  get isTextLike() {
    return this.types.every((t) => t.type === TYPE.STRING);
  }

  get isBoolean() {
    return this.types.every((t) => t.type === TYPE.BOOLEAN);
  }

  get isDateLike() {
    return this.types.every((t) => t.type === TYPE.DATE);
  }

  get isArray() {
    return this.types.every((t) => t.type === TYPE.ARRAY);
  }
}

export const fromMetaType = (type: MetaValueType) => {
  switch (type) {
    case MetaValueType.STRING:
    case MetaValueType.TEXT:
      return new DataType(TYPE.STRING);
    case MetaValueType.INTEGER:
    case MetaValueType.NUMBER:
    case MetaValueType.PERCENT:
    case MetaValueType.RATE:
      return new DataType(TYPE.NUMBER);
    case MetaValueType.DATE:
    case MetaValueType.DATETIME:
    case MetaValueType.TIMESTAMP:
      return new DataType(TYPE.DATE);
    case MetaValueType.BOOLEAN:
      return new DataType(TYPE.BOOLEAN);
    case MetaValueType.MULTI_OPTION:
      return new DataType(TYPE.ARRAY);
    case MetaValueType.SINGLE_OPTION:
      return new DataType(TYPE.STRING);
    case MetaValueType.OBJECT_ID:
      return new DataType(TYPE.STRING);
    default:
      return new DataType(TYPE.UNKNOW);
  }
};
