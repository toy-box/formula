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
} from '../antlr/FormulaParser';
import { ArgumentItem, FormulaParserChecker } from './FormulaParserChecker';
import { ParserException } from './exception/ParserException';
import { ParseType } from './types';
import { formulaType, DataType, TYPE, fromMetaType } from '../formulaType';
import { IFormulaError } from './FormulaErrorListener';
import {
  ArgumentErrorModel,
  ArugumentErrorCode,
  GetArugumentErrorCodeMsg,
  ValidateException,
} from './exception/ValidateException';

export type FieldTypeGet = (pattern: string) => DataType;

export class FormulaParserCheckerImpl implements FormulaParserChecker {
  private parseException?: ParserException;
  private parserMap = new WeakMap();
  private parseType: ParseType;
  private errors: IFormulaError[];
  private getFieldType: FieldTypeGet;
  private formulaRtType: DataType;

  constructor(getFieldType: FieldTypeGet, returnType: DataType) {
    this.getFieldType = getFieldType;
    this.formulaRtType = returnType;
    this.parseType = {
      success: false,
      result: new DataType(TYPE.UNKNOW),
    };
    this.errors = [];
  }

  exitBooleanLiteralExpression(ctx: BooleanLiteralExpressionContext) {
    this.parserMap.set(ctx, new ArgumentItem(new DataType(TYPE.BOOLEAN), ctx));
  }

  exitDecimalLiteralExpression(ctx: DecimalLiteralExpressionContext) {
    this.parserMap.set(ctx, new ArgumentItem(new DataType(TYPE.NUMBER), ctx));
  }

  exitStringLiteralExpression(ctx: StringLiteralExpressionContext) {
    this.parserMap.set(ctx, new ArgumentItem(new DataType(TYPE.STRING), ctx));
  }

  exitVariableExpression(ctx: VariableExpressionContext) {
    const text = ctx.variable().FieldLiteral().text;
    const dtype = this.getFieldType(text); //???????????????
    // const dtype = getVariableType(this.schemaMapModel, text, text.indexOf('$') > -1 ? 0 : 1);
    this.parserMap.set(ctx, new ArgumentItem(dtype, ctx));
  }

  exitFunction(ctx: FunctionContext) {
    const argsItem = this.parserMap.get(ctx.getChild(1)).datatype;
    const args =
      ctx.getChild(1).childCount > 2
        ? argsItem.map((x: { datatype: any }) => x.datatype)
        : [];
    const fn = formulaType[ctx.getChild(0).text.toUpperCase()];
    if (fn == undefined) {
      this.errors.push({
        code: ArugumentErrorCode.FUNCTION_NULL,
        endColumn: ctx.stop!.stopIndex + 2,
        endLineNumber: ctx.stop!.line,
        message: `${ctx.text},?????????????????????`,
        startColumn: ctx.stop!.charPositionInLine + 1,
        startLineNumber: ctx.stop!.line,
      });
      this.parserMap.set(ctx, new ArgumentItem(new DataType(TYPE.UNKNOW), ctx));
    } else {
      try {
        const funcVal = fn(...args);
        this.parserMap.set(ctx, new ArgumentItem(funcVal, ctx));
      } catch (err) {
        if (err instanceof ValidateException) {
          this.parserMap.set(
            ctx,
            new ArgumentItem(new DataType(TYPE.UNKNOW), ctx),
          );
          err.getErrors().forEach((x, i) => {
            //?????????????????????????????????
            if (
              x.code == ArugumentErrorCode.PARAM_NULL ||
              x.code == ArugumentErrorCode.PARAM_COUNT
            ) {
              this.errors.push({
                code: x.code,
                endColumn: ctx.stop!.stopIndex + 2,
                endLineNumber: ctx.stop!.line,
                message: `${GetArugumentErrorCodeMsg(x.code)}`,
                startColumn: ctx.stop!.charPositionInLine + 1,
                startLineNumber: ctx.stop!.line,
              });
            } else {
              const param_ctx = argsItem[x.idx].ctx;
              this.errors.push({
                code: x.code,
                endColumn: param_ctx.stop.stopIndex + 2,
                endLineNumber: param_ctx.stop.line,
                message: `${param_ctx.text},${x.msg},${x.detail}`,
                startColumn: param_ctx.stop.charPositionInLine + 1,
                startLineNumber: param_ctx.stop.line,
              });
            }
          });
        }
      }
    }
  }

