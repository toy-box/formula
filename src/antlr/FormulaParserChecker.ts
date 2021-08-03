import { ParseType } from './types';
import { FormulaParserListener } from './FormulaParserListener';

export interface FormulaParserChecker extends FormulaParserListener {
  getType: () => ParseType;
}
