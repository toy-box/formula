// Generated from ./FormulaLexer.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

export class FormulaLexer extends Lexer {
  public static readonly OpenParen = 1;
  public static readonly CloseParen = 2;
  public static readonly OpenBrace = 3;
  public static readonly CloseBrace = 4;
  public static readonly Comma = 5;
  public static readonly Plus = 6;
  public static readonly Minus = 7;
  public static readonly Multiply = 8;
  public static readonly Divide = 9;
  public static readonly EQ = 10;
  public static readonly NE = 11;
  public static readonly GT = 12;
  public static readonly GTE = 13;
  public static readonly LT = 14;
  public static readonly LTE = 15;
  public static readonly BooleanLiteral = 16;
  public static readonly FunctionLiteral = 17;
  public static readonly DecimalLiteral = 18;
  public static readonly FieldLiteral = 19;
  public static readonly StringLiteral = 20;
  public static readonly NEWLINE = 21;
  public static readonly WS = 22;
  public static readonly ERROR = 2;

  // tslint:disable:no-trailing-whitespace
  public static readonly channelNames: string[] = [
    'DEFAULT_TOKEN_CHANNEL',
    'HIDDEN',
    'ERROR',
  ];

  // tslint:disable:no-trailing-whitespace
  public static readonly modeNames: string[] = ['DEFAULT_MODE'];

