parser grammar FormulaParser;

options {
	tokenVocab = FormulaLexer;
}

stat: singleExpression | NEWLINE;

arguments: '(' (argumentList ','?)? ')';

argumentList: argument (',' argument)*;

argument: // ECMAScript 6: Spread Operator
	singleExpression;

variable: FieldLiteral;

function:
	FunctionLiteral arguments;

singleExpression:
	DecimalLiteral																	# DecimalLiteralExpression
	| StringLiteral																	# StringLiteralExpression
	| BooleanLiteral																# BooleanLiteralExpression
	| function										 									# FunctionExpression
	| variable																			# VariableExpression
	| '(' singleExpression ')'                      # ParenthesizedExpression
	| singleExpression op=(Multiply | Divide) singleExpression	 # MultiplicativeExpression
	| singleExpression op=(Plus | Minus) singleExpression	 # AdditiveExpression
	| singleExpression cmp=(GT | GTE | LT | LTE | EQ | NE) singleExpression # CompareExpression
;