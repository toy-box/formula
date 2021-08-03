export type TYPE =
  | 'string'
  | 'text'
  | 'number'
  | 'integer'
  | 'date'
  | 'datetime'
  | 'timestamp'
  | 'boolean'
  | 'array'
  | 'object'
  | 'unknow';

export type TYPES = TYPE | TYPE[];

export interface IDateType {
  type: TYPE;
  itemType?: TYPE;
}