  public static readonly ruleNames: string[] = [
    'OpenParen',
    'CloseParen',
    'OpenBrace',
    'CloseBrace',
    'Comma',
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
    'BooleanLiteral',
    'FunctionLiteral',
    'DecimalLiteral',
    'FieldLiteral',
    'StringLiteral',
    'NEWLINE',
    'WS',
    'DoubleStringCharacter',
    'SingleStringCharacter',
    'EscapeSequence',
    'CharacterEscapeSequence',
    'HexEscapeSequence',
    'UnicodeEscapeSequence',
    'ExtendedUnicodeEscapeSequence',
    'SingleEscapeCharacter',
    'NonEscapeCharacter',
    'EscapeCharacter',
    'LineContinuation',
    'HexDigit',
    'DIGIT',
    'INT',
    'FLOAT',
    'NumberLiteral',
    'DecimalIntegerLiteral',
    'Field',
    'FieldPath',
    'FieldPathSegment',
    'FieldPathSubSegment',
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'('",
    "')'",
    "'{'",
    "'}'",
    "','",
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
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'OpenParen',
    'CloseParen',
    'OpenBrace',
    'CloseBrace',
    'Comma',
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
    'BooleanLiteral',
    'FunctionLiteral',
    'DecimalLiteral',
    'FieldLiteral',
    'StringLiteral',
    'NEWLINE',
    'WS',
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    FormulaLexer._LITERAL_NAMES,
    FormulaLexer._SYMBOLIC_NAMES,
    [],
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return FormulaLexer.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  constructor(input: CharStream) {
    super(input);
    this._interp = new LexerATNSimulator(FormulaLexer._ATN, this);
  }

  // @Override
  public get grammarFileName(): string {
    return 'FormulaLexer.g4';
  }

  // @Override
  public get ruleNames(): string[] {
    return FormulaLexer.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return FormulaLexer._serializedATN;
  }

  // @Override
  public get channelNames(): string[] {
    return FormulaLexer.channelNames;
  }

  // @Override
  public get modeNames(): string[] {
    return FormulaLexer.modeNames;
  }

  private static readonly _serializedATNSegments: number = 2;
  private static readonly _serializedATNSegment0: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x18\u0296\b\x01' +
    '\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06' +
    '\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r' +
    '\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t' +
    '\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t' +
    '\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t' +
    '\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t' +
    "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04" +
    '+\t+\x04,\t,\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03' +
    '\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03' +
    '\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03' +
    '\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03' +
    '\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\x84\n\x11\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01D9\n\x12\x03\x13\x03\x13\x03' +
    '\x14\x03\x14\x03\x15\x03\x15\x07\x15\u01E1\n\x15\f\x15\x0E\x15\u01E4\v' +
    '\x15\x03\x15\x03\x15\x03\x15\x07\x15\u01E9\n\x15\f\x15\x0E\x15\u01EC\v' +
    '\x15\x03\x15\x05\x15\u01EF\n\x15\x03\x16\x06\x16\u01F2\n\x16\r\x16\x0E' +
    '\x16\u01F3\x03\x16\x03\x16\x03\x17\x06\x17\u01F9\n\x17\r\x17\x0E\x17\u01FA' +
    '\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0203\n\x18\x03' +
    '\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0209\n\x19\x03\x1A\x03\x1A\x03\x1A' +
    '\x03\x1A\x03\x1A\x05\x1A\u0210\n\x1A\x03\x1B\x03\x1B\x05\x1B\u0214\n\x1B' +
    '\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D' +
    '\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x06\x1E\u0223\n\x1E\r\x1E\x0E\x1E\u0224' +
    '\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x05!\u022F\n!\x03' +
    '"\x03"\x03"\x03#\x03#\x03$\x03$\x03%\x06%\u0239\n%\r%\x0E%\u023A\x03' +
    '&\x06&\u023E\n&\r&\x0E&\u023F\x03&\x03&\x06&\u0244\n&\r&\x0E&\u0245\x03' +
    "'\x03'\x05'\u024A\n'\x03(\x03(\x05(\u024E\n(\x03(\x03(\x07(\u0252" +
    '\n(\f(\x0E(\u0255\v(\x05(\u0257\n(\x03)\x03)\x07)\u025B\n)\f)\x0E)\u025E' +
    '\v)\x03)\x03)\x03)\x03)\x03)\x07)\u0265\n)\f)\x0E)\u0268\v)\x03)\x03)' +
    '\x03)\x07)\u026D\n)\f)\x0E)\u0270\v)\x03)\x03)\x03)\x03)\x03)\x03)\x07' +
    ')\u0278\n)\f)\x0E)\u027B\v)\x05)\u027D\n)\x03*\x03*\x07*\u0281\n*\f*\x0E' +
    '*\u0284\v*\x03+\x03+\x07+\u0288\n+\f+\x0E+\u028B\v+\x03,\x03,\x03,\x03' +
    ',\x03,\x03,\x03,\x03,\x05,\u0295\n,\x02\x02\x02-\x03\x02\x03\x05\x02\x04' +
    '\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v' +
    '\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!' +
    "\x02\x12#\x02\x13%\x02\x14'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x02" +
    '1\x02\x023\x02\x025\x02\x027\x02\x029\x02\x02;\x02\x02=\x02\x02?\x02\x02' +
    'A\x02\x02C\x02\x02E\x02\x02G\x02\x02I\x02\x02K\x02\x02M\x02\x02O\x02\x02' +
    'Q\x02\x02S\x02\x02U\x02\x02W\x02\x02\x03\x02\r\x04\x02\f\f\x0F\x0F\x06' +
    '\x02\v\v\r\x0E""\xA2\xA2\x06\x02\f\f\x0F\x0F$$^^\x06\x02\f\f\x0F\x0F' +
    '))^^\v\x02$$))^^ddhhppttvvxx\x0E\x02\f\f\x0F\x0F$$))2;^^ddhhppttvxzz\x05' +
    '\x022;wwzz\x05\x02\f\f\x0F\x0F\u202A\u202B\x05\x022;CHch\x03\x022;\x06' +
    '\x022;C\\aac|\x02\u02E0\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02' +
    '\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02' +
    '\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02' +
    '\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02' +
    '\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02' +
    '\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03' +
    "\x02\x02\x02\x02'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02" +
    '\x02\x02-\x03\x02\x02\x02\x03Y\x03\x02\x02\x02\x05[\x03\x02\x02\x02\x07' +
    ']\x03\x02\x02\x02\t_\x03\x02\x02\x02\va\x03\x02\x02\x02\rc\x03\x02\x02' +
    '\x02\x0Fe\x03\x02\x02\x02\x11g\x03\x02\x02\x02\x13i\x03\x02\x02\x02\x15' +
    'k\x03\x02\x02\x02\x17m\x03\x02\x02\x02\x19p\x03\x02\x02\x02\x1Br\x03\x02' +
    '\x02\x02\x1Du\x03\x02\x02\x02\x1Fw\x03\x02\x02\x02!\x83\x03\x02\x02\x02' +
    "#\u01D8\x03\x02\x02\x02%\u01DA\x03\x02\x02\x02'\u01DC\x03\x02\x02\x02" +
    ')\u01EE\x03\x02\x02\x02+\u01F1\x03\x02\x02\x02-\u01F8\x03\x02\x02\x02' +
    '/\u0202\x03\x02\x02\x021\u0208\x03\x02\x02\x023\u020F\x03\x02\x02\x02' +
    '5\u0213\x03\x02\x02\x027\u0215\x03\x02\x02\x029\u0219\x03\x02\x02\x02' +
    ';\u021F\x03\x02\x02\x02=\u0228\x03\x02\x02\x02?\u022A\x03\x02\x02\x02' +
    'A\u022E\x03\x02\x02\x02C\u0230\x03\x02\x02\x02E\u0233\x03\x02\x02\x02' +
    'G\u0235\x03\x02\x02\x02I\u0238\x03\x02\x02\x02K\u023D\x03\x02\x02\x02' +
    'M\u0249\x03\x02\x02\x02O\u0256\x03\x02\x02\x02Q\u027C\x03\x02\x02\x02' +
    'S\u027E\x03\x02\x02\x02U\u0285\x03\x02\x02\x02W\u0294\x03\x02\x02\x02' +
    'YZ\x07*\x02\x02Z\x04\x03\x02\x02\x02[\\\x07+\x02\x02\\\x06\x03\x02\x02' +
    '\x02]^\x07}\x02\x02^\b\x03\x02\x02\x02_`\x07\x7F\x02\x02`\n\x03\x02\x02' +
    '\x02ab\x07.\x02\x02b\f\x03\x02\x02\x02cd\x07-\x02\x02d\x0E\x03\x02\x02' +
    '\x02ef\x07/\x02\x02f\x10\x03\x02\x02\x02gh\x07,\x02\x02h\x12\x03\x02\x02' +
    '\x02ij\x071\x02\x02j\x14\x03\x02\x02\x02kl\x07?\x02\x02l\x16\x03\x02\x02' +
    '\x02mn\x07>\x02\x02no\x07@\x02\x02o\x18\x03\x02\x02\x02pq\x07@\x02\x02' +
    'q\x1A\x03\x02\x02\x02rs\x07@\x02\x02st\x07?\x02\x02t\x1C\x03\x02\x02\x02' +
    'uv\x07>\x02\x02v\x1E\x03\x02\x02\x02wx\x07>\x02\x02xy\x07?\x02\x02y \x03' +
    '\x02\x02\x02z{\x07v\x02\x02{|\x07t\x02\x02|}\x07w\x02\x02}\x84\x07g\x02' +
    '\x02~\x7F\x07h\x02\x02\x7F\x80\x07c\x02\x02\x80\x81\x07n\x02\x02\x81\x82' +
    '\x07u\x02\x02\x82\x84\x07g\x02\x02\x83z\x03\x02\x02\x02\x83~\x03\x02\x02' +
    '\x02\x84"\x03\x02\x02\x02\x85\x86\x07F\x02\x02\x86\x87\x07C\x02\x02\x87' +
    '\x88\x07V\x02\x02\x88\u01D9\x07G\x02\x02\x89\x8A\x07F\x02\x02\x8A\x8B' +
    '\x07C\x02\x02\x8B\x8C\x07V\x02\x02\x8C\x8D\x07G\x02\x02\x8D\x8E\x07X\x02' +
    '\x02\x8E\x8F\x07C\x02\x02\x8F\x90\x07N\x02\x02\x90\x91\x07W\x02\x02\x91' +
    '\u01D9\x07G\x02\x02\x92\x93\x07F\x02\x02\x93\x94\x07C\x02\x02\x94\u01D9' +
    '\x07[\x02\x02\x95\x96\x07F\x02\x02\x96\x97\x07C\x02\x02\x97\x98\x07[\x02' +
    '\x02\x98\u01D9\x07U\x02\x02\x99\x9A\x07F\x02\x02\x9A\x9B\x07C\x02\x02' +
    '\x9B\x9C\x07[\x02\x02\x9C\x9D\x07U\x02\x02\x9D\x9E\x075\x02\x02\x9E\x9F' +
    '\x078\x02\x02\x9F\u01D9\x072\x02\x02\xA0\xA1\x07G\x02\x02\xA1\xA2\x07' +
    'F\x02\x02\xA2\xA3\x07C\x02\x02\xA3\xA4\x07V\x02\x02\xA4\u01D9\x07G\x02' +
    '\x02\xA5\xA6\x07G\x02\x02\xA6\xA7\x07Q\x02\x02\xA7\xA8\x07O\x02\x02\xA8' +
    '\xA9\x07Q\x02\x02\xA9\xAA\x07P\x02\x02\xAA\xAB\x07V\x02\x02\xAB\u01D9' +
    '\x07J\x02\x02\xAC\xAD\x07J\x02\x02\xAD\xAE\x07Q\x02\x02\xAE\xAF\x07W\x02' +
    '\x02\xAF\u01D9\x07T\x02\x02\xB0\xB1\x07O\x02\x02\xB1\xB2\x07K\x02\x02' +
    '\xB2\xB3\x07P\x02\x02\xB3\xB4\x07W\x02\x02\xB4\xB5\x07V\x02\x02\xB5\u01D9' +
    '\x07G\x02\x02\xB6\xB7\x07K\x02\x02\xB7\xB8\x07U\x02\x02\xB8\xB9\x07Q\x02' +
    '\x02\xB9\xBA\x07Y\x02\x02\xBA\xBB\x07G\x02\x02\xBB\xBC\x07G\x02\x02\xBC' +
    '\xBD\x07M\x02\x02\xBD\xBE\x07P\x02\x02\xBE\xBF\x07W\x02\x02\xBF\u01D9' +
    '\x07O\x02\x02\xC0\xC1\x07O\x02\x02\xC1\xC2\x07Q\x02\x02\xC2\xC3\x07P\x02' +
    '\x02\xC3\xC4\x07V\x02\x02\xC4\u01D9\x07J\x02\x02\xC5\xC6\x07P\x02\x02' +
    '\xC6\xC7\x07Q\x02\x02\xC7\u01D9\x07Y\x02\x02\xC8\xC9\x07U\x02\x02\xC9' +
    '\xCA\x07G\x02\x02\xCA\xCB\x07E\x02\x02\xCB\xCC\x07Q\x02\x02\xCC\xCD\x07' +
    'P\x02\x02\xCD\u01D9\x07F\x02\x02\xCE\xCF\x07V\x02\x02\xCF\xD0\x07K\x02' +
    '\x02\xD0\xD1\x07O\x02\x02\xD1\u01D9\x07G\x02\x02\xD2\xD3\x07V\x02\x02' +
    '\xD3\xD4\x07K\x02\x02\xD4\xD5\x07O\x02\x02\xD5\xD6\x07G\x02\x02\xD6\xD7' +
    '\x07X\x02\x02\xD7\xD8\x07C\x02\x02\xD8\xD9\x07N\x02\x02\xD9\xDA\x07W\x02' +
    '\x02\xDA\u01D9\x07G\x02\x02\xDB\xDC\x07V\x02\x02\xDC\xDD\x07Q\x02\x02' +
    '\xDD\xDE\x07F\x02\x02\xDE\xDF\x07C\x02\x02\xDF\u01D9\x07[\x02\x02\xE0' +
    '\xE1\x07Y\x02\x02\xE1\xE2\x07G\x02\x02\xE2\xE3\x07G\x02\x02\xE3\xE4\x07' +
    'M\x02\x02\xE4\xE5\x07F\x02\x02\xE5\xE6\x07C\x02\x02\xE6\u01D9\x07[\x02' +
    '\x02\xE7\xE8\x07[\x02\x02\xE8\xE9\x07G\x02\x02\xE9\xEA\x07C\x02\x02\xEA' +
    '\u01D9\x07T\x02\x02\xEB\xEC\x07Y\x02\x02\xEC\xED\x07G\x02\x02\xED\xEE' +
    '\x07G\x02\x02\xEE\xEF\x07M\x02\x02\xEF\xF0\x07P\x02\x02\xF0\xF1\x07W\x02' +
    '\x02\xF1\u01D9\x07O\x02\x02\xF2\xF3\x07C\x02\x02\xF3\xF4\x07P\x02\x02' +
    '\xF4\u01D9\x07F\x02\x02\xF5\xF6\x07K\x02\x02\xF6\u01D9\x07H\x02\x02\xF7' +
    '\xF8\x07P\x02\x02\xF8\xF9\x07Q\x02\x02\xF9\u01D9\x07V\x02\x02\xFA\xFB' +
    '\x07Q\x02\x02\xFB\u01D9\x07T\x02\x02\xFC\xFD\x07U\x02\x02\xFD\xFE\x07' +
    'Y\x02\x02\xFE\xFF\x07K\x02\x02\xFF\u0100\x07V\x02\x02\u0100\u0101\x07' +
    'E\x02\x02\u0101\u01D9\x07J\x02\x02\u0102\u0103\x07C\x02\x02\u0103\u0104' +
    '\x07D\x02\x02\u0104\u01D9\x07U\x02\x02\u0105\u0106\x07E\x02\x02\u0106' +
    '\u0107\x07G\x02\x02\u0107\u0108\x07K\x02\x02\u0108\u0109\x07N\x02\x02' +
    '\u0109\u010A\x07K\x02\x02\u010A\u010B\x07P\x02\x02\u010B\u01D9\x07I\x02' +
    '\x02\u010C\u010D\x07E\x02\x02\u010D\u010E\x07G\x02\x02\u010E\u010F\x07' +
    'K\x02\x02\u010F\u0110\x07N\x02\x02\u0110\u0111\x07K\x02\x02\u0111\u0112' +
    '\x07P\x02\x02\u0112\u0113\x07I\x02\x02\u0113\u0114\x07O\x02\x02\u0114' +
    '\u0115\x07C\x02\x02\u0115\u0116\x07V\x02\x02\u0116\u01D9\x07J\x02\x02' +
    '\u0117\u0118\x07G\x02\x02\u0118\u0119\x07Z\x02\x02\u0119\u01D9\x07R\x02' +
    '\x02\u011A\u011B\x07H\x02\x02\u011B\u011C\x07N\x02\x02\u011C\u011D\x07' +
    'Q\x02\x02\u011D\u011E\x07Q\x02\x02\u011E\u01D9\x07T\x02\x02\u011F\u0120' +
    '\x07H\x02\x02\u0120\u0121\x07N\x02\x02\u0121\u0122\x07Q\x02\x02\u0122' +
    '\u0123\x07Q\x02\x02\u0123\u0124\x07T\x02\x02\u0124\u0125\x07O\x02\x02' +
    '\u0125\u0126\x07C\x02\x02\u0126\u0127\x07V\x02\x02\u0127\u01D9\x07J\x02' +
    '\x02\u0128\u0129\x07N\x02\x02\u0129\u01D9\x07P\x02\x02\u012A\u012B\x07' +
    'N\x02\x02\u012B\u012C\x07Q\x02\x02\u012C\u01D9\x07I\x02\x02\u012D\u012E' +
    '\x07N\x02\x02\u012E\u012F\x07Q\x02\x02\u012F\u0130\x07I\x02\x02\u0130' +
    '\u0131\x073\x02\x02\u0131\u01D9\x072\x02\x02\u0132\u0133\x07O\x02\x02' +
    '\u0133\u0134\x07C\x02\x02\u0134\u01D9\x07Z\x02\x02\u0135\u0136\x07O\x02' +
    '\x02\u0136\u0137\x07K\x02\x02\u0137\u01D9\x07P\x02\x02\u0138\u0139\x07' +
    'O\x02\x02\u0139\u013A\x07Q\x02\x02\u013A\u01D9\x07F\x02\x02\u013B\u013C' +
    '\x07T\x02\x02\u013C\u013D\x07Q\x02\x02\u013D\u013E\x07W\x02\x02\u013E' +
    '\u013F\x07P\x02\x02\u013F\u01D9\x07F\x02\x02\u0140\u0141\x07T\x02\x02' +
    '\u0141\u0142\x07Q\x02\x02\u0142\u0143\x07W\x02\x02\u0143\u0144\x07P\x02' +
    '\x02\u0144\u0145\x07F\x02\x02\u0145\u0146\x07F\x02\x02\u0146\u0147\x07' +
    'Q\x02\x02\u0147\u0148\x07Y\x02\x02\u0148\u01D9\x07P\x02\x02\u0149\u014A' +
    '\x07T\x02\x02\u014A\u014B\x07Q\x02\x02\u014B\u014C\x07W\x02\x02\u014C' +
    '\u014D\x07P\x02\x02\u014D\u014E\x07F\x02\x02\u014E\u014F\x07W\x02\x02' +
    '\u014F\u01D9\x07R\x02\x02\u0150\u0151\x07U\x02\x02\u0151\u0152\x07S\x02' +
    '\x02\u0152\u0153\x07T\x02\x02\u0153\u01D9\x07V\x02\x02\u0154\u0155\x07' +
    'C\x02\x02\u0155\u0156\x07X\x02\x02\u0156\u0157\x07G\x02\x02\u0157\u0158' +
    '\x07T\x02\x02\u0158\u0159\x07C\x02\x02\u0159\u015A\x07I\x02\x02\u015A' +
    '\u01D9\x07G\x02\x02\u015B\u015C\x07U\x02\x02\u015C\u015D\x07W\x02\x02' +
    '\u015D\u01D9\x07O\x02\x02\u015E\u015F\x07E\x02\x02\u015F\u0160\x07Q\x02' +
    '\x02\u0160\u0161\x07W\x02\x02\u0161\u0162\x07P\x02\x02\u0162\u01D9\x07' +
    'V\x02\x02\u0163\u0164\x07E\x02\x02\u0164\u0165\x07Q\x02\x02\u0165\u0166' +
    '\x07W\x02\x02\u0166\u0167\x07P\x02\x02\u0167\u0168\x07V\x02\x02\u0168' +
    '\u01D9\x07C\x02\x02\u0169\u016A\x07R\x02\x02\u016A\u016B\x07Q\x02\x02' +
    '\u016B\u016C\x07Y\x02\x02\u016C\u016D\x07G\x02\x02\u016D\u01D9\x07T\x02' +
    '\x02\u016E\u016F\x07E\x02\x02\u016F\u0170\x07Q\x02\x02\u0170\u0171\x07' +
    'P\x02\x02\u0171\u0172\x07E\x02\x02\u0172\u0173\x07C\x02\x02\u0173\u0174' +
    '\x07V\x02\x02\u0174\u0175\x07G\x02\x02\u0175\u0176\x07P\x02\x02\u0176' +
    '\u0177\x07C\x02\x02\u0177\u0178\x07V\x02\x02\u0178\u01D9\x07G\x02\x02' +
    '\u0179\u017A\x07G\x02\x02\u017A\u017B\x07Z\x02\x02\u017B\u017C\x07C\x02' +
    '\x02\u017C\u017D\x07E\x02\x02\u017D\u01D9\x07V\x02\x02\u017E\u017F\x07' +
    'H\x02\x02\u017F\u0180\x07K\x02\x02\u0180\u0181\x07P\x02\x02\u0181\u01D9' +
    '\x07F\x02\x02\u0182\u0183\x07N\x02\x02\u0183\u0184\x07G\x02\x02\u0184' +
    '\u0185\x07H\x02\x02\u0185\u01D9\x07V\x02\x02\u0186\u0187\x07N\x02\x02' +
    '\u0187\u0188\x07G\x02\x02\u0188\u01D9\x07P\x02\x02\u0189\u018A\x07N\x02' +
    '\x02\u018A\u018B\x07Q\x02\x02\u018B\u018C\x07Y\x02\x02\u018C\u018D\x07' +
    'G\x02\x02\u018D\u01D9\x07T\x02\x02\u018E\u018F\x07O\x02\x02\u018F\u0190' +
    '\x07K\x02\x02\u0190\u01D9\x07F\x02\x02\u0191\u0192\x07P\x02\x02\u0192' +
    '\u0193\x07W\x02\x02\u0193\u0194\x07O\x02\x02\u0194\u0195\x07D\x02\x02' +
    '\u0195\u0196\x07G\x02\x02\u0196\u0197\x07T\x02\x02\u0197\u0198\x07X\x02' +
    '\x02\u0198\u0199\x07C\x02\x02\u0199\u019A\x07N\x02\x02\u019A\u019B\x07' +
    'W\x02\x02\u019B\u01D9\x07G\x02\x02\u019C\u019D\x07R\x02\x02\u019D\u019E' +
    '\x07T\x02\x02\u019E\u019F\x07Q\x02\x02\u019F\u01A0\x07R\x02\x02\u01A0' +
    '\u01A1\x07G\x02\x02\u01A1\u01D9\x07T\x02\x02\u01A2\u01A3\x07T\x02\x02' +
    '\u01A3\u01A4\x07G\x02\x02\u01A4\u01A5\x07R\x02\x02\u01A5\u01D9\x07V\x02' +
    '\x02\u01A6\u01A7\x07T\x02\x02\u01A7\u01A8\x07K\x02\x02\u01A8\u01A9\x07' +
    'I\x02\x02\u01A9\u01AA\x07J\x02\x02\u01AA\u01D9\x07V\x02\x02\u01AB\u01AC' +
    '\x07U\x02\x02\u01AC\u01AD\x07G\x02\x02\u01AD\u01AE\x07C\x02\x02\u01AE' +
    '\u01AF\x07T\x02\x02\u01AF\u01B0\x07E\x02\x02\u01B0\u01D9\x07J\x02\x02' +
    '\u01B1\u01B2\x07U\x02\x02\u01B2\u01B3\x07R\x02\x02\u01B3\u01B4\x07N\x02' +
    '\x02\u01B4\u01B5\x07K\x02\x02\u01B5\u01D9\x07V\x02\x02\u01B6\u01B7\x07' +
    'U\x02\x02\u01B7\u01B8\x07W\x02\x02\u01B8\u01B9\x07D\x02\x02\u01B9\u01BA' +
    '\x07U\x02\x02\u01BA\u01BB\x07V\x02\x02\u01BB\u01BC\x07K\x02\x02\u01BC' +
    '\u01BD\x07V\x02\x02\u01BD\u01BE\x07W\x02\x02\u01BE\u01BF\x07V\x02\x02' +
    '\u01BF\u01D9\x07G\x02\x02\u01C0\u01C1\x07V\x02\x02\u01C1\u01C2\x07T\x02' +
    '\x02\u01C2\u01C3\x07K\x02\x02\u01C3\u01D9\x07O\x02\x02\u01C4\u01C5\x07' +
    'W\x02\x02\u01C5\u01C6\x07R\x02\x02\u01C6\u01C7\x07R\x02\x02\u01C7\u01C8' +
    '\x07G\x02\x02\u01C8\u01D9\x07T\x02\x02\u01C9\u01CA\x07K\x02\x02\u01CA' +
    '\u01CB\x07U\x02\x02\u01CB\u01CC\x07D\x02\x02\u01CC\u01CD\x07N\x02\x02' +
    '\u01CD\u01CE\x07C\x02\x02\u01CE\u01CF\x07P\x02\x02\u01CF\u01D9\x07M\x02' +
    '\x02\u01D0\u01D1\x07K\x02\x02\u01D1\u01D2\x07P\x02\x02\u01D2\u01D3\x07' +
    'E\x02\x02\u01D3\u01D4\x07N\x02\x02\u01D4\u01D5\x07W\x02\x02\u01D5\u01D6' +
    '\x07F\x02\x02\u01D6\u01D7\x07G\x02\x02\u01D7\u01D9\x07U\x02\x02\u01D8' +
    '\x85\x03\x02\x02\x02\u01D8\x89\x03\x02\x02\x02\u01D8\x92\x03\x02\x02\x02' +
    '\u01D8\x95\x03\x02\x02\x02\u01D8\x99\x03\x02\x02\x02\u01D8\xA0\x03\x02' +
    '\x02\x02\u01D8\xA5\x03\x02\x02\x02\u01D8\xAC\x03\x02\x02\x02\u01D8\xB0' +
    '\x03\x02\x02\x02\u01D8\xB6\x03\x02\x02\x02\u01D8\xC0\x03\x02\x02\x02\u01D8' +
    '\xC5\x03\x02\x02\x02\u01D8\xC8\x03\x02\x02\x02\u01D8\xCE\x03\x02\x02\x02' +
    '\u01D8\xD2\x03\x02\x02\x02\u01D8\xDB\x03\x02\x02\x02\u01D8\xE0\x03\x02' +
    '\x02\x02\u01D8\xE7\x03\x02\x02\x02\u01D8\xEB\x03\x02\x02\x02\u01D8\xF2' +
    '\x03\x02\x02\x02\u01D8\xF5\x03\x02\x02\x02\u01D8\xF7\x03\x02\x02\x02\u01D8' +
    '\xFA\x03\x02\x02\x02\u01D8\xFC\x03\x02\x02\x02\u01D8\u0102\x03\x02\x02' +
    '\x02\u01D8\u0105\x03\x02\x02\x02\u01D8\u010C\x03\x02\x02\x02\u01D8\u0117' +
    '\x03\x02\x02\x02\u01D8\u011A\x03\x02\x02\x02\u01D8\u011F\x03\x02\x02\x02' +
    '\u01D8\u0128\x03\x02\x02\x02\u01D8\u012A\x03\x02\x02\x02\u01D8\u012D\x03' +
    '\x02\x02\x02\u01D8\u0132\x03\x02\x02\x02\u01D8\u0135\x03\x02\x02\x02\u01D8' +
    '\u0138\x03\x02\x02\x02\u01D8\u013B\x03\x02\x02\x02\u01D8\u0140\x03\x02' +
    '\x02\x02\u01D8\u0149\x03\x02\x02\x02\u01D8\u0150\x03\x02\x02\x02\u01D8' +
    '\u0154\x03\x02\x02\x02\u01D8\u015B\x03\x02\x02\x02\u01D8\u015E\x03\x02' +
    '\x02\x02\u01D8\u0163\x03\x02\x02\x02\u01D8\u0169\x03\x02\x02\x02\u01D8' +
    '\u016E\x03\x02\x02\x02\u01D8\u0179\x03\x02\x02\x02\u01D8\u017E\x03\x02' +
    '\x02\x02\u01D8\u0182\x03\x02\x02\x02\u01D8\u0186\x03\x02\x02\x02\u01D8' +
    '\u0189\x03\x02\x02\x02\u01D8\u018E\x03\x02\x02\x02\u01D8\u0191\x03\x02' +
    '\x02\x02\u01D8\u019C\x03\x02\x02\x02\u01D8\u01A2\x03\x02\x02\x02\u01D8' +
    '\u01A6\x03\x02\x02\x02\u01D8\u01AB\x03\x02\x02\x02\u01D8\u01B1\x03\x02' +
    '\x02\x02\u01D8\u01B6\x03\x02\x02\x02\u01D8\u01C0\x03\x02\x02\x02\u01D8' +
    '\u01C4\x03\x02\x02\x02\u01D8\u01C9\x03\x02\x02\x02\u01D8\u01D0\x03\x02' +
    "\x02\x02\u01D9$\x03\x02\x02\x02\u01DA\u01DB\x05M'\x02\u01DB&\x03\x02" +
    '\x02\x02\u01DC\u01DD\x05Q)\x02\u01DD(\x03\x02\x02\x02\u01DE\u01E2\x07' +
    '$\x02\x02\u01DF\u01E1\x05/\x18\x02\u01E0\u01DF\x03\x02\x02\x02\u01E1\u01E4' +
    '\x03\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02' +
    '\u01E3\u01E5\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E5\u01EF\x07' +
    '$\x02\x02\u01E6\u01EA\x07)\x02\x02\u01E7\u01E9\x051\x19\x02\u01E8\u01E7' +
    '\x03\x02\x02\x02\u01E9\u01EC\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02' +
    '\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01ED\x03\x02\x02\x02\u01EC\u01EA\x03' +
    '\x02\x02\x02\u01ED\u01EF\x07)\x02\x02\u01EE\u01DE\x03\x02\x02\x02\u01EE' +
    '\u01E6\x03\x02\x02\x02\u01EF*\x03\x02\x02\x02\u01F0\u01F2\t\x02\x02\x02' +
    '\u01F1\u01F0\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F1\x03' +
    '\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5' +
    '\u01F6\b\x16\x02\x02\u01F6,\x03\x02\x02\x02\u01F7\u01F9\t\x03\x02\x02' +
    '\u01F8\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01F8\x03' +
    '\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC' +
    '\u01FD\b\x17\x02\x02\u01FD.\x03\x02\x02\x02\u01FE\u0203\n\x04\x02\x02' +
    '\u01FF\u0200\x07^\x02\x02\u0200\u0203\x053\x1A\x02\u0201\u0203\x05C"' +
    '\x02\u0202\u01FE\x03\x02\x02\x02\u0202\u01FF\x03\x02\x02\x02\u0202\u0201' +
    '\x03\x02\x02\x02\u0203';
  private static readonly _serializedATNSegment1: string =
    '0\x03\x02\x02\x02\u0204\u0209\n\x05\x02\x02\u0205\u0206\x07^\x02\x02\u0206' +
    '\u0209\x053\x1A\x02\u0207\u0209\x05C"\x02\u0208\u0204\x03\x02\x02\x02' +
    '\u0208\u0205\x03\x02\x02\x02\u0208\u0207\x03\x02\x02\x02\u02092\x03\x02' +
    '\x02\x02\u020A\u0210\x055\x1B\x02\u020B\u0210\x072\x02\x02\u020C\u0210' +
    '\x057\x1C\x02\u020D\u0210\x059\x1D\x02\u020E\u0210\x05;\x1E\x02\u020F' +
    '\u020A\x03\x02\x02\x02\u020F\u020B\x03\x02\x02\x02\u020F\u020C\x03\x02' +
    '\x02\x02\u020F\u020D\x03\x02\x02\x02\u020F\u020E\x03\x02\x02\x02\u0210' +
    '4\x03\x02\x02\x02\u0211\u0214\x05=\x1F\x02\u0212\u0214\x05? \x02\u0213' +
    '\u0211\x03\x02\x02\x02\u0213\u0212\x03\x02\x02\x02\u02146\x03\x02\x02' +
    '\x02\u0215\u0216\x07z\x02\x02\u0216\u0217\x05E#\x02\u0217\u0218\x05E#' +
    '\x02\u02188\x03\x02\x02\x02\u0219\u021A\x07w\x02\x02\u021A\u021B\x05E' +
    '#\x02\u021B\u021C\x05E#\x02\u021C\u021D\x05E#\x02\u021D\u021E\x05E#\x02' +
    '\u021E:\x03\x02\x02\x02\u021F\u0220\x07w\x02\x02\u0220\u0222\x07}\x02' +
    '\x02\u0221\u0223\x05E#\x02\u0222\u0221\x03\x02\x02\x02\u0223\u0224\x03' +
    '\x02\x02\x02\u0224\u0222\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225' +
    '\u0226\x03\x02\x02\x02\u0226\u0227\x07\x7F\x02\x02\u0227<\x03\x02\x02' +
    '\x02\u0228\u0229\t\x06\x02\x02\u0229>\x03\x02\x02\x02\u022A\u022B\n\x07' +
    '\x02\x02\u022B@\x03\x02\x02\x02\u022C\u022F\x05=\x1F\x02\u022D\u022F\t' +
    '\b\x02\x02\u022E\u022C\x03\x02\x02\x02\u022E\u022D\x03\x02\x02\x02\u022F' +
    'B\x03\x02\x02\x02\u0230\u0231\x07^\x02\x02\u0231\u0232\t\t\x02\x02\u0232' +
    'D\x03\x02\x02\x02\u0233\u0234\t\n\x02\x02\u0234F\x03\x02\x02\x02\u0235' +
    '\u0236\t\v\x02\x02\u0236H\x03\x02\x02\x02\u0237\u0239\x05G$\x02\u0238' +
    '\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A\u0238\x03\x02' +
    '\x02\x02\u023A\u023B\x03\x02\x02\x02\u023BJ\x03\x02\x02\x02\u023C\u023E' +
    '\x05G$\x02\u023D\u023C\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F' +
    '\u023D\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240\u0241\x03\x02' +
    '\x02\x02\u0241\u0243\x070\x02\x02\u0242\u0244\x05G$\x02\u0243\u0242\x03' +
    '\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0243\x03\x02\x02\x02\u0245' +
    '\u0246\x03\x02\x02\x02\u0246L\x03\x02\x02\x02\u0247\u024A\x05I%\x02\u0248' +
    '\u024A\x05K&\x02\u0249\u0247\x03\x02\x02\x02\u0249\u0248\x03\x02\x02\x02' +
    '\u024AN\x03\x02\x02\x02\u024B\u0257\x072\x02\x02\u024C\u024E\x07/\x02' +
    '\x02\u024D\u024C\x03\x02\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E\u024F' +
    '\x03\x02\x02\x02\u024F\u0253\t\v\x02\x02\u0250\u0252\t\v\x02\x02\u0251' +
    '\u0250\x03\x02\x02\x02\u0252\u0255\x03\x02\x02\x02\u0253\u0251\x03\x02' +
    '\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0257\x03\x02\x02\x02\u0255' +
    '\u0253\x03\x02\x02\x02\u0256\u024B\x03\x02\x02\x02\u0256\u024D\x03\x02' +
    '\x02\x02\u0257P\x03\x02\x02\x02\u0258\u025C\x05U+\x02\u0259\u025B\x05' +
    'W,\x02\u025A\u0259\x03\x02\x02\x02\u025B\u025E\x03\x02\x02\x02\u025C\u025A' +
    '\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u027D\x03\x02\x02\x02' +
    '\u025E\u025C\x03\x02\x02\x02\u025F\u0260\x05U+\x02\u0260\u0261\x07]\x02' +
    '\x02\u0261\u0262\x05I%\x02\u0262\u0266\x07_\x02\x02\u0263\u0265\x05W,' +
    '\x02\u0264\u0263\x03\x02\x02\x02\u0265\u0268\x03\x02\x02\x02\u0266\u0264' +
    '\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u027D\x03\x02\x02\x02' +
    '\u0268\u0266\x03\x02\x02\x02\u0269\u026A\x07&\x02\x02\u026A\u026E\x05' +
    'U+\x02\u026B\u026D\x05W,\x02\u026C\u026B\x03\x02\x02\x02\u026D\u0270\x03' +
    '\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F' +
    '\u027D\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0271\u0272\x07&\x02' +
    '\x02\u0272\u0273\x05U+\x02\u0273\u0274\x07]\x02\x02\u0274\u0275\x05I%' +
    '\x02\u0275\u0279\x07_\x02\x02\u0276\u0278\x05W,\x02\u0277\u0276\x03\x02' +
    '\x02\x02\u0278\u027B\x03\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u0279' +
    '\u027A\x03\x02\x02\x02\u027A\u027D\x03\x02\x02\x02\u027B\u0279\x03\x02' +
    '\x02\x02\u027C\u0258\x03\x02\x02\x02\u027C\u025F\x03\x02\x02\x02\u027C' +
    '\u0269\x03\x02\x02\x02\u027C\u0271\x03\x02\x02\x02\u027DR\x03\x02\x02' +
    '\x02\u027E\u0282\x05U+\x02\u027F\u0281\x05W,\x02\u0280\u027F\x03\x02\x02' +
    '\x02\u0281\u0284\x03\x02\x02\x02\u0282\u0280\x03\x02\x02\x02\u0282\u0283' +
    '\x03\x02\x02\x02\u0283T\x03\x02\x02\x02\u0284\u0282\x03\x02\x02\x02\u0285' +
    '\u0289\t\f\x02\x02\u0286\u0288\t\f\x02\x02\u0287\u0286\x03\x02\x02\x02' +
    '\u0288\u028B\x03\x02\x02\x02\u0289\u0287\x03\x02\x02\x02\u0289\u028A\x03' +
    '\x02\x02\x02\u028AV\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028C' +
    '\u028D\x070\x02\x02\u028D\u0295\x05U+\x02\u028E\u028F\x070\x02\x02\u028F' +
    '\u0290\x05U+\x02\u0290\u0291\x07]\x02\x02\u0291\u0292\x05I%\x02\u0292' +
    '\u0293\x07_\x02\x02\u0293\u0295\x03\x02\x02\x02\u0294\u028C\x03\x02\x02' +
    '\x02\u0294\u028E\x03\x02\x02\x02\u0295X\x03\x02\x02\x02\x1F\x02\x83\u01D8' +
    '\u01E2\u01EA\u01EE\u01F3\u01FA\u0202\u0208\u020F\u0213\u0224\u022E\u023A' +
    '\u023F\u0245\u0249\u024D\u0253\u0256\u025C\u0266\u026E\u0279\u027C\u0282' +
    '\u0289\u0294\x03\x02\x03\x02';
  public static readonly _serializedATN: string = Utils.join(
    [FormulaLexer._serializedATNSegment0, FormulaLexer._serializedATNSegment1],
    '',
  );
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!FormulaLexer.__ATN) {
      FormulaLexer.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(FormulaLexer._serializedATN),
      );
    }

    return FormulaLexer.__ATN;
  }
}
