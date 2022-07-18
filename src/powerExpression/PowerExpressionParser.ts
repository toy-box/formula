// Generated from ./PowerExpressionParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { PowerExpressionParserListener } from './PowerExpressionParserListener';

export class PowerExpressionParser extends Parser {
  public static readonly HashBangLine = 1;
  public static readonly OpenBracket = 2;
  public static readonly CloseBracket = 3;
  public static readonly OpenParen = 4;
  public static readonly CloseParen = 5;
  public static readonly OpenBrace = 6;
  public static readonly CloseBrace = 7;
  public static readonly Comma = 8;
  public static readonly SemiColon = 9;
  public static readonly Ellipsis = 10;
  public static readonly Colon = 11;
  public static readonly Plus = 12;
  public static readonly Minus = 13;
  public static readonly Multiply = 14;
  public static readonly Divide = 15;
  public static readonly EQ = 16;
  public static readonly NE = 17;
  public static readonly GT = 18;
  public static readonly GTE = 19;
  public static readonly LT = 20;
  public static readonly LTE = 21;
  public static readonly NullLiteral = 22;
  public static readonly BooleanLiteral = 23;
  public static readonly FunctionLiteral = 24;
  public static readonly BehaviorFunctionLiteral = 25;
  public static readonly Identifier = 26;
  public static readonly DecimalLiteral = 27;
  public static readonly StringLiteral = 28;
  public static readonly WhiteSpaces = 29;
  public static readonly RULE_expressionUnit = 0;
  public static readonly RULE_statement = 1;
  public static readonly RULE_arrayLiteral = 2;
  public static readonly RULE_elementList = 3;
  public static readonly RULE_arrayElement = 4;
  public static readonly RULE_propertyAssignment = 5;
  public static readonly RULE_propertyName = 6;
  public static readonly RULE_literal = 7;
  public static readonly RULE_numericLiteral = 8;
  public static readonly RULE_identifierName = 9;
  public static readonly RULE_identifier = 10;
  public static readonly RULE_reservedWord = 11;
  public static readonly RULE_arguments = 12;
  public static readonly RULE_argument = 13;
  public static readonly RULE_expressionSequence = 14;
  public static readonly RULE_singleExpression = 15;
  public static readonly RULE_objectLiteral = 16;
  public static readonly RULE_eos = 17;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'expressionUnit',
    'statement',
    'arrayLiteral',
    'elementList',
    'arrayElement',
    'propertyAssignment',
    'propertyName',
    'literal',
    'numericLiteral',
    'identifierName',
    'identifier',
    'reservedWord',
    'arguments',
    'argument',
    'expressionSequence',
    'singleExpression',
    'objectLiteral',
    'eos',
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    "'['",
    "']'",
    "'('",
    "')'",
    "'{'",
    "'}'",
    "','",
    "';'",
    "'...'",
    "':'",
    "'+'",
    "'-'",
    "'*'",
    "'/'",
    "'='",
    "'<>'",
    "'>'",
    "'>='",
    "'<'",
    "'<='",
    "'null'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'HashBangLine',
    'OpenBracket',
    'CloseBracket',
    'OpenParen',
    'CloseParen',
    'OpenBrace',
    'CloseBrace',
    'Comma',
    'SemiColon',
    'Ellipsis',
    'Colon',
    'Plus',
    'Minus',
    'Multiply',
    'Divide',
    'EQ',
    'NE',
    'GT',
    'GTE',
    'LT',
    'LTE',
    'NullLiteral',
    'BooleanLiteral',
    'FunctionLiteral',
    'BehaviorFunctionLiteral',
    'Identifier',
    'DecimalLiteral',
    'StringLiteral',
    'WhiteSpaces',
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    PowerExpressionParser._LITERAL_NAMES,
    PowerExpressionParser._SYMBOLIC_NAMES,
    [],
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return PowerExpressionParser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'PowerExpressionParser.g4';
  }

  // @Override
  public get ruleNames(): string[] {
    return PowerExpressionParser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return PowerExpressionParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string,
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(PowerExpressionParser._ATN, this);
  }
  // @RuleVersion(0)
  public expressionUnit(): ExpressionUnitContext {
    let _localctx: ExpressionUnitContext = new ExpressionUnitContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 0, PowerExpressionParser.RULE_expressionUnit);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 37;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PowerExpressionParser.HashBangLine) {
          {
            this.state = 36;
            this.match(PowerExpressionParser.HashBangLine);
          }
        }

        this.state = 40;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << PowerExpressionParser.OpenBracket) |
              (1 << PowerExpressionParser.OpenParen) |
              (1 << PowerExpressionParser.OpenBrace) |
              (1 << PowerExpressionParser.NullLiteral) |
              (1 << PowerExpressionParser.BooleanLiteral) |
              (1 << PowerExpressionParser.FunctionLiteral) |
              (1 << PowerExpressionParser.BehaviorFunctionLiteral) |
              (1 << PowerExpressionParser.Identifier) |
              (1 << PowerExpressionParser.DecimalLiteral) |
              (1 << PowerExpressionParser.StringLiteral))) !==
            0
        ) {
          {
            this.state = 39;
            this.statement();
          }
        }

        this.state = 42;
        this.match(PowerExpressionParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public statement(): StatementContext {
    let _localctx: StatementContext = new StatementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 2, PowerExpressionParser.RULE_statement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 44;
        this.expressionSequence();
        this.state = 45;
        this.eos();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public arrayLiteral(): ArrayLiteralContext {
    let _localctx: ArrayLiteralContext = new ArrayLiteralContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 4, PowerExpressionParser.RULE_arrayLiteral);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 47;
          this.match(PowerExpressionParser.OpenBracket);
          this.state = 48;
          this.elementList();
          this.state = 49;
          this.match(PowerExpressionParser.CloseBracket);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public elementList(): ElementListContext {
    let _localctx: ElementListContext = new ElementListContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 6, PowerExpressionParser.RULE_elementList);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 54;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 51;
                this.match(PowerExpressionParser.Comma);
              }
            }
          }
          this.state = 56;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
        }
        this.state = 58;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << PowerExpressionParser.OpenBracket) |
              (1 << PowerExpressionParser.OpenParen) |
              (1 << PowerExpressionParser.OpenBrace) |
              (1 << PowerExpressionParser.NullLiteral) |
              (1 << PowerExpressionParser.BooleanLiteral) |
              (1 << PowerExpressionParser.FunctionLiteral) |
              (1 << PowerExpressionParser.BehaviorFunctionLiteral) |
              (1 << PowerExpressionParser.Identifier) |
              (1 << PowerExpressionParser.DecimalLiteral) |
              (1 << PowerExpressionParser.StringLiteral))) !==
            0
        ) {
          {
            this.state = 57;
            this.arrayElement();
          }
        }

        this.state = 68;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 61;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                  {
                    {
                      this.state = 60;
                      this.match(PowerExpressionParser.Comma);
                    }
                  }
                  this.state = 63;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                } while (_la === PowerExpressionParser.Comma);
                this.state = 65;
                this.arrayElement();
              }
            }
          }
          this.state = 70;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
        }
        this.state = 74;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PowerExpressionParser.Comma) {
          {
            {
              this.state = 71;
              this.match(PowerExpressionParser.Comma);
            }
          }
          this.state = 76;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public arrayElement(): ArrayElementContext {
    let _localctx: ArrayElementContext = new ArrayElementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 8, PowerExpressionParser.RULE_arrayElement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 77;
        this.singleExpression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public propertyAssignment(): PropertyAssignmentContext {
    let _localctx: PropertyAssignmentContext = new PropertyAssignmentContext(
      this._ctx,
      this.state,
    );
    this.enterRule(
      _localctx,
      10,
      PowerExpressionParser.RULE_propertyAssignment,
    );
    try {
      _localctx = new PropertyExpressionAssignmentContext(_localctx);
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 79;
        this.propertyName();
        this.state = 80;
        this.match(PowerExpressionParser.Colon);
        this.state = 81;
        this.singleExpression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public propertyName(): PropertyNameContext {
    let _localctx: PropertyNameContext = new PropertyNameContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 12, PowerExpressionParser.RULE_propertyName);
    try {
      this.state = 89;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PowerExpressionParser.Colon:
        case PowerExpressionParser.NullLiteral:
        case PowerExpressionParser.BooleanLiteral:
        case PowerExpressionParser.Identifier:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 83;
            this.identifierName();
          }
          break;
        case PowerExpressionParser.StringLiteral:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 84;
            this.match(PowerExpressionParser.StringLiteral);
          }
          break;
        case PowerExpressionParser.OpenBracket:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 85;
            this.match(PowerExpressionParser.OpenBracket);
            this.state = 86;
            this.singleExpression(0);
            this.state = 87;
            this.match(PowerExpressionParser.CloseBracket);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public literal(): LiteralContext {
    let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, PowerExpressionParser.RULE_literal);
    try {
      this.state = 95;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PowerExpressionParser.NullLiteral:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 91;
            this.match(PowerExpressionParser.NullLiteral);
          }
          break;
        case PowerExpressionParser.BooleanLiteral:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 92;
            this.match(PowerExpressionParser.BooleanLiteral);
          }
          break;
        case PowerExpressionParser.StringLiteral:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 93;
            this.match(PowerExpressionParser.StringLiteral);
          }
          break;
        case PowerExpressionParser.DecimalLiteral:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 94;
            this.numericLiteral();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public numericLiteral(): NumericLiteralContext {
    let _localctx: NumericLiteralContext = new NumericLiteralContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 16, PowerExpressionParser.RULE_numericLiteral);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 97;
        this.match(PowerExpressionParser.DecimalLiteral);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public identifierName(): IdentifierNameContext {
    let _localctx: IdentifierNameContext = new IdentifierNameContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 18, PowerExpressionParser.RULE_identifierName);
    try {
      this.state = 101;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PowerExpressionParser.Identifier:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 99;
            this.identifier();
          }
          break;
        case PowerExpressionParser.Colon:
        case PowerExpressionParser.NullLiteral:
        case PowerExpressionParser.BooleanLiteral:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 100;
            this.reservedWord();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public identifier(): IdentifierContext {
    let _localctx: IdentifierContext = new IdentifierContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 20, PowerExpressionParser.RULE_identifier);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 103;
        this.match(PowerExpressionParser.Identifier);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public reservedWord(): ReservedWordContext {
    let _localctx: ReservedWordContext = new ReservedWordContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 22, PowerExpressionParser.RULE_reservedWord);
    try {
      this.state = 108;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PowerExpressionParser.Colon:
          this.enterOuterAlt(_localctx, 1);
          // tslint:disable-next-line:no-empty
          {
          }
          break;
        case PowerExpressionParser.NullLiteral:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 106;
            this.match(PowerExpressionParser.NullLiteral);
          }
          break;
        case PowerExpressionParser.BooleanLiteral:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 107;
            this.match(PowerExpressionParser.BooleanLiteral);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public arguments(): ArgumentsContext {
    let _localctx: ArgumentsContext = new ArgumentsContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 24, PowerExpressionParser.RULE_arguments);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 110;
        this.match(PowerExpressionParser.OpenParen);
        this.state = 122;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << PowerExpressionParser.OpenBracket) |
              (1 << PowerExpressionParser.OpenParen) |
              (1 << PowerExpressionParser.OpenBrace) |
              (1 << PowerExpressionParser.NullLiteral) |
              (1 << PowerExpressionParser.BooleanLiteral) |
              (1 << PowerExpressionParser.FunctionLiteral) |
              (1 << PowerExpressionParser.BehaviorFunctionLiteral) |
              (1 << PowerExpressionParser.Identifier) |
              (1 << PowerExpressionParser.DecimalLiteral) |
              (1 << PowerExpressionParser.StringLiteral))) !==
            0
        ) {
          {
            this.state = 111;
            this.argument();
            this.state = 116;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 112;
                    this.match(PowerExpressionParser.Comma);
                    this.state = 113;
                    this.argument();
                  }
                }
              }
              this.state = 118;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                11,
                this._ctx,
              );
            }
            this.state = 120;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PowerExpressionParser.Comma) {
              {
                this.state = 119;
                this.match(PowerExpressionParser.Comma);
              }
            }
          }
        }

        this.state = 124;
        this.match(PowerExpressionParser.CloseParen);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public argument(): ArgumentContext {
    let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, PowerExpressionParser.RULE_argument);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 128;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
          case 1:
            {
              this.state = 126;
              this.expressionSequence();
            }
            break;

          case 2:
            {
              this.state = 127;
              this.identifier();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public expressionSequence(): ExpressionSequenceContext {
    let _localctx: ExpressionSequenceContext = new ExpressionSequenceContext(
      this._ctx,
      this.state,
    );
    this.enterRule(
      _localctx,
      28,
      PowerExpressionParser.RULE_expressionSequence,
    );
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 130;
        this.singleExpression(0);
        this.state = 135;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 131;
                this.match(PowerExpressionParser.SemiColon);
                this.state = 132;
                this.singleExpression(0);
              }
            }
          }
          this.state = 137;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public singleExpression(): SingleExpressionContext;
  public singleExpression(_p: number): SingleExpressionContext;
  // @RuleVersion(0)
  public singleExpression(_p?: number): SingleExpressionContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: SingleExpressionContext = new SingleExpressionContext(
      this._ctx,
      _parentState,
    );
    let _prevctx: SingleExpressionContext = _localctx;
    let _startState: number = 30;
    this.enterRecursionRule(
      _localctx,
      30,
      PowerExpressionParser.RULE_singleExpression,
      _p,
    );
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 151;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case PowerExpressionParser.FunctionLiteral:
            {
              _localctx = new FunctionExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;

              this.state = 139;
              this.match(PowerExpressionParser.FunctionLiteral);
              this.state = 140;
              this.arguments();
            }
            break;
          case PowerExpressionParser.BehaviorFunctionLiteral:
            {
              _localctx = new BehaviorExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 141;
              this.match(PowerExpressionParser.BehaviorFunctionLiteral);
              this.state = 142;
              this.arguments();
            }
            break;
          case PowerExpressionParser.Identifier:
            {
              _localctx = new IdentifierExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 143;
              this.identifier();
            }
            break;
          case PowerExpressionParser.NullLiteral:
          case PowerExpressionParser.BooleanLiteral:
          case PowerExpressionParser.DecimalLiteral:
          case PowerExpressionParser.StringLiteral:
            {
              _localctx = new LiteralExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 144;
              this.literal();
            }
            break;
          case PowerExpressionParser.OpenBracket:
            {
              _localctx = new ArrayLiteralExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 145;
              this.arrayLiteral();
            }
            break;
          case PowerExpressionParser.OpenBrace:
            {
              _localctx = new ObjectLiteralExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 146;
              this.objectLiteral();
            }
            break;
          case PowerExpressionParser.OpenParen:
            {
              _localctx = new ParenthesizedExpressionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 147;
              this.match(PowerExpressionParser.OpenParen);
              this.state = 148;
              this.expressionSequence();
              this.state = 149;
              this.match(PowerExpressionParser.CloseParen);
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 164;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 162;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 17, this._ctx)
              ) {
                case 1:
                  {
                    _localctx = new MultiplicativeExpressionContext(
                      new SingleExpressionContext(_parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      PowerExpressionParser.RULE_singleExpression,
                    );
                    this.state = 153;
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 8)',
                      );
                    }
                    this.state = 154;
                    (_localctx as MultiplicativeExpressionContext)._op =
                      this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        _la === PowerExpressionParser.Multiply ||
                        _la === PowerExpressionParser.Divide
                      )
                    ) {
                      (_localctx as MultiplicativeExpressionContext)._op =
                        this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 155;
                    this.singleExpression(9);
                  }
                  break;

                case 2:
                  {
                    _localctx = new AdditiveExpressionContext(
                      new SingleExpressionContext(_parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      PowerExpressionParser.RULE_singleExpression,
                    );
                    this.state = 156;
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 7)',
                      );
                    }
                    this.state = 157;
                    (_localctx as AdditiveExpressionContext)._op =
                      this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        _la === PowerExpressionParser.Plus ||
                        _la === PowerExpressionParser.Minus
                      )
                    ) {
                      (_localctx as AdditiveExpressionContext)._op =
                        this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 158;
                    this.singleExpression(8);
                  }
                  break;

                case 3:
                  {
                    _localctx = new CompareExpressionContext(
                      new SingleExpressionContext(_parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      PowerExpressionParser.RULE_singleExpression,
                    );
                    this.state = 159;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 6)',
                      );
                    }
                    this.state = 160;
                    (_localctx as CompareExpressionContext)._cmp =
                      this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        (_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << PowerExpressionParser.EQ) |
                            (1 << PowerExpressionParser.NE) |
                            (1 << PowerExpressionParser.GT) |
                            (1 << PowerExpressionParser.GTE) |
                            (1 << PowerExpressionParser.LT) |
                            (1 << PowerExpressionParser.LTE))) !==
                          0
                      )
                    ) {
                      (_localctx as CompareExpressionContext)._cmp =
                        this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 161;
                    this.singleExpression(7);
                  }
                  break;
              }
            }
          }
          this.state = 166;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public objectLiteral(): ObjectLiteralContext {
    let _localctx: ObjectLiteralContext = new ObjectLiteralContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 32, PowerExpressionParser.RULE_objectLiteral);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 167;
        this.match(PowerExpressionParser.OpenBrace);
        this.state = 179;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << PowerExpressionParser.OpenBracket) |
              (1 << PowerExpressionParser.Colon) |
              (1 << PowerExpressionParser.NullLiteral) |
              (1 << PowerExpressionParser.BooleanLiteral) |
              (1 << PowerExpressionParser.Identifier) |
              (1 << PowerExpressionParser.StringLiteral))) !==
            0
        ) {
          {
            this.state = 168;
            this.propertyAssignment();
            this.state = 173;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 169;
                    this.match(PowerExpressionParser.Comma);
                    this.state = 170;
                    this.propertyAssignment();
                  }
                }
              }
              this.state = 175;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                19,
                this._ctx,
              );
            }
            this.state = 177;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PowerExpressionParser.Comma) {
              {
                this.state = 176;
                this.match(PowerExpressionParser.Comma);
              }
            }
          }
        }

        this.state = 181;
        this.match(PowerExpressionParser.CloseBrace);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public eos(): EosContext {
    let _localctx: EosContext = new EosContext(this._ctx, this.state);
    this.enterRule(_localctx, 34, PowerExpressionParser.RULE_eos);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 183;
        _la = this._input.LA(1);
        if (
          !(
            _la === PowerExpressionParser.EOF ||
            _la === PowerExpressionParser.SemiColon
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public sempred(
    _localctx: RuleContext,
    ruleIndex: number,
    predIndex: number,
  ): boolean {
    switch (ruleIndex) {
      case 15:
        return this.singleExpression_sempred(
          _localctx as SingleExpressionContext,
          predIndex,
        );
    }
    return true;
  }
  private singleExpression_sempred(
    _localctx: SingleExpressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 8);

      case 1:
        return this.precpred(this._ctx, 7);

      case 2:
        return this.precpred(this._ctx, 6);
    }
    return true;
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1F\xBC\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x03\x02\x05\x02(\n\x02\x03\x02\x05\x02+\n\x02\x03\x02\x03\x02' +
    '\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x07\x05' +
    '7\n\x05\f\x05\x0E\x05:\v\x05\x03\x05\x05\x05=\n\x05\x03\x05\x06\x05@\n' +
    '\x05\r\x05\x0E\x05A\x03\x05\x07\x05E\n\x05\f\x05\x0E\x05H\v\x05\x03\x05' +
    '\x07\x05K\n\x05\f\x05\x0E\x05N\v\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03' +
    '\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\\\n\b\x03\t\x03' +
    '\t\x03\t\x03\t\x05\tb\n\t\x03\n\x03\n\x03\v\x03\v\x05\vh\n\v\x03\f\x03' +
    '\f\x03\r\x03\r\x03\r\x05\ro\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E' +
    'u\n\x0E\f\x0E\x0E\x0Ex\v\x0E\x03\x0E\x05\x0E{\n\x0E\x05\x0E}\n\x0E\x03' +
    '\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\x83\n\x0F\x03\x10\x03\x10\x03\x10' +
    '\x07\x10\x88\n\x10\f\x10\x0E\x10\x8B\v\x10\x03\x11\x03\x11\x03\x11\x03' +
    '\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03' +
    '\x11\x05\x11\x9A\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11' +
    '\x03\x11\x03\x11\x03\x11\x07\x11\xA5\n\x11\f\x11\x0E\x11\xA8\v\x11\x03' +
    '\x12\x03\x12\x03\x12\x03\x12\x07\x12\xAE\n\x12\f\x12\x0E\x12\xB1\v\x12' +
    '\x03\x12\x05\x12\xB4\n\x12\x05\x12\xB6\n\x12\x03\x12\x03\x12\x03\x13\x03' +
    '\x13\x03\x13\x02\x02\x03 \x14\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02' +
    '\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02' +
    ' \x02"\x02$\x02\x02\x06\x03\x02\x10\x11\x03\x02\x0E\x0F\x03\x02\x12\x17' +
    "\x03\x03\v\v\x02\xC9\x02'\x03\x02\x02\x02\x04.\x03\x02\x02\x02\x061\x03" +
    '\x02\x02\x02\b8\x03\x02\x02\x02\nO\x03\x02\x02\x02\fQ\x03\x02\x02\x02' +
    '\x0E[\x03\x02\x02\x02\x10a\x03\x02\x02\x02\x12c\x03\x02\x02\x02\x14g\x03' +
    '\x02\x02\x02\x16i\x03\x02\x02\x02\x18n\x03\x02\x02\x02\x1Ap\x03\x02\x02' +
    '\x02\x1C\x82\x03\x02\x02\x02\x1E\x84\x03\x02\x02\x02 \x99\x03\x02\x02' +
    '\x02"\xA9\x03\x02\x02\x02$\xB9\x03\x02\x02\x02&(\x07\x03\x02\x02\'&\x03' +
    "\x02\x02\x02'(\x03\x02\x02\x02(*\x03\x02\x02\x02)+\x05\x04\x03\x02*)" +
    '\x03\x02\x02\x02*+\x03\x02\x02\x02+,\x03\x02\x02\x02,-\x07\x02\x02\x03' +
    '-\x03\x03\x02\x02\x02./\x05\x1E\x10\x02/0\x05$\x13\x020\x05\x03\x02\x02' +
    '\x0212\x07\x04\x02\x0223\x05\b\x05\x0234\x07\x05\x02\x024\x07\x03\x02' +
    '\x02\x0257\x07\n\x02\x0265\x03\x02\x02\x027:\x03\x02\x02\x0286\x03\x02' +
    '\x02\x0289\x03\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02\x02\x02;=\x05\n' +
    '\x06\x02<;\x03\x02\x02\x02<=\x03\x02\x02\x02=F\x03\x02\x02\x02>@\x07\n' +
    '\x02\x02?>\x03\x02\x02\x02@A\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03\x02' +
    '\x02\x02BC\x03\x02\x02\x02CE\x05\n\x06\x02D?\x03\x02\x02\x02EH\x03\x02' +
    '\x02\x02FD\x03\x02\x02\x02FG\x03\x02\x02\x02GL\x03\x02\x02\x02HF\x03\x02' +
    '\x02\x02IK\x07\n\x02\x02JI\x03\x02\x02\x02KN\x03\x02\x02\x02LJ\x03\x02' +
    '\x02\x02LM\x03\x02\x02\x02M\t\x03\x02\x02\x02NL\x03\x02\x02\x02OP\x05' +
    ' \x11\x02P\v\x03\x02\x02\x02QR\x05\x0E\b\x02RS\x07\r\x02\x02ST\x05 \x11' +
    '\x02T\r\x03\x02\x02\x02U\\\x05\x14\v\x02V\\\x07\x1E\x02\x02WX\x07\x04' +
    '\x02\x02XY\x05 \x11\x02YZ\x07\x05\x02\x02Z\\\x03\x02\x02\x02[U\x03\x02' +
    '\x02\x02[V\x03\x02\x02\x02[W\x03\x02\x02\x02\\\x0F\x03\x02\x02\x02]b\x07' +
    '\x18\x02\x02^b\x07\x19\x02\x02_b\x07\x1E\x02\x02`b\x05\x12\n\x02a]\x03' +
    '\x02\x02\x02a^\x03\x02\x02\x02a_\x03\x02\x02\x02a`\x03\x02\x02\x02b\x11' +
    '\x03\x02\x02\x02cd\x07\x1D\x02\x02d\x13\x03\x02\x02\x02eh\x05\x16\f\x02' +
    'fh\x05\x18\r\x02ge\x03\x02\x02\x02gf\x03\x02\x02\x02h\x15\x03\x02\x02' +
    '\x02ij\x07\x1C\x02\x02j\x17\x03\x02\x02\x02ko\x03\x02\x02\x02lo\x07\x18' +
    '\x02\x02mo\x07\x19\x02\x02nk\x03\x02\x02\x02nl\x03\x02\x02\x02nm\x03\x02' +
    '\x02\x02o\x19\x03\x02\x02\x02p|\x07\x06\x02\x02qv\x05\x1C\x0F\x02rs\x07' +
    '\n\x02\x02su\x05\x1C\x0F\x02tr\x03\x02\x02\x02ux\x03\x02\x02\x02vt\x03' +
    '\x02\x02\x02vw\x03\x02\x02\x02wz\x03\x02\x02\x02xv\x03\x02\x02\x02y{\x07' +
    '\n\x02\x02zy\x03\x02\x02\x02z{\x03\x02\x02\x02{}\x03\x02\x02\x02|q\x03' +
    '\x02\x02\x02|}\x03\x02\x02\x02}~\x03\x02\x02\x02~\x7F\x07\x07\x02\x02' +
    '\x7F\x1B\x03\x02\x02\x02\x80\x83\x05\x1E\x10\x02\x81\x83\x05\x16\f\x02' +
    '\x82\x80\x03\x02\x02\x02\x82\x81\x03\x02\x02\x02\x83\x1D\x03\x02\x02\x02' +
    '\x84\x89\x05 \x11\x02\x85\x86\x07\v\x02\x02\x86\x88\x05 \x11\x02\x87\x85' +
    '\x03\x02\x02\x02\x88\x8B\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A' +
    '\x03\x02\x02\x02\x8A\x1F\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C\x8D' +
    '\b\x11\x01\x02\x8D\x8E\x07\x1A\x02\x02\x8E\x9A\x05\x1A\x0E\x02\x8F\x90' +
    '\x07\x1B\x02\x02\x90\x9A\x05\x1A\x0E\x02\x91\x9A\x05\x16\f\x02\x92\x9A' +
    '\x05\x10\t\x02\x93\x9A\x05\x06\x04\x02\x94\x9A\x05"\x12\x02\x95\x96\x07' +
    '\x06\x02\x02\x96\x97\x05\x1E\x10\x02\x97\x98\x07\x07\x02\x02\x98\x9A\x03' +
    '\x02\x02\x02\x99\x8C\x03\x02\x02\x02\x99\x8F\x03\x02\x02\x02\x99\x91\x03' +
    '\x02\x02\x02\x99\x92\x03\x02\x02\x02\x99\x93\x03\x02\x02\x02\x99\x94\x03' +
    '\x02\x02\x02\x99\x95\x03\x02\x02\x02\x9A\xA6\x03\x02\x02\x02\x9B\x9C\f' +
    '\n\x02\x02\x9C\x9D\t\x02\x02\x02\x9D\xA5\x05 \x11\v\x9E\x9F\f\t\x02\x02' +
    '\x9F\xA0\t\x03\x02\x02\xA0\xA5\x05 \x11\n\xA1\xA2\f\b\x02\x02\xA2\xA3' +
    '\t\x04\x02\x02\xA3\xA5\x05 \x11\t\xA4\x9B\x03\x02\x02\x02\xA4\x9E\x03' +
    '\x02\x02\x02\xA4\xA1\x03\x02\x02\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA4\x03' +
    '\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7!\x03\x02\x02\x02\xA8\xA6\x03' +
    '\x02\x02\x02\xA9\xB5\x07\b\x02\x02\xAA\xAF\x05\f\x07\x02\xAB\xAC\x07\n' +
    '\x02\x02\xAC\xAE\x05\f\x07\x02\xAD\xAB\x03\x02\x02\x02\xAE\xB1\x03\x02' +
    '\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB3\x03\x02' +
    '\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB4\x07\n\x02\x02\xB3\xB2\x03\x02' +
    '\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB6\x03\x02\x02\x02\xB5\xAA\x03\x02' +
    '\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x07\t' +
    '\x02\x02\xB8#\x03\x02\x02\x02\xB9\xBA\t\x05\x02\x02\xBA%\x03\x02\x02\x02' +
    "\x18'*8<AFL[agnvz|\x82\x89\x99\xA4\xA6\xAF\xB3\xB5";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!PowerExpressionParser.__ATN) {
      PowerExpressionParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(PowerExpressionParser._serializedATN),
      );
    }

    return PowerExpressionParser.__ATN;
  }
}

