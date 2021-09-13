export type META_TYPE =
  | 'string'
  | 'text'
  | 'number'
  | 'integer'
  | 'date'
  | 'datetime'
  | 'timestamp'
  | 'time'
  | 'boolean'
  | 'array'
  | 'object'
  | 'unknow';

export enum TYPE {
  STRING = 'string',
  NUMBER = 'number',
  DATE = 'date',
  TIME = 'time',
  BOOLEAN = 'boolean',
  OBJECT = 'object',
  ARRAY = 'array',
  UNKNOW = 'unknow',
}

export type TYPES = TYPE | TYPE[];

export interface IDataType {
  type: TYPE;
  itemType?: TYPE;
}
