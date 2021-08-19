import {
  AdditiveExpressionContext,
  ArgumentContext,
  ArgumentListContext,
  ArgumentsContext,
  BooleanLiteralExpressionContext,
  DecimalLiteralExpressionContext,
  FunctionContext,
  FunctionExpressionContext,
  MultiplicativeExpressionContext,
  ParenthesizedExpressionContext,
  SingleExpressionContext,
  StatContext,
  StringLiteralExpressionContext,
  VariableExpressionContext,
  CompareExpressionContext,
} from './FormulaParser';
import { FormulaParserChecker } from './FormulaParserChecker';
import { ParserException } from './ParserException';
import { ParseType } from './types';
import { formulaType, TYPES } from '../formulaType';
import { DataType } from '@/formulaType/DateType';

declare type FieldTypeGet = (pattern: string) => DataType;

export class FormulaParserCheckerImpl implements FormulaParserChecker {
  private parseException?: ParserException;
  private parserMap = new WeakMap();
  private getFieldType: FieldTypeGet;
  private parseType: ParseType;

  constructor(getFieldType: FieldTypeGet) {
    this.getFieldType = getFieldType;
    this.parseType = {
      success: false,
      result: new DataType('unknow'),
    };
  }

  exitBooleanLiteralExpression(ctx: BooleanLiteralExpressionContext) {
    this.parserMap.set(ctx, new DataType('boolean'));
  }

  exitDecimalLiteralExpression(ctx: DecimalLiteralExpressionContext) {
    this.parserMap.set(ctx, new DataType('number'));
  }

  exitStringLiteralExpression(ctx: StringLiteralExpressionContext) {
    this.parserMap.set(ctx, new DataType('string'));
  }

  exitVariableExpression(ctx: VariableExpressionContext) {
    this.parserMap.set(
      ctx,
      this.getFieldType(ctx.variable().FieldLiteral().text),
    );
  }

  exitFunction(ctx: FunctionContext) {
    const args = this.parserMap.get(ctx.getChild(1));
    const fn = formulaType[ctx.getChild(0).text.toUpperCase()];
    if (fn == null) {
      this.parseException = new ParserException('function not exists');
      this.parseType = {
        success: false,
        result: new DataType('unknow'),
      };
      this.parserMap.set(ctx, new DataType('unknow'));
    } else {
      this.parserMap.set(ctx, fn(...args));
    }
  }

  exitFunctionExpression(ctx: FunctionExpressionContext) {
    this.parserMap.set(ctx, this.parserMap.get(ctx.getChild(0)));
  }

  exitArguments(ctx: ArgumentsContext) {
    this.parserMap.set(ctx, this.parserMap.get(ctx.getChild(1)));
  }

  exitArgumentList(ctx: ArgumentListContext) {
    const args: any[] = [];
    for (let i = 0; i < ctx.childCount; i += 1) {
      if (i % 2 === 0) {
        args.push(this.parserMap.get(ctx.getChild(i)));
      }
    }
    this.parserMap.set(ctx, args);
  }

  exitArgument(ctx: ArgumentContext) {
    this.parserMap.set(ctx, this.parserMap.get(ctx.getChild(0)));
  }

  exitAdditiveExpression(ctx: AdditiveExpressionContext) {
    const left = this.parserMap.get(ctx.getChild(0)) as DataType;
    const right = this.parserMap.get(ctx.getChild(2)) as DataType;
    if (left.isDecimalLike && right.isDecimalLike) {
      this.parserMap.set(ctx, new DataType('number'));
    } else {
      this.parseException = new ParserException('additive expression error');
      this.parseType = {
        success: false,
        result: new DataType('unknow'),
      };
    }
  }

  exitMultiplicativeExpression(ctx: MultiplicativeExpressionContext) {
    const op = ctx.getChild(1).text;
    const left = this.parserMap.get(ctx.getChild(0)) as DataType;
    const right = this.parserMap.get(ctx.getChild(2)) as DataType;
    if (left.isDecimalLike && right.isDecimalLike) {
      this.parserMap.set(ctx, new DataType('number'));
    } else {
      this.parseException = new ParserException(
        'multiplicative expression error',
      );
      this.parseType = {
        success: false,
        result: new DataType('unknow'),
      };
    }
  }

  exitCompareExpression(ctx: CompareExpressionContext) {
    this.parserMap.set(ctx, new DataType('boolean'));
  }

  exitParenthesizedExpression(ctx: ParenthesizedExpressionContext) {
    this.parserMap.set(ctx, this.parserMap.get(ctx.getChild(1)));
  }

  exitStat(ctx: StatContext) {
    if (this.parseException) {
      this.parseType = {
        success: false,
        result: new DataType('unknow'),
      };
    } else {
      this.parseType = {
        success: true,
        result: this.parserMap.get(ctx.getChild(0)),
      };
    }
  }

  exitSingleExpression(ctx: SingleExpressionContext) {
    this.parserMap.set(ctx, this.parserMap.get(ctx.getChild(0)));
  }

  getType() {
    return this.parseType;
  }
}
