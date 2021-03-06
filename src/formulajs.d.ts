declare module '@formulajs/formulajs' {
  export type FormulaType =
    | 'DATE'
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
    | 'ERF'
    | 'ERFC'
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
    | 'ERF'
    | 'ERFC'
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

  type Formulajs = {
    // IF: <L, R>(criteria: boolean, left: L, right: R) => L | R;
    // AND: (...args: boolean[]) => boolean;
    // OR: (...args: boolean[]) => boolean;
    // XOR: (...args: boolean[]) => boolean;
    // NOT: (...args: boolean[]) => boolean;
    // AVERAGE: (...args: number[]) => number;
    // COUNT: (...args: any[]) => number;
    // COUNTA: (...args: any[]) => number;
    // COUNTIF: (arr: any[], num: number) => number;
    // MAX: (...args: number[] | Array<number[]>) => number;
    // MIN: (...args: number[] | Array<number[]>) => number;
    // ROUND: (num: number, digits?: number) => number;
    // INT: (num: number) => number;
    // MOD: (num: number, num2: number) => number;
    // PRODUCT: (...args: number[]) => number;
    // SUMPRODUCT: (...args: number[]) => number;
    // SUM: (...args: number[]) => number;
    // SUMIF: (range: number[], criteria: string) => number;
    // ROUNDUP: (num: number) => number;
    // ROUNDDOWN: (num: number) => number;
    // POWER: (num: number, num2: number) => number;
    // LN: (num: number) => number;
    // SQRT: (num: number) => number;
    [key in FormulaType]: (...args: any[]) => any;
  };
  const formulajs: Formulajs;

  export default formulajs;
}