export class ExpressionUnitContext extends ParserRuleContext {
  public EOF(): TerminalNode {
    return this.getToken(PowerExpressionParser.EOF, 0);
  }
  public HashBangLine(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.HashBangLine, 0);
  }
  public statement(): StatementContext | undefined {
    return this.tryGetRuleContext(0, StatementContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_expressionUnit;
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterExpressionUnit) {
      listener.enterExpressionUnit(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitExpressionUnit) {
      listener.exitExpressionUnit(this);
    }
  }
}

export class StatementContext extends ParserRuleContext {
  public expressionSequence(): ExpressionSequenceContext {
    return this.getRuleContext(0, ExpressionSequenceContext);
  }
  public eos(): EosContext {
    return this.getRuleContext(0, EosContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_statement;
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterStatement) {
      listener.enterStatement(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitStatement) {
      listener.exitStatement(this);
    }
  }
}

export class ArrayLiteralContext extends ParserRuleContext {
  public OpenBracket(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.OpenBracket, 0);
  }
  public elementList(): ElementListContext | undefined {
    return this.tryGetRuleContext(0, ElementListContext);
  }
  public CloseBracket(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.CloseBracket, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_arrayLiteral;
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterArrayLiteral) {
      listener.enterArrayLiteral(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitArrayLiteral) {
      listener.exitArrayLiteral(this);
    }
  }
}

