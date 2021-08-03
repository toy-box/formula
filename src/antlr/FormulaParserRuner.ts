import { ParseResult } from './types';
import { FormulaParserListener } from './FormulaParserListener';

export interface FormulaParserRuner extends FormulaParserListener {
  getResult: () => ParseResult;
}