  exitFunctionExpression(ctx: FunctionExpressionContext) {
    this.parserMap.set(
      ctx,
      new ArgumentItem(this.parserMap.get(ctx.getChild(0)).getDataType(), ctx),
    );
  }

  exitArguments(ctx: ArgumentsContext) {
    if (ctx.childCount == 2) {
      //??????????????????
      this.parserMap.set(ctx, new ArgumentItem(new DataType(TYPE.NULL), ctx));
      return;
    }
    this.parserMap.set(
      ctx,
      new ArgumentItem(this.parserMap.get(ctx.getChild(1)).getDataType(), ctx),
    );
  }

  exitArgumentList(ctx: ArgumentListContext) {
    const args: any[] = [];
    for (let i = 0; i < ctx.childCount; i += 1) {
      if (i % 2 === 0) {
        args.push(this.parserMap.get(ctx.getChild(i)));
      }
    }
    this.parserMap.set(ctx, new ArgumentItem(args, ctx));
  }

  exitArgument(ctx: ArgumentContext) {
    this.parserMap.set(
      ctx,
      new ArgumentItem(this.parserMap.get(ctx.getChild(0)).getDataType(), ctx),
    );
  }

  exitAdditiveExpression(ctx: AdditiveExpressionContext) {
    const left = this.parserMap.get(ctx.getChild(0)).getDataType() as DataType;
    const right = this.parserMap.get(ctx.getChild(2)).getDataType() as DataType;
    if (left.isDecimalLike && right.isDecimalLike) {
      this.parserMap.set(ctx, new ArgumentItem(new DataType(TYPE.NUMBER), ctx));
    } else {
      if (!left.isDecimalLike) {
        const param_ctx = this.parserMap.get(ctx.getChild(0)).getCtx();
        const rightModel = new ArgumentErrorModel(
          ArugumentErrorCode.PARAM_TYPE,
          '???????????????',
          0,
        );
        this.errors.push({
          code: rightModel.code,
          endColumn: param_ctx.stop.stopIndex + 2,
          endLineNumber: param_ctx.stop.line,
          message: `${param_ctx.text},${rightModel.msg},${rightModel.detail}`,
          startColumn: param_ctx.stop.charPositionInLine + 1,
          startLineNumber: param_ctx.stop.line,
        });
      }
      if (!right.isDecimalLike) {
        const param_ctx = this.parserMap.get(ctx.getChild(2)).getCtx();
        const rightModel = new ArgumentErrorModel(
          ArugumentErrorCode.PARAM_TYPE,
          '???????????????',
          0,
        );
        this.errors.push({
          code: rightModel.code,
          endColumn: param_ctx.stop.stopIndex + 2,
          endLineNumber: param_ctx.stop.line,
          message: `${param_ctx.text},${rightModel.msg},${rightModel.detail}`,
          startColumn: param_ctx.stop.charPositionInLine + 1,
          startLineNumber: param_ctx.stop.line,
        });
      }
      this.parserMap.set(ctx, new ArgumentItem(new DataType(TYPE.UNKNOW), ctx));
    }
  }

  exitMultiplicativeExpression(ctx: MultiplicativeExpressionContext) {
    const left = this.parserMap.get(ctx.getChild(0)).getDataType() as DataType;
    const right = this.parserMap.get(ctx.getChild(2)).getDataType() as DataType;
    if (left.isDecimalLike && right.isDecimalLike) {
      this.parserMap.set(ctx, new ArgumentItem(new DataType(TYPE.NUMBER), ctx));
    } else {
      if (!left.isDecimalLike) {
        const param_ctx = this.parserMap.get(ctx.getChild(0)).getCtx();
        const rightModel = new ArgumentErrorModel(
          ArugumentErrorCode.PARAM_TYPE,
          '???????????????',
          0,
        );
        this.errors.push({
          code: rightModel.code,
          endColumn: param_ctx.stop.stopIndex + 2,
          endLineNumber: param_ctx.stop.line,
          message: `${param_ctx.text},${rightModel.msg},${rightModel.detail}`,
          startColumn: param_ctx.stop.charPositionInLine + 1,
          startLineNumber: param_ctx.stop.line,
        });
      }
      if (!right.isDecimalLike) {
        const param_ctx = this.parserMap.get(ctx.getChild(2)).getCtx();
        const rightModel = new ArgumentErrorModel(
          ArugumentErrorCode.PARAM_TYPE,
          '???????????????',
          0,
        );
        this.errors.push({
          code: rightModel.code,
          endColumn: param_ctx.stop.stopIndex + 2,
          endLineNumber: param_ctx.stop.line,
          message: `${param_ctx.text},${rightModel.msg},${rightModel.detail}`,
          startColumn: param_ctx.stop.charPositionInLine + 1,
          startLineNumber: param_ctx.stop.line,
        });
      }
      this.parserMap.set(ctx, new ArgumentItem(new DataType(TYPE.UNKNOW), ctx));
    }
  }