export class ElementListContext extends ParserRuleContext {
  public Comma(): TerminalNode[];
  public Comma(i: number): TerminalNode;
  public Comma(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PowerExpressionParser.Comma);
    } else {
      return this.getToken(PowerExpressionParser.Comma, i);
    }
  }
  public arrayElement(): ArrayElementContext[];
  public arrayElement(i: number): ArrayElementContext;
  public arrayElement(i?: number): ArrayElementContext | ArrayElementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ArrayElementContext);
    } else {
      return this.getRuleContext(i, ArrayElementContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_elementList;
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterElementList) {
      listener.enterElementList(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitElementList) {
      listener.exitElementList(this);
    }
  }
}

export class ArrayElementContext extends ParserRuleContext {
  public singleExpression(): SingleExpressionContext {
    return this.getRuleContext(0, SingleExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_arrayElement;
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterArrayElement) {
      listener.enterArrayElement(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitArrayElement) {
      listener.exitArrayElement(this);
    }
  }
}

export class PropertyAssignmentContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_propertyAssignment;
  }
  public copyFrom(ctx: PropertyAssignmentContext): void {
    super.copyFrom(ctx);
  }
}
export class PropertyExpressionAssignmentContext extends PropertyAssignmentContext {
  public propertyName(): PropertyNameContext {
    return this.getRuleContext(0, PropertyNameContext);
  }
  public Colon(): TerminalNode {
    return this.getToken(PowerExpressionParser.Colon, 0);
  }
  public singleExpression(): SingleExpressionContext {
    return this.getRuleContext(0, SingleExpressionContext);
  }
  constructor(ctx: PropertyAssignmentContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterPropertyExpressionAssignment) {
      listener.enterPropertyExpressionAssignment(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitPropertyExpressionAssignment) {
      listener.exitPropertyExpressionAssignment(this);
    }
  }
}

