import { ParseType } from './types';
import { FormulaParserListener } from '../antlr/FormulaParserListener';
import { IFormulaError } from './FormulaErrorListener';
import { DataType } from '../formulaType';

export interface FormulaParserChecker extends FormulaParserListener {
  getResultType: () => ParseType;
  getErrors: () => IFormulaError[];
}

export type DataValueType = DataType | DataType[];

export class ArgumentItem {
  private datatype: DataValueType;
  private ctx: any;
  constructor(datatype: DataValueType, ctx: any = undefined) {
    this.datatype = datatype;
    this.ctx = ctx;
  }

  public getDataType() {
    return this.datatype;
  }

  public getCtx() {
    return this.ctx;
  }
}
