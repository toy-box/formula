export type TYPE =
  | 'string'
  | 'text'
  | 'number'
  | 'integer'
  | 'date'
  | 'datetime'
  | 'timestamp'
  | 'boolean'
  | 'unknow';

export type TYPES = TYPE | TYPE[];

export interface DateType {
  types: TYPES;
}
