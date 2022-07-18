import { ParserRuleContext } from 'antlr4ts';

import { PropertyExpressionAssignmentContext } from './PowerExpressionParser';
import { FunctionExpressionContext } from './PowerExpressionParser';
import { BehaviorExpressionContext } from './PowerExpressionParser';
import { MultiplicativeExpressionContext } from './PowerExpressionParser';
import { AdditiveExpressionContext } from './PowerExpressionParser';
import { CompareExpressionContext } from './PowerExpressionParser';
import { IdentifierExpressionContext } from './PowerExpressionParser';
import { LiteralExpressionContext } from './PowerExpressionParser';
import { ArrayLiteralExpressionContext } from './PowerExpressionParser';
import { ObjectLiteralExpressionContext } from './PowerExpressionParser';
import { ParenthesizedExpressionContext } from './PowerExpressionParser';
import { ExpressionUnitContext } from './PowerExpressionParser';
import { StatementContext } from './PowerExpressionParser';
import { ArrayLiteralContext } from './PowerExpressionParser';
import { ElementListContext } from './PowerExpressionParser';
import { ArrayElementContext } from './PowerExpressionParser';
import { PropertyAssignmentContext } from './PowerExpressionParser';
import { PropertyNameContext } from './PowerExpressionParser';
import { LiteralContext } from './PowerExpressionParser';
import { NumericLiteralContext } from './PowerExpressionParser';
import { IdentifierNameContext } from './PowerExpressionParser';
import { IdentifierContext } from './PowerExpressionParser';
import { ReservedWordContext } from './PowerExpressionParser';
import { ArgumentsContext } from './PowerExpressionParser';
import { ArgumentContext } from './PowerExpressionParser';
import { ExpressionSequenceContext } from './PowerExpressionParser';
import { SingleExpressionContext } from './PowerExpressionParser';
import { ObjectLiteralContext } from './PowerExpressionParser';
import { EosContext } from './PowerExpressionParser';

import { PowerExpressionParserListener } from './PowerExpressionParserListener';

