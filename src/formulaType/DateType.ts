import uniq from 'lodash.uniq';
import { IDateType, TYPES, TYPE } from './types';
import { UNKNOW_TYPE } from './common';

const makeType = (type: TYPE | IDateType) => {
  if (typeof type === 'string') {
    return { type };
  }
  return type;
};

export class DateType {
  types: IDateType[] = [UNKNOW_TYPE];
  constructor(types: IDateType | TYPE | (TYPE | IDateType)[]) {
    if (typeof types === 'string') {
      this.types = [{ type: types }];
    } else {
      this.types = Array.isArray(types)
        ? types.map((t) => makeType(t))
        : [makeType(types)];
    }
  }

  checkArrayType(itemType: string) {
    return this.types.every(
      (t) => t.type === 'array' && t.itemType === itemType,
    );
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
    return this.types.every((t) => ['array'].includes(t.type));
  }
}
