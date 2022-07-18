parser grammar PowerFxParser;

options {
	tokenVocab = PowerFxLexer;
}

expressionUnit: expressionElements?;

expressionElements:
	expressionElement
	| expressionElement expressionElements?;

expressionElement: Whitespace | Comment | expression;

// Function call

functionCall: functionIdentifier '(' functionArguments? ')';

functionIdentifier:
	Identifier
	| Identifier '.' functionIdentifier;

functionArguments:
	chainedExpression
	| chainedExpression ListSeparator functionArguments;

chainedExpression:
	expression
	| expression ChainingSeparator chainedExpression?;

expression:
	Literal
	| reference
	| inlineRecord
	| inlineTable
	| functionCall
	| '(' expression ')'
	| PrefixOperator expression
	| expression PostfixOperator
	| expression BinaryOperator expression;

reference:
	baseReference
	| baseReference ReferenceOperator referenceList
	| baseReference inlineTable referenceList?
	;

baseReference: Identifier | ContextKeyword;

referenceList:
	Identifier
	| Identifier ReferenceOperator referenceList;

inlineRecord: '{' inlineRecordList? '}';

inlineRecordList:
	Identifier ':' expression
	| Identifier ':' expression ListSeparator inlineRecordList;

inlineTable: '[' inlineTableList? ']';

inlineTableList:
	expression
	| expression ListSeparator inlineTableList;