export class PropertyNameContext extends ParserRuleContext {
  public identifierName(): IdentifierNameContext | undefined {
    return this.tryGetRuleContext(0, IdentifierNameContext);
  }
  public StringLiteral(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.StringLiteral, 0);
  }
  public OpenBracket(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.OpenBracket, 0);
  }
  public singleExpression(): SingleExpressionContext | undefined {
    return this.tryGetRuleContext(0, SingleExpressionContext);
  }
  public CloseBracket(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.CloseBracket, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_propertyName;
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterPropertyName) {
      listener.enterPropertyName(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitPropertyName) {
      listener.exitPropertyName(this);
    }
  }
}

export class LiteralContext extends ParserRuleContext {
  public NullLiteral(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.NullLiteral, 0);
  }
  public BooleanLiteral(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.BooleanLiteral, 0);
  }
  public StringLiteral(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.StringLiteral, 0);
  }
  public numericLiteral(): NumericLiteralContext | undefined {
    return this.tryGetRuleContext(0, NumericLiteralContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_literal;
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterLiteral) {
      listener.enterLiteral(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitLiteral) {
      listener.exitLiteral(this);
    }
  }
}

export class NumericLiteralContext extends ParserRuleContext {
  public DecimalLiteral(): TerminalNode {
    return this.getToken(PowerExpressionParser.DecimalLiteral, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_numericLiteral;
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterNumericLiteral) {
      listener.enterNumericLiteral(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitNumericLiteral) {
      listener.exitNumericLiteral(this);
    }
  }
}

export class IdentifierNameContext extends ParserRuleContext {
  public identifier(): IdentifierContext | undefined {
    return this.tryGetRuleContext(0, IdentifierContext);
  }
  public reservedWord(): ReservedWordContext | undefined {
    return this.tryGetRuleContext(0, ReservedWordContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_identifierName;
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterIdentifierName) {
      listener.enterIdentifierName(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitIdentifierName) {
      listener.exitIdentifierName(this);
    }
  }
}

export class IdentifierContext extends ParserRuleContext {
  public Identifier(): TerminalNode {
    return this.getToken(PowerExpressionParser.Identifier, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_identifier;
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterIdentifier) {
      listener.enterIdentifier(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitIdentifier) {
      listener.exitIdentifier(this);
    }
  }
}

export class ReservedWordContext extends ParserRuleContext {
  public NullLiteral(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.NullLiteral, 0);
  }
  public BooleanLiteral(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.BooleanLiteral, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_reservedWord;
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterReservedWord) {
      listener.enterReservedWord(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitReservedWord) {
      listener.exitReservedWord(this);
    }
  }
}

export class ArgumentsContext extends ParserRuleContext {
  public OpenParen(): TerminalNode {
    return this.getToken(PowerExpressionParser.OpenParen, 0);
  }
  public CloseParen(): TerminalNode {
    return this.getToken(PowerExpressionParser.CloseParen, 0);
  }
  public argument(): ArgumentContext[];
  public argument(i: number): ArgumentContext;
  public argument(i?: number): ArgumentContext | ArgumentContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ArgumentContext);
    } else {
      return this.getRuleContext(i, ArgumentContext);
    }
  }
  public Comma(): TerminalNode[];
  public Comma(i: number): TerminalNode;
  public Comma(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PowerExpressionParser.Comma);
    } else {
      return this.getToken(PowerExpressionParser.Comma, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_arguments;
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterArguments) {
      listener.enterArguments(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitArguments) {
      listener.exitArguments(this);
    }
  }
}

