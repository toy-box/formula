import { FormulaType } from '@formulajs/formulajs';
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
import { ParserException } from './ParserException';
import { ParseResult } from './types';
import { FormulaParserRuner } from './FormulaParserRuner';
import { formulaPlus } from '../formula';

declare type FieldValueGet = (pattern: string) => any;

export class FormulaParserRunerImpl implements FormulaParserRuner {
  private parseResult: ParseResult = {
    success: false,
    result: undefined,
  };
  private parseException?: ParserException;
  private parserMap = new WeakMap();
  private getFieldValue: FieldValueGet;

  constructor(getFieldValue: FieldValueGet) {
    this.getFieldValue = getFieldValue;
  }

  exitBooleanLiteralExpression(ctx: BooleanLiteralExpressionContext) {
    this.parserMap.set(
      ctx,
      ctx.BooleanLiteral().text.toUpperCase() === 'TRUE' ? true : false,
    );
  }

  exitDecimalLiteralExpression(ctx: DecimalLiteralExpressionContext) {
    this.parserMap.set(ctx, Number.parseFloat(ctx.DecimalLiteral().text));
  }

  exitStringLiteralExpression(ctx: StringLiteralExpressionContext) {
    this.parserMap.set(
      ctx,
      ctx
        .StringLiteral()
        .text.substring(1, ctx.StringLiteral().text.length - 1),
    );
  }

  exitVariableExpression(ctx: VariableExpressionContext) {
    this.parserMap.set(
      ctx,
      this.getFieldValue(ctx.variable().FieldLiteral().text),
    );
  }

  exitFunction(ctx: FunctionContext) {
    const args = this.parserMap.get(ctx.getChild(1)) as number[];
    const fn = formulaPlus[
      ctx.getChild(0).text.toUpperCase() as FormulaType
    ] as (...args: any[]) => any;
    if (fn == null) {
      this.parseException = new ParserException('function not exists');
      this.parseResult = {
        success: false,
        result: new ParserException('function not exists'),
      };
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
    const op = ctx.getChild(1).text;
    const left = this.parserMap.get(ctx.getChild(0));
    const right = this.parserMap.get(ctx.getChild(2));
    this.parserMap.set(ctx, op === '+' ? left + right : left - right);
  }

  exitMultiplicativeExpression(ctx: MultiplicativeExpressionContext) {
    const op = ctx.getChild(1).text;
    const left = this.parserMap.get(ctx.getChild(0));
    const right = this.parserMap.get(ctx.getChild(2));
    this.parserMap.set(ctx, op === '*' ? left * right : left / right);
  }

  exitCompareExpression(ctx: CompareExpressionContext) {
    const op = ctx.getChild(1).text;
    const left = this.parserMap.get(ctx.getChild(0));
    const right = this.parserMap.get(ctx.getChild(2));
    switch (op) {
      case '=':
        return this.parserMap.set(ctx, left === right);
      case '<>':
        return this.parserMap.set(ctx, left !== right);
      case '>':
        return this.parserMap.set(ctx, left > right);
      case '>=':
        return this.parserMap.set(ctx, left >= right);
      case '<':
        return this.parserMap.set(ctx, left < right);
      case '<=':
        return this.parserMap.set(ctx, left <= right);
      default:
        return this.parserMap.set(ctx, false);
    }
  }

  exitParenthesizedExpression(ctx: ParenthesizedExpressionContext) {
    this.parserMap.set(ctx, this.parserMap.get(ctx.getChild(1)));
  }

  exitStat(ctx: StatContext) {
    if (this.parseException) {
      this.parseResult = {
        success: false,
        result: this.parseException,
      };
    } else {
      this.parseResult = {
        success: true,
        result: this.parserMap.get(ctx.getChild(0)),
      };
    }
  }

  exitSingleExpression(ctx: SingleExpressionContext) {
    this.parserMap.set(ctx, this.parserMap.get(ctx.getChild(0)));
  }

  getResult() {
    return this.parseResult;
  }
}
