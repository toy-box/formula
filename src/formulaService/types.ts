import { DataType } from '../formulaType/DateType';

export interface ParseResult {
  success: boolean;
  result: any;
}

export interface ParseType {
  success: boolean;
  result: DataType;
}