export class ArgumentContext extends ParserRuleContext {
  public expressionSequence(): ExpressionSequenceContext | undefined {
    return this.tryGetRuleContext(0, ExpressionSequenceContext);
  }
  public identifier(): IdentifierContext | undefined {
    return this.tryGetRuleContext(0, IdentifierContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_argument;
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterArgument) {
      listener.enterArgument(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitArgument) {
      listener.exitArgument(this);
    }
  }
}

export class ExpressionSequenceContext extends ParserRuleContext {
  public singleExpression(): SingleExpressionContext[];
  public singleExpression(i: number): SingleExpressionContext;
  public singleExpression(
    i?: number,
  ): SingleExpressionContext | SingleExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SingleExpressionContext);
    } else {
      return this.getRuleContext(i, SingleExpressionContext);
    }
  }
  public SemiColon(): TerminalNode[];
  public SemiColon(i: number): TerminalNode;
  public SemiColon(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PowerExpressionParser.SemiColon);
    } else {
      return this.getToken(PowerExpressionParser.SemiColon, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_expressionSequence;
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterExpressionSequence) {
      listener.enterExpressionSequence(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitExpressionSequence) {
      listener.exitExpressionSequence(this);
    }
  }
}

export class SingleExpressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_singleExpression;
  }
  public copyFrom(ctx: SingleExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class FunctionExpressionContext extends SingleExpressionContext {
  public FunctionLiteral(): TerminalNode {
    return this.getToken(PowerExpressionParser.FunctionLiteral, 0);
  }
  public arguments(): ArgumentsContext {
    return this.getRuleContext(0, ArgumentsContext);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterFunctionExpression) {
      listener.enterFunctionExpression(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitFunctionExpression) {
      listener.exitFunctionExpression(this);
    }
  }
}
export class BehaviorExpressionContext extends SingleExpressionContext {
  public BehaviorFunctionLiteral(): TerminalNode {
    return this.getToken(PowerExpressionParser.BehaviorFunctionLiteral, 0);
  }
  public arguments(): ArgumentsContext {
    return this.getRuleContext(0, ArgumentsContext);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterBehaviorExpression) {
      listener.enterBehaviorExpression(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitBehaviorExpression) {
      listener.exitBehaviorExpression(this);
    }
  }
}
export class MultiplicativeExpressionContext extends SingleExpressionContext {
  public _op!: Token;
  public singleExpression(): SingleExpressionContext[];
  public singleExpression(i: number): SingleExpressionContext;
  public singleExpression(
    i?: number,
  ): SingleExpressionContext | SingleExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SingleExpressionContext);
    } else {
      return this.getRuleContext(i, SingleExpressionContext);
    }
  }
  public Multiply(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.Multiply, 0);
  }
  public Divide(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.Divide, 0);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterMultiplicativeExpression) {
      listener.enterMultiplicativeExpression(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitMultiplicativeExpression) {
      listener.exitMultiplicativeExpression(this);
    }
  }
}
export class AdditiveExpressionContext extends SingleExpressionContext {
  public _op!: Token;
  public singleExpression(): SingleExpressionContext[];
  public singleExpression(i: number): SingleExpressionContext;
  public singleExpression(
    i?: number,
  ): SingleExpressionContext | SingleExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SingleExpressionContext);
    } else {
      return this.getRuleContext(i, SingleExpressionContext);
    }
  }
  public Plus(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.Plus, 0);
  }
  public Minus(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.Minus, 0);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterAdditiveExpression) {
      listener.enterAdditiveExpression(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitAdditiveExpression) {
      listener.exitAdditiveExpression(this);
    }
  }
}
export class CompareExpressionContext extends SingleExpressionContext {
  public _cmp!: Token;
  public singleExpression(): SingleExpressionContext[];
  public singleExpression(i: number): SingleExpressionContext;
  public singleExpression(
    i?: number,
  ): SingleExpressionContext | SingleExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SingleExpressionContext);
    } else {
      return this.getRuleContext(i, SingleExpressionContext);
    }
  }
  public GT(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.GT, 0);
  }
  public GTE(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.GTE, 0);
  }
  public LT(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.LT, 0);
  }
  public LTE(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.LTE, 0);
  }
  public EQ(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.EQ, 0);
  }
  public NE(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.NE, 0);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterCompareExpression) {
      listener.enterCompareExpression(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitCompareExpression) {
      listener.exitCompareExpression(this);
    }
  }
}
export class IdentifierExpressionContext extends SingleExpressionContext {
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterIdentifierExpression) {
      listener.enterIdentifierExpression(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitIdentifierExpression) {
      listener.exitIdentifierExpression(this);
    }
  }
}
export class LiteralExpressionContext extends SingleExpressionContext {
  public literal(): LiteralContext {
    return this.getRuleContext(0, LiteralContext);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterLiteralExpression) {
      listener.enterLiteralExpression(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitLiteralExpression) {
      listener.exitLiteralExpression(this);
    }
  }
}
export class ArrayLiteralExpressionContext extends SingleExpressionContext {
  public arrayLiteral(): ArrayLiteralContext {
    return this.getRuleContext(0, ArrayLiteralContext);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterArrayLiteralExpression) {
      listener.enterArrayLiteralExpression(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitArrayLiteralExpression) {
      listener.exitArrayLiteralExpression(this);
    }
  }
}
export class ObjectLiteralExpressionContext extends SingleExpressionContext {
  public objectLiteral(): ObjectLiteralContext {
    return this.getRuleContext(0, ObjectLiteralContext);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterObjectLiteralExpression) {
      listener.enterObjectLiteralExpression(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitObjectLiteralExpression) {
      listener.exitObjectLiteralExpression(this);
    }
  }
}
export class ParenthesizedExpressionContext extends SingleExpressionContext {
  public OpenParen(): TerminalNode {
    return this.getToken(PowerExpressionParser.OpenParen, 0);
  }
  public expressionSequence(): ExpressionSequenceContext {
    return this.getRuleContext(0, ExpressionSequenceContext);
  }
  public CloseParen(): TerminalNode {
    return this.getToken(PowerExpressionParser.CloseParen, 0);
  }
  constructor(ctx: SingleExpressionContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterParenthesizedExpression) {
      listener.enterParenthesizedExpression(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitParenthesizedExpression) {
      listener.exitParenthesizedExpression(this);
    }
  }
}

