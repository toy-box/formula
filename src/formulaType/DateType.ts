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
    return this.types.find((t) => t.type === 'unknow');
  }

  get isDecimalLike() {
    return this.types.every((t) => ['number', 'integer'].includes(t.type));
  }

  get isTextLike() {
    return this.types.every((t) => ['string', 'text'].includes(t.type));
  }

  get isBoolean() {
    return this.types.every((t) => ['boolean'].includes(t.type));
  }

  get isDateLike() {
    return this.types.every((t) =>
      ['date', 'datetime', 'timestamp'].includes(t.type),
    );
  }

  get isArray() {
    return this.types.every((t) => t.type === 'array');
  }
}
