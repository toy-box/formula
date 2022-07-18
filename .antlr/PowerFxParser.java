// Generated from /Users/huhui/Code/formula/PowerFxParser.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class PowerFxParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		OpenBracket=1, CloseBracket=2, OpenParen=3, CloseParen=4, OpenBrace=5, 
		CloseBrace=6, Ellipsis=7, Colon=8, Whitespace=9, Comment=10, MultiLineComment=11, 
		SingleLineComment=12, Literal=13, LogicalLiteral=14, NumberLiteral=15, 
		DecimalDigits=16, TextLiteral=17, Identifier=18, ContextKeyword=19, DecimalSeparator=20, 
		ListSeparator=21, ChainingSeparator=22, Operator=23, BinaryOperator=24, 
		BinaryOperatorRequiresWhitespace=25, PrefixOperator=26, PrefixOperatorRequiresWhitespace=27, 
		PostfixOperator=28, ReferenceOperator=29;
	public static final int
		RULE_expressionUnit = 0, RULE_expressionElements = 1, RULE_expressionElement = 2, 
		RULE_functionCall = 3, RULE_functionIdentifier = 4, RULE_functionArguments = 5, 
		RULE_chainedExpression = 6, RULE_expression = 7, RULE_reference = 8, RULE_baseReference = 9, 
		RULE_referenceList = 10, RULE_inlineRecord = 11, RULE_inlineRecordList = 12, 
		RULE_inlineTable = 13, RULE_inlineTableList = 14;
	private static String[] makeRuleNames() {
		return new String[] {
			"expressionUnit", "expressionElements", "expressionElement", "functionCall", 
			"functionIdentifier", "functionArguments", "chainedExpression", "expression", 
			"reference", "baseReference", "referenceList", "inlineRecord", "inlineRecordList", 
			"inlineTable", "inlineTableList"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'['", "']'", "'('", "')'", "'{'", "'}'", "'...'", "':'", null, 
			null, null, null, null, null, null, null, null, null, null, "'.'", "','", 
			"';'", null, null, null, "'!'", null, "'%'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "OpenBrace", 
			"CloseBrace", "Ellipsis", "Colon", "Whitespace", "Comment", "MultiLineComment", 
			"SingleLineComment", "Literal", "LogicalLiteral", "NumberLiteral", "DecimalDigits", 
			"TextLiteral", "Identifier", "ContextKeyword", "DecimalSeparator", "ListSeparator", 
			"ChainingSeparator", "Operator", "BinaryOperator", "BinaryOperatorRequiresWhitespace", 
			"PrefixOperator", "PrefixOperatorRequiresWhitespace", "PostfixOperator", 
			"ReferenceOperator"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "PowerFxParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public PowerFxParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ExpressionUnitContext extends ParserRuleContext {
		public ExpressionElementsContext expressionElements() {
			return getRuleContext(ExpressionElementsContext.class,0);
		}
		public ExpressionUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionUnit; }
	}

	public final ExpressionUnitContext expressionUnit() throws RecognitionException {
		ExpressionUnitContext _localctx = new ExpressionUnitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_expressionUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(31);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << Whitespace) | (1L << Comment) | (1L << Literal) | (1L << Identifier) | (1L << ContextKeyword) | (1L << PrefixOperator))) != 0)) {
				{
				setState(30);
				expressionElements();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionElementsContext extends ParserRuleContext {
		public ExpressionElementContext expressionElement() {
			return getRuleContext(ExpressionElementContext.class,0);
		}
		public ExpressionElementsContext expressionElements() {
			return getRuleContext(ExpressionElementsContext.class,0);
		}
		public ExpressionElementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionElements; }
	}

	public final ExpressionElementsContext expressionElements() throws RecognitionException {
		ExpressionElementsContext _localctx = new ExpressionElementsContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_expressionElements);
		int _la;
		try {
			setState(38);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(33);
				expressionElement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(34);
				expressionElement();
				setState(36);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << Whitespace) | (1L << Comment) | (1L << Literal) | (1L << Identifier) | (1L << ContextKeyword) | (1L << PrefixOperator))) != 0)) {
					{
					setState(35);
					expressionElements();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionElementContext extends ParserRuleContext {
		public TerminalNode Whitespace() { return getToken(PowerFxParser.Whitespace, 0); }
		public TerminalNode Comment() { return getToken(PowerFxParser.Comment, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionElement; }
	}

	public final ExpressionElementContext expressionElement() throws RecognitionException {
		ExpressionElementContext _localctx = new ExpressionElementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_expressionElement);
		try {
			setState(43);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Whitespace:
				enterOuterAlt(_localctx, 1);
				{
				setState(40);
				match(Whitespace);
				}
				break;
			case Comment:
				enterOuterAlt(_localctx, 2);
				{
				setState(41);
				match(Comment);
				}
				break;
			case OpenBracket:
			case OpenParen:
			case OpenBrace:
			case Literal:
			case Identifier:
			case ContextKeyword:
			case PrefixOperator:
				enterOuterAlt(_localctx, 3);
				{
				setState(42);
				expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionCallContext extends ParserRuleContext {
		public FunctionIdentifierContext functionIdentifier() {
			return getRuleContext(FunctionIdentifierContext.class,0);
		}
		public TerminalNode OpenParen() { return getToken(PowerFxParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(PowerFxParser.CloseParen, 0); }
		public FunctionArgumentsContext functionArguments() {
			return getRuleContext(FunctionArgumentsContext.class,0);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_functionCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			functionIdentifier();
			setState(46);
			match(OpenParen);
			setState(48);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << Literal) | (1L << Identifier) | (1L << ContextKeyword) | (1L << PrefixOperator))) != 0)) {
				{
				setState(47);
				functionArguments();
				}
			}

			setState(50);
			match(CloseParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionIdentifierContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(PowerFxParser.Identifier, 0); }
		public TerminalNode DecimalSeparator() { return getToken(PowerFxParser.DecimalSeparator, 0); }
		public FunctionIdentifierContext functionIdentifier() {
			return getRuleContext(FunctionIdentifierContext.class,0);
		}
		public FunctionIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionIdentifier; }
	}

	public final FunctionIdentifierContext functionIdentifier() throws RecognitionException {
		FunctionIdentifierContext _localctx = new FunctionIdentifierContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_functionIdentifier);
		try {
			setState(56);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(52);
				match(Identifier);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(53);
				match(Identifier);
				setState(54);
				match(DecimalSeparator);
				setState(55);
				functionIdentifier();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionArgumentsContext extends ParserRuleContext {
		public ChainedExpressionContext chainedExpression() {
			return getRuleContext(ChainedExpressionContext.class,0);
		}
		public TerminalNode ListSeparator() { return getToken(PowerFxParser.ListSeparator, 0); }
		public FunctionArgumentsContext functionArguments() {
			return getRuleContext(FunctionArgumentsContext.class,0);
		}
		public FunctionArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionArguments; }
	}

	public final FunctionArgumentsContext functionArguments() throws RecognitionException {
		FunctionArgumentsContext _localctx = new FunctionArgumentsContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_functionArguments);
		try {
			setState(63);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(58);
				chainedExpression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(59);
				chainedExpression();
				setState(60);
				match(ListSeparator);
				setState(61);
				functionArguments();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ChainedExpressionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode ChainingSeparator() { return getToken(PowerFxParser.ChainingSeparator, 0); }
		public ChainedExpressionContext chainedExpression() {
			return getRuleContext(ChainedExpressionContext.class,0);
		}
		public ChainedExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_chainedExpression; }
	}

	public final ChainedExpressionContext chainedExpression() throws RecognitionException {
		ChainedExpressionContext _localctx = new ChainedExpressionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_chainedExpression);
		int _la;
		try {
			setState(71);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(65);
				expression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(66);
				expression(0);
				setState(67);
				match(ChainingSeparator);
				setState(69);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << Literal) | (1L << Identifier) | (1L << ContextKeyword) | (1L << PrefixOperator))) != 0)) {
					{
					setState(68);
					chainedExpression();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public TerminalNode Literal() { return getToken(PowerFxParser.Literal, 0); }
		public ReferenceContext reference() {
			return getRuleContext(ReferenceContext.class,0);
		}
		public InlineRecordContext inlineRecord() {
			return getRuleContext(InlineRecordContext.class,0);
		}
		public InlineTableContext inlineTable() {
			return getRuleContext(InlineTableContext.class,0);
		}
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public TerminalNode OpenParen() { return getToken(PowerFxParser.OpenParen, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode CloseParen() { return getToken(PowerFxParser.CloseParen, 0); }
		public TerminalNode PrefixOperator() { return getToken(PowerFxParser.PrefixOperator, 0); }
		public TerminalNode BinaryOperator() { return getToken(PowerFxParser.BinaryOperator, 0); }
		public TerminalNode PostfixOperator() { return getToken(PowerFxParser.PostfixOperator, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 14;
		enterRecursionRule(_localctx, 14, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				setState(74);
				match(Literal);
				}
				break;
			case 2:
				{
				setState(75);
				reference();
				}
				break;
			case 3:
				{
				setState(76);
				inlineRecord();
				}
				break;
			case 4:
				{
				setState(77);
				inlineTable();
				}
				break;
			case 5:
				{
				setState(78);
				functionCall();
				}
				break;
			case 6:
				{
				setState(79);
				match(OpenParen);
				setState(80);
				expression(0);
				setState(81);
				match(CloseParen);
				}
				break;
			case 7:
				{
				setState(83);
				match(PrefixOperator);
				setState(84);
				expression(3);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(94);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(92);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(87);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(88);
						match(BinaryOperator);
						setState(89);
						expression(2);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(90);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(91);
						match(PostfixOperator);
						}
						break;
					}
					} 
				}
				setState(96);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ReferenceContext extends ParserRuleContext {
		public BaseReferenceContext baseReference() {
			return getRuleContext(BaseReferenceContext.class,0);
		}
		public TerminalNode ReferenceOperator() { return getToken(PowerFxParser.ReferenceOperator, 0); }
		public ReferenceListContext referenceList() {
			return getRuleContext(ReferenceListContext.class,0);
		}
		public InlineTableContext inlineTable() {
			return getRuleContext(InlineTableContext.class,0);
		}
		public ReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reference; }
	}

	public final ReferenceContext reference() throws RecognitionException {
		ReferenceContext _localctx = new ReferenceContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_reference);
		try {
			setState(107);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(97);
				baseReference();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(98);
				baseReference();
				setState(99);
				match(ReferenceOperator);
				setState(100);
				referenceList();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(102);
				baseReference();
				setState(103);
				inlineTable();
				setState(105);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
				case 1:
					{
					setState(104);
					referenceList();
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BaseReferenceContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(PowerFxParser.Identifier, 0); }
		public TerminalNode ContextKeyword() { return getToken(PowerFxParser.ContextKeyword, 0); }
		public BaseReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_baseReference; }
	}

	public final BaseReferenceContext baseReference() throws RecognitionException {
		BaseReferenceContext _localctx = new BaseReferenceContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_baseReference);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			_la = _input.LA(1);
			if ( !(_la==Identifier || _la==ContextKeyword) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReferenceListContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(PowerFxParser.Identifier, 0); }
		public TerminalNode ReferenceOperator() { return getToken(PowerFxParser.ReferenceOperator, 0); }
		public ReferenceListContext referenceList() {
			return getRuleContext(ReferenceListContext.class,0);
		}
		public ReferenceListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_referenceList; }
	}

	public final ReferenceListContext referenceList() throws RecognitionException {
		ReferenceListContext _localctx = new ReferenceListContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_referenceList);
		try {
			setState(115);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(111);
				match(Identifier);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(112);
				match(Identifier);
				setState(113);
				match(ReferenceOperator);
				setState(114);
				referenceList();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InlineRecordContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(PowerFxParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(PowerFxParser.CloseBrace, 0); }
		public InlineRecordListContext inlineRecordList() {
			return getRuleContext(InlineRecordListContext.class,0);
		}
		public InlineRecordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inlineRecord; }
	}

	public final InlineRecordContext inlineRecord() throws RecognitionException {
		InlineRecordContext _localctx = new InlineRecordContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_inlineRecord);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			match(OpenBrace);
			setState(119);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(118);
				inlineRecordList();
				}
			}

			setState(121);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InlineRecordListContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(PowerFxParser.Identifier, 0); }
		public TerminalNode Colon() { return getToken(PowerFxParser.Colon, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode ListSeparator() { return getToken(PowerFxParser.ListSeparator, 0); }
		public InlineRecordListContext inlineRecordList() {
			return getRuleContext(InlineRecordListContext.class,0);
		}
		public InlineRecordListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inlineRecordList; }
	}

	public final InlineRecordListContext inlineRecordList() throws RecognitionException {
		InlineRecordListContext _localctx = new InlineRecordListContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_inlineRecordList);
		try {
			setState(132);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(123);
				match(Identifier);
				setState(124);
				match(Colon);
				setState(125);
				expression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(126);
				match(Identifier);
				setState(127);
				match(Colon);
				setState(128);
				expression(0);
				setState(129);
				match(ListSeparator);
				setState(130);
				inlineRecordList();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InlineTableContext extends ParserRuleContext {
		public TerminalNode OpenBracket() { return getToken(PowerFxParser.OpenBracket, 0); }
		public TerminalNode CloseBracket() { return getToken(PowerFxParser.CloseBracket, 0); }
		public InlineTableListContext inlineTableList() {
			return getRuleContext(InlineTableListContext.class,0);
		}
		public InlineTableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inlineTable; }
	}

	public final InlineTableContext inlineTable() throws RecognitionException {
		InlineTableContext _localctx = new InlineTableContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_inlineTable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(134);
			match(OpenBracket);
			setState(136);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << Literal) | (1L << Identifier) | (1L << ContextKeyword) | (1L << PrefixOperator))) != 0)) {
				{
				setState(135);
				inlineTableList();
				}
			}

			setState(138);
			match(CloseBracket);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InlineTableListContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode ListSeparator() { return getToken(PowerFxParser.ListSeparator, 0); }
		public InlineTableListContext inlineTableList() {
			return getRuleContext(InlineTableListContext.class,0);
		}
		public InlineTableListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inlineTableList; }
	}

	public final InlineTableListContext inlineTableList() throws RecognitionException {
		InlineTableListContext _localctx = new InlineTableListContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_inlineTableList);
		try {
			setState(145);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(140);
				expression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(141);
				expression(0);
				setState(142);
				match(ListSeparator);
				setState(143);
				inlineTableList();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 7:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 1);
		case 1:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\37\u0096\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\5\2\"\n\2\3\3"+
		"\3\3\3\3\5\3\'\n\3\5\3)\n\3\3\4\3\4\3\4\5\4.\n\4\3\5\3\5\3\5\5\5\63\n"+
		"\5\3\5\3\5\3\6\3\6\3\6\3\6\5\6;\n\6\3\7\3\7\3\7\3\7\3\7\5\7B\n\7\3\b\3"+
		"\b\3\b\3\b\5\bH\n\b\5\bJ\n\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\5\tX\n\t\3\t\3\t\3\t\3\t\3\t\7\t_\n\t\f\t\16\tb\13\t\3\n\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\3\n\5\nl\n\n\5\nn\n\n\3\13\3\13\3\f\3\f\3\f\3\f\5\f"+
		"v\n\f\3\r\3\r\5\rz\n\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\5\16\u0087\n\16\3\17\3\17\5\17\u008b\n\17\3\17\3\17\3\20\3\20\3"+
		"\20\3\20\3\20\5\20\u0094\n\20\3\20\2\3\20\21\2\4\6\b\n\f\16\20\22\24\26"+
		"\30\32\34\36\2\3\3\2\24\25\2\u00a0\2!\3\2\2\2\4(\3\2\2\2\6-\3\2\2\2\b"+
		"/\3\2\2\2\n:\3\2\2\2\fA\3\2\2\2\16I\3\2\2\2\20W\3\2\2\2\22m\3\2\2\2\24"+
		"o\3\2\2\2\26u\3\2\2\2\30w\3\2\2\2\32\u0086\3\2\2\2\34\u0088\3\2\2\2\36"+
		"\u0093\3\2\2\2 \"\5\4\3\2! \3\2\2\2!\"\3\2\2\2\"\3\3\2\2\2#)\5\6\4\2$"+
		"&\5\6\4\2%\'\5\4\3\2&%\3\2\2\2&\'\3\2\2\2\')\3\2\2\2(#\3\2\2\2($\3\2\2"+
		"\2)\5\3\2\2\2*.\7\13\2\2+.\7\f\2\2,.\5\20\t\2-*\3\2\2\2-+\3\2\2\2-,\3"+
		"\2\2\2.\7\3\2\2\2/\60\5\n\6\2\60\62\7\5\2\2\61\63\5\f\7\2\62\61\3\2\2"+
		"\2\62\63\3\2\2\2\63\64\3\2\2\2\64\65\7\6\2\2\65\t\3\2\2\2\66;\7\24\2\2"+
		"\678\7\24\2\289\7\26\2\29;\5\n\6\2:\66\3\2\2\2:\67\3\2\2\2;\13\3\2\2\2"+
		"<B\5\16\b\2=>\5\16\b\2>?\7\27\2\2?@\5\f\7\2@B\3\2\2\2A<\3\2\2\2A=\3\2"+
		"\2\2B\r\3\2\2\2CJ\5\20\t\2DE\5\20\t\2EG\7\30\2\2FH\5\16\b\2GF\3\2\2\2"+
		"GH\3\2\2\2HJ\3\2\2\2IC\3\2\2\2ID\3\2\2\2J\17\3\2\2\2KL\b\t\1\2LX\7\17"+
		"\2\2MX\5\22\n\2NX\5\30\r\2OX\5\34\17\2PX\5\b\5\2QR\7\5\2\2RS\5\20\t\2"+
		"ST\7\6\2\2TX\3\2\2\2UV\7\34\2\2VX\5\20\t\5WK\3\2\2\2WM\3\2\2\2WN\3\2\2"+
		"\2WO\3\2\2\2WP\3\2\2\2WQ\3\2\2\2WU\3\2\2\2X`\3\2\2\2YZ\f\3\2\2Z[\7\32"+
		"\2\2[_\5\20\t\4\\]\f\4\2\2]_\7\36\2\2^Y\3\2\2\2^\\\3\2\2\2_b\3\2\2\2`"+
		"^\3\2\2\2`a\3\2\2\2a\21\3\2\2\2b`\3\2\2\2cn\5\24\13\2de\5\24\13\2ef\7"+
		"\37\2\2fg\5\26\f\2gn\3\2\2\2hi\5\24\13\2ik\5\34\17\2jl\5\26\f\2kj\3\2"+
		"\2\2kl\3\2\2\2ln\3\2\2\2mc\3\2\2\2md\3\2\2\2mh\3\2\2\2n\23\3\2\2\2op\t"+
		"\2\2\2p\25\3\2\2\2qv\7\24\2\2rs\7\24\2\2st\7\37\2\2tv\5\26\f\2uq\3\2\2"+
		"\2ur\3\2\2\2v\27\3\2\2\2wy\7\7\2\2xz\5\32\16\2yx\3\2\2\2yz\3\2\2\2z{\3"+
		"\2\2\2{|\7\b\2\2|\31\3\2\2\2}~\7\24\2\2~\177\7\n\2\2\177\u0087\5\20\t"+
		"\2\u0080\u0081\7\24\2\2\u0081\u0082\7\n\2\2\u0082\u0083\5\20\t\2\u0083"+
		"\u0084\7\27\2\2\u0084\u0085\5\32\16\2\u0085\u0087\3\2\2\2\u0086}\3\2\2"+
		"\2\u0086\u0080\3\2\2\2\u0087\33\3\2\2\2\u0088\u008a\7\3\2\2\u0089\u008b"+
		"\5\36\20\2\u008a\u0089\3\2\2\2\u008a\u008b\3\2\2\2\u008b\u008c\3\2\2\2"+
		"\u008c\u008d\7\4\2\2\u008d\35\3\2\2\2\u008e\u0094\5\20\t\2\u008f\u0090"+
		"\5\20\t\2\u0090\u0091\7\27\2\2\u0091\u0092\5\36\20\2\u0092\u0094\3\2\2"+
		"\2\u0093\u008e\3\2\2\2\u0093\u008f\3\2\2\2\u0094\37\3\2\2\2\25!&(-\62"+
		":AGIW^`kmuy\u0086\u008a\u0093";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}