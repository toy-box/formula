import { ParseResult } from './types';
import { FormulaParserListener } from '../antlr/FormulaParserListener';

export interface FormulaParserRuner extends FormulaParserListener {
  getResult: () => ParseResult;
}
