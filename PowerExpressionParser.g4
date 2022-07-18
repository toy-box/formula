parser grammar PowerExpressionParser;

options {
	tokenVocab = PowerExpressionLexer;
}

expressionUnit: HashBangLine? statement? EOF;

statement: expressionSequence eos;

arrayLiteral: (OpenBracket elementList CloseBracket);

elementList:
	','* arrayElement? (','+ arrayElement)* ','*; // Yes, everything is optional

arrayElement: singleExpression;

propertyAssignment:
	propertyName ':' singleExpression # PropertyExpressionAssignment;

propertyName:
	identifierName
	| StringLiteral
	| '[' singleExpression ']';

literal:
	NullLiteral
	| BooleanLiteral
	| StringLiteral
	| numericLiteral;

numericLiteral: DecimalLiteral;

identifierName: identifier | reservedWord;

identifier: Identifier;

reservedWord: | NullLiteral | BooleanLiteral;

arguments: '(' (argument (',' argument)* ','?)? ')';

argument: (expressionSequence | identifier);

expressionSequence: singleExpression (';' singleExpression)*;

singleExpression:
	FunctionLiteral arguments													# FunctionExpression
	| BehaviorFunctionLiteral arguments										    # BehaviorExpression
	| singleExpression op = (Multiply | Divide) singleExpression				# MultiplicativeExpression
	| singleExpression op = (Plus | Minus) singleExpression						# AdditiveExpression
	| singleExpression cmp = (GT | GTE | LT | LTE | EQ | NE) singleExpression	# CompareExpression
	| identifier																# IdentifierExpression
	| literal																	# LiteralExpression
	| arrayLiteral																# ArrayLiteralExpression
	| objectLiteral																# ObjectLiteralExpression
	| '(' expressionSequence ')'												# ParenthesizedExpression;

objectLiteral:
	'{' (propertyAssignment (',' propertyAssignment)* ','?)? '}';

eos: SemiColon | EOF;
