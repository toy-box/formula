// Generated from /Users/huhui/Code/formula/PowerExpressionParser.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class PowerExpressionParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		HashBangLine=1, OpenBracket=2, CloseBracket=3, OpenParen=4, CloseParen=5, 
		OpenBrace=6, CloseBrace=7, Comma=8, SemiColon=9, Ellipsis=10, Colon=11, 
		Plus=12, Minus=13, Multiply=14, Divide=15, EQ=16, NE=17, GT=18, GTE=19, 
		LT=20, LTE=21, NullLiteral=22, BooleanLiteral=23, FunctionLiteral=24, 
		BehaviorFunctionLiteral=25, Identifier=26, DecimalLiteral=27, StringLiteral=28, 
		WhiteSpaces=29;
	public static final int
		RULE_expressionUnit = 0, RULE_statement = 1, RULE_arrayLiteral = 2, RULE_elementList = 3, 
		RULE_arrayElement = 4, RULE_propertyAssignment = 5, RULE_propertyName = 6, 
		RULE_literal = 7, RULE_numericLiteral = 8, RULE_identifierName = 9, RULE_identifier = 10, 
		RULE_reservedWord = 11, RULE_arguments = 12, RULE_argument = 13, RULE_expressionSequence = 14, 
		RULE_singleExpression = 15, RULE_objectLiteral = 16, RULE_eos = 17;
	private static String[] makeRuleNames() {
		return new String[] {
			"expressionUnit", "statement", "arrayLiteral", "elementList", "arrayElement", 
			"propertyAssignment", "propertyName", "literal", "numericLiteral", "identifierName", 
			"identifier", "reservedWord", "arguments", "argument", "expressionSequence", 
			"singleExpression", "objectLiteral", "eos"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'['", "']'", "'('", "')'", "'{'", "'}'", "','", "';'", "'...'", 
			"':'", "'+'", "'-'", "'*'", "'/'", "'='", "'<>'", "'>'", "'>='", "'<'", 
			"'<='", "'null'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "HashBangLine", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
			"OpenBrace", "CloseBrace", "Comma", "SemiColon", "Ellipsis", "Colon", 
			"Plus", "Minus", "Multiply", "Divide", "EQ", "NE", "GT", "GTE", "LT", 
			"LTE", "NullLiteral", "BooleanLiteral", "FunctionLiteral", "BehaviorFunctionLiteral", 
			"Identifier", "DecimalLiteral", "StringLiteral", "WhiteSpaces"
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
	public String getGrammarFileName() { return "PowerExpressionParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public PowerExpressionParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ExpressionUnitContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(PowerExpressionParser.EOF, 0); }
		public TerminalNode HashBangLine() { return getToken(PowerExpressionParser.HashBangLine, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
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
			setState(37);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==HashBangLine) {
				{
				setState(36);
				match(HashBangLine);
				}
			}

			setState(40);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << FunctionLiteral) | (1L << BehaviorFunctionLiteral) | (1L << Identifier) | (1L << DecimalLiteral) | (1L << StringLiteral))) != 0)) {
				{
				setState(39);
				statement();
				}
			}

			setState(42);
			match(EOF);
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

	public static class StatementContext extends ParserRuleContext {
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(44);
			expressionSequence();
			setState(45);
			eos();
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

	public static class ArrayLiteralContext extends ParserRuleContext {
		public TerminalNode OpenBracket() { return getToken(PowerExpressionParser.OpenBracket, 0); }
		public ElementListContext elementList() {
			return getRuleContext(ElementListContext.class,0);
		}
		public TerminalNode CloseBracket() { return getToken(PowerExpressionParser.CloseBracket, 0); }
		public ArrayLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayLiteral; }
	}

	public final ArrayLiteralContext arrayLiteral() throws RecognitionException {
		ArrayLiteralContext _localctx = new ArrayLiteralContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_arrayLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(47);
			match(OpenBracket);
			setState(48);
			elementList();
			setState(49);
			match(CloseBracket);
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

	public static class ElementListContext extends ParserRuleContext {
		public List<TerminalNode> Comma() { return getTokens(PowerExpressionParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(PowerExpressionParser.Comma, i);
		}
		public List<ArrayElementContext> arrayElement() {
			return getRuleContexts(ArrayElementContext.class);
		}
		public ArrayElementContext arrayElement(int i) {
			return getRuleContext(ArrayElementContext.class,i);
		}
		public ElementListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementList; }
	}

	public final ElementListContext elementList() throws RecognitionException {
		ElementListContext _localctx = new ElementListContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_elementList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(54);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(51);
					match(Comma);
					}
					} 
				}
				setState(56);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			}
			setState(58);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << FunctionLiteral) | (1L << BehaviorFunctionLiteral) | (1L << Identifier) | (1L << DecimalLiteral) | (1L << StringLiteral))) != 0)) {
				{
				setState(57);
				arrayElement();
				}
			}

			setState(68);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(61); 
					_errHandler.sync(this);
					_la = _input.LA(1);
					do {
						{
						{
						setState(60);
						match(Comma);
						}
						}
						setState(63); 
						_errHandler.sync(this);
						_la = _input.LA(1);
					} while ( _la==Comma );
					setState(65);
					arrayElement();
					}
					} 
				}
				setState(70);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			setState(74);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(71);
				match(Comma);
				}
				}
				setState(76);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class ArrayElementContext extends ParserRuleContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ArrayElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayElement; }
	}

	public final ArrayElementContext arrayElement() throws RecognitionException {
		ArrayElementContext _localctx = new ArrayElementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_arrayElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			singleExpression(0);
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

	public static class PropertyAssignmentContext extends ParserRuleContext {
		public PropertyAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertyAssignment; }
	 
		public PropertyAssignmentContext() { }
		public void copyFrom(PropertyAssignmentContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class PropertyExpressionAssignmentContext extends PropertyAssignmentContext {
		public PropertyNameContext propertyName() {
			return getRuleContext(PropertyNameContext.class,0);
		}
		public TerminalNode Colon() { return getToken(PowerExpressionParser.Colon, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public PropertyExpressionAssignmentContext(PropertyAssignmentContext ctx) { copyFrom(ctx); }
	}

	public final PropertyAssignmentContext propertyAssignment() throws RecognitionException {
		PropertyAssignmentContext _localctx = new PropertyAssignmentContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_propertyAssignment);
		try {
			_localctx = new PropertyExpressionAssignmentContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			propertyName();
			setState(80);
			match(Colon);
			setState(81);
			singleExpression(0);
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

	public static class PropertyNameContext extends ParserRuleContext {
		public IdentifierNameContext identifierName() {
			return getRuleContext(IdentifierNameContext.class,0);
		}
		public TerminalNode StringLiteral() { return getToken(PowerExpressionParser.StringLiteral, 0); }
		public TerminalNode OpenBracket() { return getToken(PowerExpressionParser.OpenBracket, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode CloseBracket() { return getToken(PowerExpressionParser.CloseBracket, 0); }
		public PropertyNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertyName; }
	}

	public final PropertyNameContext propertyName() throws RecognitionException {
		PropertyNameContext _localctx = new PropertyNameContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_propertyName);
		try {
			setState(89);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Colon:
			case NullLiteral:
			case BooleanLiteral:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(83);
				identifierName();
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(84);
				match(StringLiteral);
				}
				break;
			case OpenBracket:
				enterOuterAlt(_localctx, 3);
				{
				setState(85);
				match(OpenBracket);
				setState(86);
				singleExpression(0);
				setState(87);
				match(CloseBracket);
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

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode NullLiteral() { return getToken(PowerExpressionParser.NullLiteral, 0); }
		public TerminalNode BooleanLiteral() { return getToken(PowerExpressionParser.BooleanLiteral, 0); }
		public TerminalNode StringLiteral() { return getToken(PowerExpressionParser.StringLiteral, 0); }
		public NumericLiteralContext numericLiteral() {
			return getRuleContext(NumericLiteralContext.class,0);
		}
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_literal);
		try {
			setState(95);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NullLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(91);
				match(NullLiteral);
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(92);
				match(BooleanLiteral);
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(93);
				match(StringLiteral);
				}
				break;
			case DecimalLiteral:
				enterOuterAlt(_localctx, 4);
				{
				setState(94);
				numericLiteral();
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

	public static class NumericLiteralContext extends ParserRuleContext {
		public TerminalNode DecimalLiteral() { return getToken(PowerExpressionParser.DecimalLiteral, 0); }
		public NumericLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numericLiteral; }
	}

	public final NumericLiteralContext numericLiteral() throws RecognitionException {
		NumericLiteralContext _localctx = new NumericLiteralContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_numericLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			match(DecimalLiteral);
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

	public static class IdentifierNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ReservedWordContext reservedWord() {
			return getRuleContext(ReservedWordContext.class,0);
		}
		public IdentifierNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierName; }
	}

	public final IdentifierNameContext identifierName() throws RecognitionException {
		IdentifierNameContext _localctx = new IdentifierNameContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_identifierName);
		try {
			setState(101);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(99);
				identifier();
				}
				break;
			case Colon:
			case NullLiteral:
			case BooleanLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(100);
				reservedWord();
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

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(PowerExpressionParser.Identifier, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			match(Identifier);
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

	public static class ReservedWordContext extends ParserRuleContext {
		public TerminalNode NullLiteral() { return getToken(PowerExpressionParser.NullLiteral, 0); }
		public TerminalNode BooleanLiteral() { return getToken(PowerExpressionParser.BooleanLiteral, 0); }
		public ReservedWordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reservedWord; }
	}

	public final ReservedWordContext reservedWord() throws RecognitionException {
		ReservedWordContext _localctx = new ReservedWordContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_reservedWord);
		try {
			setState(108);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Colon:
				enterOuterAlt(_localctx, 1);
				{
				}
				break;
			case NullLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(106);
				match(NullLiteral);
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(107);
				match(BooleanLiteral);
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

	public static class ArgumentsContext extends ParserRuleContext {
		public TerminalNode OpenParen() { return getToken(PowerExpressionParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(PowerExpressionParser.CloseParen, 0); }
		public List<ArgumentContext> argument() {
			return getRuleContexts(ArgumentContext.class);
		}
		public ArgumentContext argument(int i) {
			return getRuleContext(ArgumentContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(PowerExpressionParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(PowerExpressionParser.Comma, i);
		}
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_arguments);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			match(OpenParen);
			setState(122);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << FunctionLiteral) | (1L << BehaviorFunctionLiteral) | (1L << Identifier) | (1L << DecimalLiteral) | (1L << StringLiteral))) != 0)) {
				{
				setState(111);
				argument();
				setState(116);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(112);
						match(Comma);
						setState(113);
						argument();
						}
						} 
					}
					setState(118);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
				}
				setState(120);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(119);
					match(Comma);
					}
				}

				}
			}

			setState(124);
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

	public static class ArgumentContext extends ParserRuleContext {
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argument; }
	}

	public final ArgumentContext argument() throws RecognitionException {
		ArgumentContext _localctx = new ArgumentContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_argument);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				{
				setState(126);
				expressionSequence();
				}
				break;
			case 2:
				{
				setState(127);
				identifier();
				}
				break;
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

	public static class ExpressionSequenceContext extends ParserRuleContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public List<TerminalNode> SemiColon() { return getTokens(PowerExpressionParser.SemiColon); }
		public TerminalNode SemiColon(int i) {
			return getToken(PowerExpressionParser.SemiColon, i);
		}
		public ExpressionSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionSequence; }
	}

	public final ExpressionSequenceContext expressionSequence() throws RecognitionException {
		ExpressionSequenceContext _localctx = new ExpressionSequenceContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_expressionSequence);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(130);
			singleExpression(0);
			setState(135);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(131);
					match(SemiColon);
					setState(132);
					singleExpression(0);
					}
					} 
				}
				setState(137);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
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

	public static class SingleExpressionContext extends ParserRuleContext {
		public SingleExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_singleExpression; }
	 
		public SingleExpressionContext() { }
		public void copyFrom(SingleExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class BehaviorExpressionContext extends SingleExpressionContext {
		public TerminalNode BehaviorFunctionLiteral() { return getToken(PowerExpressionParser.BehaviorFunctionLiteral, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public BehaviorExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthesizedExpressionContext extends SingleExpressionContext {
		public TerminalNode OpenParen() { return getToken(PowerExpressionParser.OpenParen, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(PowerExpressionParser.CloseParen, 0); }
		public ParenthesizedExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AdditiveExpressionContext extends SingleExpressionContext {
		public Token op;
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Plus() { return getToken(PowerExpressionParser.Plus, 0); }
		public TerminalNode Minus() { return getToken(PowerExpressionParser.Minus, 0); }
		public AdditiveExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FunctionExpressionContext extends SingleExpressionContext {
		public TerminalNode FunctionLiteral() { return getToken(PowerExpressionParser.FunctionLiteral, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public FunctionExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ObjectLiteralExpressionContext extends SingleExpressionContext {
		public ObjectLiteralContext objectLiteral() {
			return getRuleContext(ObjectLiteralContext.class,0);
		}
		public ObjectLiteralExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LiteralExpressionContext extends SingleExpressionContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public LiteralExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArrayLiteralExpressionContext extends SingleExpressionContext {
		public ArrayLiteralContext arrayLiteral() {
			return getRuleContext(ArrayLiteralContext.class,0);
		}
		public ArrayLiteralExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class CompareExpressionContext extends SingleExpressionContext {
		public Token cmp;
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode GT() { return getToken(PowerExpressionParser.GT, 0); }
		public TerminalNode GTE() { return getToken(PowerExpressionParser.GTE, 0); }
		public TerminalNode LT() { return getToken(PowerExpressionParser.LT, 0); }
		public TerminalNode LTE() { return getToken(PowerExpressionParser.LTE, 0); }
		public TerminalNode EQ() { return getToken(PowerExpressionParser.EQ, 0); }
		public TerminalNode NE() { return getToken(PowerExpressionParser.NE, 0); }
		public CompareExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MultiplicativeExpressionContext extends SingleExpressionContext {
		public Token op;
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Multiply() { return getToken(PowerExpressionParser.Multiply, 0); }
		public TerminalNode Divide() { return getToken(PowerExpressionParser.Divide, 0); }
		public MultiplicativeExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class IdentifierExpressionContext extends SingleExpressionContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public IdentifierExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}

	public final SingleExpressionContext singleExpression() throws RecognitionException {
		return singleExpression(0);
	}

	private SingleExpressionContext singleExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		SingleExpressionContext _localctx = new SingleExpressionContext(_ctx, _parentState);
		SingleExpressionContext _prevctx = _localctx;
		int _startState = 30;
		enterRecursionRule(_localctx, 30, RULE_singleExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(151);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FunctionLiteral:
				{
				_localctx = new FunctionExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(139);
				match(FunctionLiteral);
				setState(140);
				arguments();
				}
				break;
			case BehaviorFunctionLiteral:
				{
				_localctx = new BehaviorExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(141);
				match(BehaviorFunctionLiteral);
				setState(142);
				arguments();
				}
				break;
			case Identifier:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(143);
				identifier();
				}
				break;
			case NullLiteral:
			case BooleanLiteral:
			case DecimalLiteral:
			case StringLiteral:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(144);
				literal();
				}
				break;
			case OpenBracket:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(145);
				arrayLiteral();
				}
				break;
			case OpenBrace:
				{
				_localctx = new ObjectLiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(146);
				objectLiteral();
				}
				break;
			case OpenParen:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(147);
				match(OpenParen);
				setState(148);
				expressionSequence();
				setState(149);
				match(CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(164);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(162);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(153);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(154);
						((MultiplicativeExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==Multiply || _la==Divide) ) {
							((MultiplicativeExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(155);
						singleExpression(9);
						}
						break;
					case 2:
						{
						_localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(156);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(157);
						((AdditiveExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==Plus || _la==Minus) ) {
							((AdditiveExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(158);
						singleExpression(8);
						}
						break;
					case 3:
						{
						_localctx = new CompareExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(159);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(160);
						((CompareExpressionContext)_localctx).cmp = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << EQ) | (1L << NE) | (1L << GT) | (1L << GTE) | (1L << LT) | (1L << LTE))) != 0)) ) {
							((CompareExpressionContext)_localctx).cmp = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(161);
						singleExpression(7);
						}
						break;
					}
					} 
				}
				setState(166);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
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

	public static class ObjectLiteralContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(PowerExpressionParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(PowerExpressionParser.CloseBrace, 0); }
		public List<PropertyAssignmentContext> propertyAssignment() {
			return getRuleContexts(PropertyAssignmentContext.class);
		}
		public PropertyAssignmentContext propertyAssignment(int i) {
			return getRuleContext(PropertyAssignmentContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(PowerExpressionParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(PowerExpressionParser.Comma, i);
		}
		public ObjectLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectLiteral; }
	}

	public final ObjectLiteralContext objectLiteral() throws RecognitionException {
		ObjectLiteralContext _localctx = new ObjectLiteralContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_objectLiteral);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			match(OpenBrace);
			setState(179);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << Colon) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << Identifier) | (1L << StringLiteral))) != 0)) {
				{
				setState(168);
				propertyAssignment();
				setState(173);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(169);
						match(Comma);
						setState(170);
						propertyAssignment();
						}
						} 
					}
					setState(175);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
				}
				setState(177);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(176);
					match(Comma);
					}
				}

				}
			}

			setState(181);
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

	public static class EosContext extends ParserRuleContext {
		public TerminalNode SemiColon() { return getToken(PowerExpressionParser.SemiColon, 0); }
		public TerminalNode EOF() { return getToken(PowerExpressionParser.EOF, 0); }
		public EosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eos; }
	}

	public final EosContext eos() throws RecognitionException {
		EosContext _localctx = new EosContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_eos);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			_la = _input.LA(1);
			if ( !(_la==EOF || _la==SemiColon) ) {
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

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 15:
			return singleExpression_sempred((SingleExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean singleExpression_sempred(SingleExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 8);
		case 1:
			return precpred(_ctx, 7);
		case 2:
			return precpred(_ctx, 6);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\37\u00bc\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\3\2\5\2(\n\2\3\2\5\2+\n\2\3\2\3\2\3\3\3\3\3\3\3\4\3\4\3\4\3"+
		"\4\3\5\7\5\67\n\5\f\5\16\5:\13\5\3\5\5\5=\n\5\3\5\6\5@\n\5\r\5\16\5A\3"+
		"\5\7\5E\n\5\f\5\16\5H\13\5\3\5\7\5K\n\5\f\5\16\5N\13\5\3\6\3\6\3\7\3\7"+
		"\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\5\b\\\n\b\3\t\3\t\3\t\3\t\5\tb\n\t\3"+
		"\n\3\n\3\13\3\13\5\13h\n\13\3\f\3\f\3\r\3\r\3\r\5\ro\n\r\3\16\3\16\3\16"+
		"\3\16\7\16u\n\16\f\16\16\16x\13\16\3\16\5\16{\n\16\5\16}\n\16\3\16\3\16"+
		"\3\17\3\17\5\17\u0083\n\17\3\20\3\20\3\20\7\20\u0088\n\20\f\20\16\20\u008b"+
		"\13\20\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\5\21\u009a\n\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\7\21\u00a5"+
		"\n\21\f\21\16\21\u00a8\13\21\3\22\3\22\3\22\3\22\7\22\u00ae\n\22\f\22"+
		"\16\22\u00b1\13\22\3\22\5\22\u00b4\n\22\5\22\u00b6\n\22\3\22\3\22\3\23"+
		"\3\23\3\23\2\3 \24\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$\2\6\3\2"+
		"\20\21\3\2\16\17\3\2\22\27\3\3\13\13\2\u00c9\2\'\3\2\2\2\4.\3\2\2\2\6"+
		"\61\3\2\2\2\b8\3\2\2\2\nO\3\2\2\2\fQ\3\2\2\2\16[\3\2\2\2\20a\3\2\2\2\22"+
		"c\3\2\2\2\24g\3\2\2\2\26i\3\2\2\2\30n\3\2\2\2\32p\3\2\2\2\34\u0082\3\2"+
		"\2\2\36\u0084\3\2\2\2 \u0099\3\2\2\2\"\u00a9\3\2\2\2$\u00b9\3\2\2\2&("+
		"\7\3\2\2\'&\3\2\2\2\'(\3\2\2\2(*\3\2\2\2)+\5\4\3\2*)\3\2\2\2*+\3\2\2\2"+
		"+,\3\2\2\2,-\7\2\2\3-\3\3\2\2\2./\5\36\20\2/\60\5$\23\2\60\5\3\2\2\2\61"+
		"\62\7\4\2\2\62\63\5\b\5\2\63\64\7\5\2\2\64\7\3\2\2\2\65\67\7\n\2\2\66"+
		"\65\3\2\2\2\67:\3\2\2\28\66\3\2\2\289\3\2\2\29<\3\2\2\2:8\3\2\2\2;=\5"+
		"\n\6\2<;\3\2\2\2<=\3\2\2\2=F\3\2\2\2>@\7\n\2\2?>\3\2\2\2@A\3\2\2\2A?\3"+
		"\2\2\2AB\3\2\2\2BC\3\2\2\2CE\5\n\6\2D?\3\2\2\2EH\3\2\2\2FD\3\2\2\2FG\3"+
		"\2\2\2GL\3\2\2\2HF\3\2\2\2IK\7\n\2\2JI\3\2\2\2KN\3\2\2\2LJ\3\2\2\2LM\3"+
		"\2\2\2M\t\3\2\2\2NL\3\2\2\2OP\5 \21\2P\13\3\2\2\2QR\5\16\b\2RS\7\r\2\2"+
		"ST\5 \21\2T\r\3\2\2\2U\\\5\24\13\2V\\\7\36\2\2WX\7\4\2\2XY\5 \21\2YZ\7"+
		"\5\2\2Z\\\3\2\2\2[U\3\2\2\2[V\3\2\2\2[W\3\2\2\2\\\17\3\2\2\2]b\7\30\2"+
		"\2^b\7\31\2\2_b\7\36\2\2`b\5\22\n\2a]\3\2\2\2a^\3\2\2\2a_\3\2\2\2a`\3"+
		"\2\2\2b\21\3\2\2\2cd\7\35\2\2d\23\3\2\2\2eh\5\26\f\2fh\5\30\r\2ge\3\2"+
		"\2\2gf\3\2\2\2h\25\3\2\2\2ij\7\34\2\2j\27\3\2\2\2ko\3\2\2\2lo\7\30\2\2"+
		"mo\7\31\2\2nk\3\2\2\2nl\3\2\2\2nm\3\2\2\2o\31\3\2\2\2p|\7\6\2\2qv\5\34"+
		"\17\2rs\7\n\2\2su\5\34\17\2tr\3\2\2\2ux\3\2\2\2vt\3\2\2\2vw\3\2\2\2wz"+
		"\3\2\2\2xv\3\2\2\2y{\7\n\2\2zy\3\2\2\2z{\3\2\2\2{}\3\2\2\2|q\3\2\2\2|"+
		"}\3\2\2\2}~\3\2\2\2~\177\7\7\2\2\177\33\3\2\2\2\u0080\u0083\5\36\20\2"+
		"\u0081\u0083\5\26\f\2\u0082\u0080\3\2\2\2\u0082\u0081\3\2\2\2\u0083\35"+
		"\3\2\2\2\u0084\u0089\5 \21\2\u0085\u0086\7\13\2\2\u0086\u0088\5 \21\2"+
		"\u0087\u0085\3\2\2\2\u0088\u008b\3\2\2\2\u0089\u0087\3\2\2\2\u0089\u008a"+
		"\3\2\2\2\u008a\37\3\2\2\2\u008b\u0089\3\2\2\2\u008c\u008d\b\21\1\2\u008d"+
		"\u008e\7\32\2\2\u008e\u009a\5\32\16\2\u008f\u0090\7\33\2\2\u0090\u009a"+
		"\5\32\16\2\u0091\u009a\5\26\f\2\u0092\u009a\5\20\t\2\u0093\u009a\5\6\4"+
		"\2\u0094\u009a\5\"\22\2\u0095\u0096\7\6\2\2\u0096\u0097\5\36\20\2\u0097"+
		"\u0098\7\7\2\2\u0098\u009a\3\2\2\2\u0099\u008c\3\2\2\2\u0099\u008f\3\2"+
		"\2\2\u0099\u0091\3\2\2\2\u0099\u0092\3\2\2\2\u0099\u0093\3\2\2\2\u0099"+
		"\u0094\3\2\2\2\u0099\u0095\3\2\2\2\u009a\u00a6\3\2\2\2\u009b\u009c\f\n"+
		"\2\2\u009c\u009d\t\2\2\2\u009d\u00a5\5 \21\13\u009e\u009f\f\t\2\2\u009f"+
		"\u00a0\t\3\2\2\u00a0\u00a5\5 \21\n\u00a1\u00a2\f\b\2\2\u00a2\u00a3\t\4"+
		"\2\2\u00a3\u00a5\5 \21\t\u00a4\u009b\3\2\2\2\u00a4\u009e\3\2\2\2\u00a4"+
		"\u00a1\3\2\2\2\u00a5\u00a8\3\2\2\2\u00a6\u00a4\3\2\2\2\u00a6\u00a7\3\2"+
		"\2\2\u00a7!\3\2\2\2\u00a8\u00a6\3\2\2\2\u00a9\u00b5\7\b\2\2\u00aa\u00af"+
		"\5\f\7\2\u00ab\u00ac\7\n\2\2\u00ac\u00ae\5\f\7\2\u00ad\u00ab\3\2\2\2\u00ae"+
		"\u00b1\3\2\2\2\u00af\u00ad\3\2\2\2\u00af\u00b0\3\2\2\2\u00b0\u00b3\3\2"+
		"\2\2\u00b1\u00af\3\2\2\2\u00b2\u00b4\7\n\2\2\u00b3\u00b2\3\2\2\2\u00b3"+
		"\u00b4\3\2\2\2\u00b4\u00b6\3\2\2\2\u00b5\u00aa\3\2\2\2\u00b5\u00b6\3\2"+
		"\2\2\u00b6\u00b7\3\2\2\2\u00b7\u00b8\7\t\2\2\u00b8#\3\2\2\2\u00b9\u00ba"+
		"\t\5\2\2\u00ba%\3\2\2\2\30\'*8<AFL[agnvz|\u0082\u0089\u0099\u00a4\u00a6"+
		"\u00af\u00b3\u00b5";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}