export class ObjectLiteralContext extends ParserRuleContext {
  public OpenBrace(): TerminalNode {
    return this.getToken(PowerExpressionParser.OpenBrace, 0);
  }
  public CloseBrace(): TerminalNode {
    return this.getToken(PowerExpressionParser.CloseBrace, 0);
  }
  public propertyAssignment(): PropertyAssignmentContext[];
  public propertyAssignment(i: number): PropertyAssignmentContext;
  public propertyAssignment(
    i?: number,
  ): PropertyAssignmentContext | PropertyAssignmentContext[] {
    if (i === undefined) {
      return this.getRuleContexts(PropertyAssignmentContext);
    } else {
      return this.getRuleContext(i, PropertyAssignmentContext);
    }
  }
  public Comma(): TerminalNode[];
  public Comma(i: number): TerminalNode;
  public Comma(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PowerExpressionParser.Comma);
    } else {
      return this.getToken(PowerExpressionParser.Comma, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_objectLiteral;
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterObjectLiteral) {
      listener.enterObjectLiteral(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitObjectLiteral) {
      listener.exitObjectLiteral(this);
    }
  }
}

export class EosContext extends ParserRuleContext {
  public SemiColon(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.SemiColon, 0);
  }
  public EOF(): TerminalNode | undefined {
    return this.tryGetToken(PowerExpressionParser.EOF, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PowerExpressionParser.RULE_eos;
  }
  // @Override
  public enterRule(listener: PowerExpressionParserListener): void {
    if (listener.enterEos) {
      listener.enterEos(this);
    }
  }
  // @Override
  public exitRule(listener: PowerExpressionParserListener): void {
    if (listener.exitEos) {
      listener.exitEos(this);
    }
  }
}
