lexer grammar FormulaLexer;

channels {
	ERROR
}

OpenParen: '(';
CloseParen: ')';
OpenBrace: '{';
CloseBrace: '}';
Comma: ',';
Plus: '+';
Minus: '-';
Multiply: '*';
Divide: '/';
EQ: '=';
NE: '<>';
GT: '>';
GTE: '>=';
LT: '<';
LTE: '<=';

/// Boolean Literals
BooleanLiteral: 'true' | 'false';

/// Function Literals
FunctionLiteral:
	'DATE' //日期函数开始
	| 'DATEVALUE'
	| 'DAY'
	| 'DAYS'
	| 'DAYS360'
	| 'EDATE'
	| 'EOMONTH'
	| 'HOUR'
	| 'MINUTE'
	| 'ISOWEEKNUM'
	| 'MONTH'
	| 'NOW'
	| 'SECOND'
	| 'TIME'
	| 'TIMEVALUE'
	| 'TODAY'
	| 'WEEKDAY'
	| 'YEAR'
	| 'WEEKNUM' //日期函数结束
	| 'AND' //逻辑函数开始
	| 'IF'
	| 'NOT'
	| 'OR'
	| 'SWITCH' //逻辑函数结束
	| 'ABS' //数字函数开始
	| 'CEILING'
	| 'CEILINGMATH' //no
	| 'EXP'
	| 'FLOOR'
	| 'FLOORMATH' //no
	| 'LN'
	| 'LOG'
	| 'LOG10'
	| 'MAX'
	| 'MIN'
	| 'MOD'
	| 'ROUND'
	| 'ROUNDDOWN'
	| 'ROUNDUP'
	| 'SQRT'
	| 'AVERAGE' //avg
	| 'SUM'
	| 'COUNT'
	| 'COUNTA'
	| 'POWER' //数字函数结束
	| 'CONCATENATE' //字符串开始
	| 'EXACT'
	| 'FIND'
	| 'LEFT'
	| 'LEN'
	| 'LOWER'
	| 'MID'
	| 'NUMBERVALUE'
	| 'PROPER'
	| 'REPT'
	| 'RIGHT'
	| 'SEARCH'
	| 'SPLIT' //no
	| 'SUBSTITUTE'
	| 'TRIM'
	| 'UPPER' //字符串结束
	| 'ISBLANK'
	| 'INCLUDES';

/// Numeric Literals
//DecimalLiteral:
//	DecimalIntegerLiteral '.' [0-9]*
//	| '.' [0-9]+
//	| DecimalIntegerLiteral;
DecimalLiteral:
      NumberLiteral
//      | '-'? NumberLiteral //不支持-会和-号冲突,若要负数，可用(0-n)
      ;

/// Field Literals
FieldLiteral: Field;

/// String Literals
StringLiteral:
	'"' DoubleStringCharacter* '"'
	| '\'' SingleStringCharacter* '\'';

NEWLINE: ('\n'|'\r')+ -> channel(HIDDEN);

WS: [\t\u000B\u000C\u0020\u00A0]+ -> channel(HIDDEN);
//WS:(' '|'\t')+{skip();};

/// UnexpectedCharacter: . -> channel(ERROR);

/// Fragment rules

fragment DoubleStringCharacter:
	~["\\\r\n]
	| '\\' EscapeSequence
	| LineContinuation;

fragment SingleStringCharacter:
	~['\\\r\n]
	| '\\' EscapeSequence
	| LineContinuation;

fragment EscapeSequence:
	CharacterEscapeSequence
	| '0' // no digit ahead! TODO
	| HexEscapeSequence
	| UnicodeEscapeSequence
	| ExtendedUnicodeEscapeSequence;

fragment CharacterEscapeSequence:
	SingleEscapeCharacter
	| NonEscapeCharacter;

fragment HexEscapeSequence: 'x' HexDigit HexDigit;

fragment UnicodeEscapeSequence:
	'u' HexDigit HexDigit HexDigit HexDigit;

fragment ExtendedUnicodeEscapeSequence: 'u' '{' HexDigit+ '}';

fragment SingleEscapeCharacter: ['"\\bfnrtv];

fragment NonEscapeCharacter: ~['"\\bfnrtv0-9xu\r\n];

fragment EscapeCharacter: SingleEscapeCharacter | [0-9] | [xu];

fragment LineContinuation: '\\' [\r\n\u2028\u2029];

fragment HexDigit: [0-9a-fA-F];

fragment DIGIT : [0-9] ;  // match single digit

fragment INT : DIGIT+ ;

fragment FLOAT: DIGIT+ '.' DIGIT+    // match 1. 39. 3.14159 etc...
            ;
fragment NumberLiteral: INT | FLOAT;

fragment DecimalIntegerLiteral: '0' | '-'? [0-9] [0-9]*; //废弃

fragment Field:
	FieldPathSegment FieldPathSubSegment*
	| FieldPathSegment '[' INT ']' FieldPathSubSegment*
	| '$' FieldPathSegment FieldPathSubSegment*
	| '$' FieldPathSegment '[' INT ']' FieldPathSubSegment*;

fragment FieldPath: FieldPathSegment FieldPathSubSegment*;

fragment FieldPathSegment:
	[0-9a-zA-Z_][a-zA-Z0-9_]*;

fragment FieldPathSubSegment:
	'.' FieldPathSegment
	| '.' FieldPathSegment '[' INT ']';