  exitCompareExpression(ctx: CompareExpressionContext) {
    const left = this.parserMap.get(ctx.getChild(0)).getDataType() as DataType;
    const right = this.parserMap.get(ctx.getChild(2)).getDataType() as DataType;
    const operator: string = ctx.getChild(1).text;
    if (JSON.stringify(left) != JSON.stringify(right)) {
      //????????? == ???????????????????????????????????????
      const errModel = new ArgumentErrorModel(
        ArugumentErrorCode.PARAM_TYPE,
        `????????? ${operator} ??????????????????????????????????????????`,
        0,
      );
      this.errors.push({
        code: errModel.code,
        endColumn: ctx.stop!.stopIndex + 2,
        endLineNumber: ctx.stop!.line,
        message: `${ctx.text},${errModel.msg},${errModel.detail}`,
        startColumn: ctx.stop!.charPositionInLine + 1,
        startLineNumber: ctx.stop!.line,
      });
      this.parserMap.set(
        ctx,
        new ArgumentItem(new DataType(TYPE.BOOLEAN), ctx),
      );
      return;
    }
    if (['>', '>=', '<', '<='].includes(operator)) {
      if (!left.isDecimalLike) {
        const errModel = new ArgumentErrorModel(
          ArugumentErrorCode.PARAM_TYPE,
          `????????? ${operator} ????????????????????????????????????`,
          0,
        );
        this.errors.push({
          code: errModel.code,
          endColumn: ctx.stop!.stopIndex + 2,
          endLineNumber: ctx.stop!.line,
          message: `${ctx.text},${errModel.msg},${errModel.detail}`,
          startColumn: ctx.stop!.charPositionInLine + 1,
          startLineNumber: ctx.stop!.line,
        });
      }
    }
    this.parserMap.set(ctx, new ArgumentItem(new DataType(TYPE.BOOLEAN), ctx));
  }

  exitParenthesizedExpression(ctx: ParenthesizedExpressionContext) {
    this.parserMap.set(
      ctx,
      new ArgumentItem(this.parserMap.get(ctx.getChild(1)).getDataType(), ctx),
    );
  }

  exitStat(ctx: StatContext) {
    if (this.parseException) {
      this.parseType = {
        success: false,
        result: new DataType(TYPE.UNKNOW),
      };
    } else {
      this.parseType = {
        success: true,
        result: this.parserMap.get(ctx.getChild(0)).getDataType(),
      };
      if (!this.parseType.result.isUnknow && !this.formulaRtType.isUnknow) {
        if (
          JSON.stringify(this.formulaRtType) !=
          JSON.stringify(this.parseType.result)
        ) {
          this.errors.push({
            code: ArugumentErrorCode.RETURN_TYPE,
            endColumn: ctx.stop!.stopIndex + 2,
            endLineNumber: ctx.stop!.line,
            message: `${GetArugumentErrorCodeMsg(
              ArugumentErrorCode.RETURN_TYPE,
            )}`,
            startColumn: ctx.stop!.charPositionInLine + 1,
            startLineNumber: ctx.stop!.line,
          });
        }
      }
    }
  }

  exitSingleExpression(ctx: SingleExpressionContext) {
    this.parserMap.set(
      ctx,
      new ArgumentItem(this.parserMap.get(ctx.getChild(0)).getDataType(), ctx),
    );
  }

  getResultType() {
    return this.parseType;
  }

  getErrors() {
    return this.errors;
  }
}
