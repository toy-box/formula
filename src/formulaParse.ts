import { BailErrorStrategy } from 'antlr4ts';
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
import { CountErrorListener } from './antlr/CountErrorListener';
import { TYPE } from './formulaType';

export function formulaParse(
  formula: string,
  getFieldValue: (pattern: string) => any = (pattern: string) => undefined,
) {
  const lexerErrors = [];
  const chars = CharStreams.fromString(formula);
  const lexer = new FormulaLexer(chars);
  lexer.addErrorListener(new CountErrorListener((e) => lexerErrors.push(e)));
  const tokens = new CommonTokenStream(lexer);
  const parser = new FormulaParser(tokens);
  parser.errorHandler = new BailErrorStrategy();
  parser.buildParseTree = true;
  const tree = parser.stat();
  const listener: FormulaParserRuner = new FormulaParserRunerImpl(
    getFieldValue,
  );
  ParseTreeWalker.DEFAULT.walk(listener, tree);
  if (lexerErrors.length > 0 || parser.numberOfSyntaxErrors > 0) {
    return {
      success: false,
      result: null,
    };
  }
  return listener.getResult();
}

export function formulaParseType(
  formula: string = '',
  getFieldType: (pattern: string) => DataType,
) {
  const lexerErrors = [];
  const chars = CharStreams.fromString(formula);
  const lexer = new FormulaLexer(chars);
  lexer.addErrorListener(new CountErrorListener((e) => lexerErrors.push(e)));
  const tokens = new CommonTokenStream(lexer);
  const parser = new FormulaParser(tokens);
  parser.errorHandler = new BailErrorStrategy();
  parser.buildParseTree = true;
  const tree = parser.stat();
  const listener: FormulaParserChecker = new FormulaParserCheckerImpl(
    getFieldType,
  );
  ParseTreeWalker.DEFAULT.walk(listener, tree);
  if (lexerErrors.length > 0 || parser.numberOfSyntaxErrors > 0) {
    return {
      success: false,
      result: new DataType(TYPE.UNKNOW),
    };
  }
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
