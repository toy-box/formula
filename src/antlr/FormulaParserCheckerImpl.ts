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
  SingleExpressionContext,
  StatContext,
  StringLiteralExpressionContext,
  VariableExpressionContext,
} from './FormulaParser';
import { FormulaParserChecker } from './FormulaParserChecker';
import { ParserException } from './ParserException';
import { ParseType } from './types';
import {
  formulaType,
  TYPES,
  inTypes,
  DATE_TYPE,
  mixTypes,
  NUMBER_TYPE,
} from '../formulaType';

declare type FieldTypeGet = (pattern: string) => TYPES;

export class FormulaParserCheckerImpl implements FormulaParserChecker {
  private parseException?: ParserException;
  private parserMap = new WeakMap();
  private getFieldType: FieldTypeGet;
  private parseType: ParseType;

  constructor(getFieldType: FieldTypeGet) {
    this.getFieldType = getFieldType;
    this.parseType = {
      success: false,
      result: 'unknow',
    };
  }

  exitBooleanLiteralExpression(ctx: BooleanLiteralExpressionContext) {
    this.parserMap.set(ctx, 'boolean');
  }

  exitDecimalLiteralExpression(ctx: DecimalLiteralExpressionContext) {
    console.log('exitDecimalLiteralExpression');
    this.parserMap.set(ctx, NUMBER_TYPE);
  }

  exitStringLiteralExpression(ctx: StringLiteralExpressionContext) {
    this.parserMap.set(ctx, 'string');
  }

  exitVariableExpression(ctx: VariableExpressionContext) {
    this.parserMap.set(
      ctx,
      this.getFieldType(ctx.variable().FieldLiteral().text),
    );
  }

  exitFunction(ctx: FunctionContext) {
    const args = this.parserMap.get(ctx.getChild(1));
    const fn = formulaType[ctx.getChild(0).text.toUpperCase()] as (
      ...args: any[]
    ) => any;
    console.log('exitFunction', args);
    if (fn == null) {
      this.parseException = new ParserException('function not exists');
      this.parseType = {
        success: false,
        result: 'unknow',
      };
      this.parserMap.set(ctx, 'unknow');
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
    const left = this.parserMap.get(ctx.getChild(0));
    const right = this.parserMap.get(ctx.getChild(2));
    if (inTypes(left, NUMBER_TYPE) && inTypes(right, NUMBER_TYPE)) {
      this.parserMap.set(ctx, mixTypes(left, right));
    } else {
      this.parseException = new ParserException('additive expression error');
      this.parseType = {
        success: false,
        result: 'unknow',
      };
    }
  }

  exitMultiplicativeExpression(ctx: MultiplicativeExpressionContext) {
    const op = ctx.getChild(1).text;
    const left = this.parserMap.get(ctx.getChild(0));
    const right = this.parserMap.get(ctx.getChild(2));
    if (inTypes(left, DATE_TYPE) && inTypes(right, DATE_TYPE)) {
      this.parserMap.set(ctx, ['number', 'integer']);
    } else {
      this.parseException = new ParserException(
        'multiplicative expression error',
      );
      this.parseType = {
        success: false,
        result: 'unknow',
      };
    }
  }

  exitStat(ctx: StatContext) {
    if (this.parseException) {
      this.parseType = {
        success: false,
        result: 'unknow',
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
