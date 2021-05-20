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

/// Boolean Literals
BooleanLiteral: 'true' | 'false';

/// Field Literals
FieldLiteral: Field;

// Function Literals
FunctionLiteral:
	'DATE'
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
	| 'NETWORKDAYS'
	| 'NETWORKDAYSINTL'
	| 'NOW'
	| 'SECOND'
	| 'TIME'
	| 'TIMEVALUE'
	| 'TODAY'
	| 'WEEKDAY'
	| 'YEAR'
	| 'WEEKNUM'
	| 'WORKDAY'
	| 'WORKDAYINTL'
	| 'YEARFRAC'
	| 'ACCRINT'
	| 'CUMIPMT'
	| 'CUMPRINC'
	| 'DB'
	| 'DDB'
	| 'DOLLARDE'
	| 'DOLLARFR'
	| 'EFFECT'
	| 'FV'
	| 'FVSCHEDULE'
	| 'IPMT'
	| 'IRR'
	| 'ISPMT'
	| 'MIRR'
	| 'NOMINAL'
	| 'NPER'
	| 'NPV'
	| 'PDURATION'
	| 'PMT'
	| 'PPMT'
	| 'PV'
	| 'RATE'
	| 'BIN2DEC'
	| 'BIN2HEX'
	| 'BIN2OCT'
	| 'BITAND'
	| 'BITLSHIFT'
	| 'BITOR'
	| 'BITRSHIFT'
	| 'BITXOR'
	| 'COMPLEX'
	| 'CONVERT'
	| 'DEC2BIN'
	| 'DEC2HEX'
	| 'DEC2OCT'
	| 'DELTA'
	| 'GESTEP'
	| 'HEX2BIN'
	| 'HEX2DEC'
	| 'HEX2OCT'
	| 'IMABS'
	| 'IMAGINARY'
	| 'IMARGUMENT'
	| 'IMCONJUGATE'
	| 'IMCOS'
	| 'IMCOSH'
	| 'IMCOT'
	| 'IMCSC'
	| 'IMCSCH'
	| 'IMDIV'
	| 'IMEXP'
	| 'IMLN'
	| 'IMLOG10'
	| 'IMLOG2'
	| 'IMPOWER'
	| 'IMPRODUCT'
	| 'IMREAL'
	| 'IMSEC'
	| 'IMSECH'
	| 'IMSIN'
	| 'IMSINH'
	| 'IMSQRT'
	| 'IMSUB'
	| 'IMSUM'
	| 'IMTAN'
	| 'OCT2BIN'
	| 'OCT2DEC'
	| 'OCT2HEX'
	| 'AND'
	| 'IF'
	| 'IFS'
	| 'IFERROR'
	| 'IFNA'
	| 'NOT'
	| 'OR'
	| 'SWITCH'
	| 'XOR'
	| 'ABS'
	| 'ACOS'
	| 'ACOSH'
	| 'ACOT'
	| 'ACOTH'
	| 'AGGREGATE'
	| 'ARABIC'
	| 'ASIN'
	| 'ASINH'
	| 'ATAN'
	| 'ATAN2'
	| 'ATANH'
	| 'BASE'
	| 'CEILING'
	| 'CEILINGMATH'
	| 'CEILINGPRECISE'
	| 'COMBIN'
	| 'COMBINA'
	| 'COS'
	| 'COSH'
	| 'COT'
	| 'COTH'
	| 'CSC'
	| 'CSCH'
	| 'DECIMAL'
	| 'EVEN'
	| 'EXP'
	| 'FACT'
	| 'FACTDOUBLE'
	| 'FLOOR'
	| 'FLOORMATH'
	| 'FLOORPRECISE'
	| 'GCD'
	| 'INT'
	| 'ISEVEN'
	| 'ISOCEILING'
	| 'ISODD'
	| 'LCM'
	| 'LN'
	| 'LOG'
	| 'LOG10'
	| 'MOD'
	| 'MROUND'
	| 'MULTINOMIAL'
	| 'ODD'
	| 'POWER'
	| 'PRODUCT'
	| 'QUOTIENT'
	| 'RADIANS'
	| 'RAND'
	| 'RANDBETWEEN'
	| 'ROUND'
	| 'ROUNDDOWN'
	| 'ROUNDUP'
	| 'SEC'
	| 'SECH'
	| 'SIGN'
	| 'SIN'
	| 'SINH'
	| 'SQRT'
	| 'SQRTPI'
	| 'SUBTOTAL'
	| 'SUM'
	| 'SUMIF'
	| 'SUMIFS'
	| 'SUMPRODUCT'
	| 'SUMSQ'
	| 'SUMX2MY2'
	| 'SUMX2PY2'
	| 'SUMXMY2'
	| 'TAN'
	| 'TANH'
	| 'TRUNC'
	| 'AVEDEV'
	| 'AVERAGE'
	| 'AVERAGEA'
	| 'AVERAGEIF'
	| 'AVERAGEIFS'
	| 'BETADIST'
	| 'BETAINV'
	| 'BINOMDIST'
	| 'CORREL'
	| 'COUNT'
	| 'COUNTA'
	| 'COUNTBLANK'
	| 'COUNTIF'
	| 'COUNTIFS'
	| 'COUNTUNIQUE'
	| 'COVARIANCEP'
	| 'COVARIANCES'
	| 'DEVSQ'
	| 'EXPONDIST'
	| 'FDIST'
	| 'FINV'
	| 'FISHER'
	| 'FISHERINV'
	| 'FORECAST'
	| 'FREQUENCY'
	| 'GAMMA'
	| 'GAMMALN'
	| 'GAUSS'
	| 'GEOMEAN'
	| 'GROWTH'
	| 'HARMEAN'
	| 'HYPGEOMDIST'
	| 'INTERCEPT'
	| 'KURT'
	| 'LARGE'
	| 'LINEST'
	| 'LOGNORMDIST'
	| 'LOGNORMINV'
	| 'MAX'
	| 'MAXA'
	| 'MEDIAN'
	| 'MIN'
	| 'MINA'
	| 'MODEMULT'
	| 'MODESNGL'
	| 'NORMDIST'
	| 'NORMINV'
	| 'NORMSDIST'
	| 'NORMSINV'
	| 'PEARSON'
	| 'PERCENTILEEXC'
	| 'PERCENTILEINC'
	| 'PERCENTRANKEXC'
	| 'PERCENTRANKINC'
	| 'PERMUT'
	| 'PERMUTATIONA'
	| 'PHI'
	| 'POISSONDIST'
	| 'PROB'
	| 'QUARTILEEXC'
	| 'QUARTILEINC'
	| 'RANKAVG'
	| 'RANKEQ'
	| 'RSQ'
	| 'SKEW'
	| 'SKEWP'
	| 'SLOPE'
	| 'SMALL'
	| 'STANDARDIZE'
	| 'STDEVA'
	| 'STDEVP'
	| 'STDEVPA'
	| 'STDEVS'
	| 'STEYX'
	| 'TDIST'
	| 'TINV'
	| 'TRIMMEAN'
	| 'VARA'
	| 'VARP'
	| 'VARPA'
	| 'VARS'
	| 'WEIBULLDIST'
	| 'ZTEST'
	| 'CHAR'
	| 'CLEAN'
	| 'CODE'
	| 'CONCATENATE'
	| 'EXACT'
	| 'FIND'
	| 'LEFT'
	| 'LEN'
	| 'LOWER'
	| 'MID'
	| 'NUMBERVALUE'
	| 'PROPER'
	| 'REGEXEXTRACT'
	| 'REGEXMATCH'
	| 'REGEXREPLACE'
	| 'REPLACE'
	| 'REPT'
	| 'RIGHT'
	| 'ROMAN'
	| 'SEARCH'
	| 'SPLIT'
	| 'SUBSTITUTE'
	| 'T'
	| 'TRIM'
	| 'UNICHAR'
	| 'UNICODE'
	| 'UPPER';
	

	/// Numeric Literals
DecimalLiteral:
  DecimalIntegerLiteral '.' [0-9]*
  | '.' [0-9]+
  | DecimalIntegerLiteral;

/// String Literals
StringLiteral:
  '"' DoubleStringCharacter* '"'
	| '\'' SingleStringCharacter* '\'';


WhiteSpaces: [\t\u000B\u000C\u0020\u00A0]+ -> channel(HIDDEN);

UnexpectedCharacter: . -> channel(ERROR);


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

fragment DecimalIntegerLiteral: '0' | [1-9] [0-9]*;

fragment Field: '{!' FieldPathSegment FieldPathSubSegment* '}';

fragment FieldPath: FieldPathSegment FieldPathSubSegment*;

fragment FieldPathSegment: [a-zA-Z] [a-zA-Z0-9_]*;

fragment FieldPathSubSegment: '.' FieldPathSegment;
