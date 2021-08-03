export type TYPE =
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

export type TYPES = TYPE | TYPE[];

export interface IDateType {
  type: TYPE;
  itemType?: TYPE;
}