export class PowerExpressionParserListenerImpl
  implements PowerExpressionParserListener
{
  private parserMap = new Map();
  private setInMap(key: any, content: any) {
    this.parserMap.set(key, content);
  }
  private getInMap(key: any) {
    return this.parserMap.get(key);
  }

  private behaviors = [];

  private doBehavior(ctx: BehaviorExpressionContext) {
    const behaviorName = ctx.getChild(0).text.toUpperCase();
    switch (behaviorName) {
      case 'NOTIFY':
        console.log('Notify', this.getInMap(ctx.getChild(1)));
    }
  }

  enterPropertyExpressionAssignment?: (
    ctx: PropertyExpressionAssignmentContext,
  ) => void;
  /**
   * Exit a parse tree produced by the `PropertyExpressionAssignment`
   * labeled alternative in `PowerExpressionParser.propertyAssignment`.
   * @param ctx the parse tree
   */
  exitPropertyExpressionAssignment?: (
    ctx: PropertyExpressionAssignmentContext,
  ) => void;

  /**
   * Enter a parse tree produced by the `FunctionExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterFunctionExpression(ctx: FunctionExpressionContext) {}

  /**
   * Exit a parse tree produced by the `FunctionExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitFunctionExpression?: (ctx: FunctionExpressionContext) => void;

  /**
   * Enter a parse tree produced by the `FunctionExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterBehaviorExpression?: (ctx: BehaviorExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `FunctionExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitBehaviorExpression(ctx: BehaviorExpressionContext) {}

  /**
   * Enter a parse tree produced by the `MultiplicativeExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterMultiplicativeExpression?: (
    ctx: MultiplicativeExpressionContext,
  ) => void;
  /**
   * Exit a parse tree produced by the `MultiplicativeExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

  /**
   * Enter a parse tree produced by the `AdditiveExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `AdditiveExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

  /**
   * Enter a parse tree produced by the `CompareExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterCompareExpression?: (ctx: CompareExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `CompareExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitCompareExpression?: (ctx: CompareExpressionContext) => void;

  /**
   * Enter a parse tree produced by the `IdentifierExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `IdentifierExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;

  /**
   * Enter a parse tree produced by the `LiteralExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `LiteralExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;

  /**
   * Enter a parse tree produced by the `ArrayLiteralExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `ArrayLiteralExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => void;

  /**
   * Enter a parse tree produced by the `ObjectLiteralExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterObjectLiteralExpression?: (ctx: ObjectLiteralExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `ObjectLiteralExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitObjectLiteralExpression?: (ctx: ObjectLiteralExpressionContext) => void;

  /**
   * Enter a parse tree produced by the `ParenthesizedExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
  /**
   * Exit a parse tree produced by the `ParenthesizedExpression`
   * labeled alternative in `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

  /**
   * Enter a parse tree produced by `PowerExpressionParser.expressionUnit`.
   * @param ctx the parse tree
   */
  enterExpressionUnit?: (ctx: ExpressionUnitContext) => void;
  /**
   * Exit a parse tree produced by `PowerExpressionParser.expressionUnit`.
   * @param ctx the parse tree
   */
  exitExpressionUnit?: (ctx: ExpressionUnitContext) => void;

  /**
   * Enter a parse tree produced by `PowerExpressionParser.statement`.
   * @param ctx the parse tree
   */
  enterStatement?: (ctx: StatementContext) => void;
  /**
   * Exit a parse tree produced by `PowerExpressionParser.statement`.
   * @param ctx the parse tree
   */
  exitStatement?: (ctx: StatementContext) => void;

  /**
   * Enter a parse tree produced by `PowerExpressionParser.arrayLiteral`.
   * @param ctx the parse tree
   */
  enterArrayLiteral?: (ctx: ArrayLiteralContext) => void;
  /**
   * Exit a parse tree produced by `PowerExpressionParser.arrayLiteral`.
   * @param ctx the parse tree
   */
  exitArrayLiteral?: (ctx: ArrayLiteralContext) => void;

  /**
   * Enter a parse tree produced by `PowerExpressionParser.elementList`.
   * @param ctx the parse tree
   */
  enterElementList?: (ctx: ElementListContext) => void;
  /**
   * Exit a parse tree produced by `PowerExpressionParser.elementList`.
   * @param ctx the parse tree
   */
  exitElementList?: (ctx: ElementListContext) => void;

  /**
   * Enter a parse tree produced by `PowerExpressionParser.arrayElement`.
   * @param ctx the parse tree
   */
  enterArrayElement?: (ctx: ArrayElementContext) => void;
  /**
   * Exit a parse tree produced by `PowerExpressionParser.arrayElement`.
   * @param ctx the parse tree
   */
  exitArrayElement?: (ctx: ArrayElementContext) => void;

  /**
   * Enter a parse tree produced by `PowerExpressionParser.propertyAssignment`.
   * @param ctx the parse tree
   */
  enterPropertyAssignment?: (ctx: PropertyAssignmentContext) => void;
  /**
   * Exit a parse tree produced by `PowerExpressionParser.propertyAssignment`.
   * @param ctx the parse tree
   */
  exitPropertyAssignment?: (ctx: PropertyAssignmentContext) => void;

  /**
   * Enter a parse tree produced by `PowerExpressionParser.propertyName`.
   * @param ctx the parse tree
   */
  enterPropertyName?: (ctx: PropertyNameContext) => void;
  /**
   * Exit a parse tree produced by `PowerExpressionParser.propertyName`.
   * @param ctx the parse tree
   */
  exitPropertyName?: (ctx: PropertyNameContext) => void;

  /**
   * Enter a parse tree produced by `PowerExpressionParser.literal`.
   * @param ctx the parse tree
   */
  enterLiteral?: (ctx: LiteralContext) => void;
  /**
   * Exit a parse tree produced by `PowerExpressionParser.literal`.
   * @param ctx the parse tree
   */
  exitLiteral?: (ctx: LiteralContext) => void;

  /**
   * Enter a parse tree produced by `PowerExpressionParser.numericLiteral`.
   * @param ctx the parse tree
   */
  enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
  /**
   * Exit a parse tree produced by `PowerExpressionParser.numericLiteral`.
   * @param ctx the parse tree
   */
  exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

  /**
   * Enter a parse tree produced by `PowerExpressionParser.identifierName`.
   * @param ctx the parse tree
   */
  enterIdentifierName?: (ctx: IdentifierNameContext) => void;
  /**
   * Exit a parse tree produced by `PowerExpressionParser.identifierName`.
   * @param ctx the parse tree
   */
  exitIdentifierName?: (ctx: IdentifierNameContext) => void;

  /**
   * Enter a parse tree produced by `PowerExpressionParser.identifier`.
   * @param ctx the parse tree
   */
  enterIdentifier?: (ctx: IdentifierContext) => void;
  /**
   * Exit a parse tree produced by `PowerExpressionParser.identifier`.
   * @param ctx the parse tree
   */
  exitIdentifier?: (ctx: IdentifierContext) => void;

  /**
   * Enter a parse tree produced by `PowerExpressionParser.reservedWord`.
   * @param ctx the parse tree
   */
  enterReservedWord?: (ctx: ReservedWordContext) => void;
  /**
   * Exit a parse tree produced by `PowerExpressionParser.reservedWord`.
   * @param ctx the parse tree
   */
  exitReservedWord?: (ctx: ReservedWordContext) => void;

  /**
   * Enter a parse tree produced by `PowerExpressionParser.arguments`.
   * @param ctx the parse tree
   */
  enterArguments?: (ctx: ArgumentsContext) => void;
  /**
   * Exit a parse tree produced by `PowerExpressionParser.arguments`.
   * @param ctx the parse tree
   */
  exitArguments?: (ctx: ArgumentsContext) => void;

  /**
   * Enter a parse tree produced by `PowerExpressionParser.argument`.
   * @param ctx the parse tree
   */
  enterArgument?: (ctx: ArgumentContext) => void;
  /**
   * Exit a parse tree produced by `PowerExpressionParser.argument`.
   * @param ctx the parse tree
   */
  exitArgument?: (ctx: ArgumentContext) => void;

  /**
   * Enter a parse tree produced by `PowerExpressionParser.expressionSequence`.
   * @param ctx the parse tree
   */
  enterExpressionSequence?: (ctx: ExpressionSequenceContext) => void;
  /**
   * Exit a parse tree produced by `PowerExpressionParser.expressionSequence`.
   * @param ctx the parse tree
   */
  exitExpressionSequence?: (ctx: ExpressionSequenceContext) => void;

  /**
   * Enter a parse tree produced by `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  // enterSingleExpression?: (ctx: SingleExpressionContext) => void;
  /**
   * Exit a parse tree produced by `PowerExpressionParser.singleExpression`.
   * @param ctx the parse tree
   */
  exitSingleExpression(ctx: SingleExpressionContext) {}

  /**
   * Enter a parse tree produced by `PowerExpressionParser.objectLiteral`.
   * @param ctx the parse tree
   */
  // enterObjectLiteral?: (ctx: ObjectLiteralContext) => void;
  /**
   * Exit a parse tree produced by `PowerExpressionParser.objectLiteral`.
   * @param ctx the parse tree
   */
  exitObjectLiteral(ctx: ObjectLiteralContext) {}
}
