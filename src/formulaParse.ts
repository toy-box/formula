import {
  CharStreams,
  CommonTokenStream,
  FormulaLexer,
  FormulaParser,
  FormulaParserRuner,
  FormulaParserRunerImpl,
  ParseTreeWalker,
} from './antlr';
import { FormulaParserCheckerImpl } from './antlr/FormulaParserCheckerImpl';
import { FormulaParserChecker } from './antlr/FormulaParserChecker';
import { DataType } from './formulaType/DateType';

export function formulaParse(
  formula: string,
  getFieldValue: (pattern: string) => any = (pattern: string) => undefined,
) {
  const chars = CharStreams.fromString(formula);
  const lexer = new FormulaLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new FormulaParser(tokens);
  parser.buildParseTree = true;
  const tree = parser.stat();
  const listener: FormulaParserRuner = new FormulaParserRunerImpl(
    getFieldValue,
  );
  ParseTreeWalker.DEFAULT.walk(listener, tree);
  return listener.getResult();
}

export function formulaParseType(
  formula: string = '',
  getFieldType: (pattern: string) => DataType,
) {
  const chars = CharStreams.fromString(formula);
  const lexer = new FormulaLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new FormulaParser(tokens);
  parser.buildParseTree = true;
  const tree = parser.stat();
  const listener: FormulaParserChecker = new FormulaParserCheckerImpl(
    getFieldType,
  );
  ParseTreeWalker.DEFAULT.walk(listener, tree);
  return listener.getType();
}

export function formulaTreeTest(formula: string) {
  try {
    const chars = CharStreams.fromString(formula);
    const lexer = new FormulaLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new FormulaParser(tokens);
    parser.buildParseTree = true;
    const tree = parser.stat();
    return true;
  } catch {
    return false;
  }
}
