lexer grammar PowerFxLexer;

OpenBracket: '[';
CloseBracket: ']';
OpenParen: '(';
CloseParen: ')';
OpenBrace: '{';
CloseBrace: '}';
Ellipsis: '...';
Colon: ':';

// Whitepsace

Whitespace: [\t\u000B\u000C\u0020\u00A0]+ -> channel(HIDDEN);

// Comments

Comment: SingleLineComment | MultiLineComment;

MultiLineComment: '/*' .*? '*/' -> channel(HIDDEN);
SingleLineComment:
	'//' ~[\r\n\u2028\u2029]* -> channel(HIDDEN);

// Literals

Literal: LogicalLiteral | NumberLiteral | TextLiteral;

LogicalLiteral: 'true' | 'false';

/// Numeric Literals

NumberLiteral:
	DecimalDigits
	| DecimalDigits DecimalSeparator DecimalDigits?
	| DecimalSeparator DecimalDigits;

DecimalDigits: DecimalDigit DecimalDigit?;

TextLiteral:
	'"' DoubleStringCharacter* '"'
	| '\'' SingleStringCharacter* '\'';

// Identifiers

Identifier: IdentifierName;

ContextKeyword:
	'$DataGrid'
	| '$Record'
	| '$PageParams'
	| '$PageStates';

// Operators

DecimalSeparator: '.';

ListSeparator: ',';

ChainingSeparator: ';';

Operator:
	BinaryOperator
	| BinaryOperatorRequiresWhitespace
	| PrefixOperator
	| PrefixOperatorRequiresWhitespace
	| PostfixOperator;

BinaryOperator:
	'='
	| '<'
	| '<='
	| '>'
	| '>='
	| '<>'
	| '+'
	| '-'
	| '*'
	| '/'
	| '^'
	| '&'
	| '&&'
	| '||'
	| 'in'
	| 'exactin';

BinaryOperatorRequiresWhitespace:
	'And' Whitespace
	| 'Or' Whitespace;

PrefixOperator: '!';

PrefixOperatorRequiresWhitespace: 'Not' Whitespace;

PostfixOperator: '%';

ReferenceOperator: '.' | '!';

/// Fragment rules

fragment DecimalDigit: [0-9];

fragment IdentifierName:
	IdentifierStartCharacter IdentifierContinueCharacters?;

fragment IdentifierContinueCharacters:
	IdentifierStartCharacter
	| [\p{Mn}]
	| [\p{Nd}]
	| [\p{Pc}];

fragment IdentifierStartCharacter:
	[\p{L}]
	| [$_]
	| '\\' UnicodeEscapeSequence;

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
	'u' HexDigit HexDigit HexDigit HexDigit
	| 'u' '{' HexDigit HexDigit+ '}';

fragment ExtendedUnicodeEscapeSequence: 'u' '{' HexDigit+ '}';

fragment SingleEscapeCharacter: ['"\\bfnrtv];

fragment NonEscapeCharacter: ~['"\\bfnrtv0-9xu\r\n];

fragment EscapeCharacter: SingleEscapeCharacter | [0-9] | [xu];

fragment LineContinuation: '\\' [\r\n\u2028\u2029];

fragment HexDigit: [0-9a-fA-F];

