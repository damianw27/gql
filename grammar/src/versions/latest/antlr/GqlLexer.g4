lexer grammar GqlLexer;

// arrows
LEFT_ARROW: '<-';
LEFT_ARROW_TILDE: '<~';
LEFT_ARROW_BRACKET: '<-[';
LEFT_ARROW_TILDE_BRACKET: '<~[';
LEFT_MINUS_RIGHT: '<->';
LEFT_MINUS_SLASH: '<-/';
LEFT_TILDE_SLASH: '<~/';
MINUS_LEFT_BRACKET: '-[';
MINUS_SLASH: '-/';
RIGHT_ARROW: '->';
RIGHT_BRACKET_MINUS: ']-';
RIGHT_BRACKET_TILDE: ']~';
BRACKET_RIGHT_ARROW: ']->';
BRACKET_TILDE_RIGHT_ARROW: ']~>';
SLASH_MINUS: '/-';
SLASH_MINUS_RIGHT: '/->';
SLASH_TILDE: '/~';
SLASH_TILDE_RIGHT: '/~>';
TILDE_LEFT_BRACKET: '~[';
TILDE_RIGHT_ARROW: '~>';
TILDE_SLASH: '~/';

// signs
QUOTE: '\'';
DOUBLE_QUOTE: '"';
GRAVE_ACCENT: '`';
REVERS_SOLIDUS: '\\';
PLUS: '+';
MINUS: '-';
DOUBLE_MINUS: '--';
AMPERSAND: '&';
ASTERISK: '*';
CIRCUMFLEX: '^';
COLON: ':';
DOUBLE_COLON: '::';
COMMA: ',';
DOLLAR: '$';
EQUALS: '=';
EXCLAMATION: '!';
LEFT_ANGLE_BRACKET: '<';
RIGHT_ANGLE_BRACKET: '>';
LEFT_BRACE: '{';
RIGHT_BRACE: '}';
LEFT_BRACKET: '[';
RIGHT_BRACKET: ']';
LEFT_PAREN: '(';
RIGHT_PAREN: ')';
QUESTION_MARK: '?';
SEMICOLON: ';';
SOLIDUS: '/';
DOUBLE_SOLIDUS: '//';
TILDE: '~';
UNDERSCORE: '_';
VERTICAL_BAR: '|';
PERCENT: '%';
PERIOD: '.';
DOUBLE_PERIOD: '..';
COMMERCIAL_AT: '@';
HASH: '#';

// operators
MULTISET_ALTERNATION: VERTICAL_BAR PLUS VERTICAL_BAR;
CONCATENATION: VERTICAL_BAR VERTICAL_BAR;

// reserved words
ABS: A B S;
ACOS: A C O S;
ALL: A L L;
ALL_DIFFERENT: A L L UNDERSCORE D I F F E R E N T;
AND: A N D;
ANY: A N Y;
ARRAY: A R R A Y;
AS: A S;
ASC: A S C;
ASCENDING: A S C E N D I N G;
ASIN: A S I N;
AT: A T;
ATAN: A T A N;
AVG: A V G;
BIG: B I G;
BIGINT: B I G I N T;
BINARY: B I N A R Y;
BOOL: B O O L;
BOOLEAN: B O O L E A N;
BOTH: B O T H;
BTRIM: B T R I M;
BY: B Y;
BYTE_LENGTH: B Y T E UNDERSCORE L E N G T H;
BYTES: B Y T E S;
CALL: C A L L;
CASE: C A S E;
CAST: C A S T;
CEIL: C E I L;
CEILING: C E I L I N G;
CHAR_LENGTH: C H A R UNDERSCORE L E N G T H;
CHARACTER_LENGTH: C H A R A C T E R UNDERSCORE L E N G T H;
CHARACTERISTICS: C H A R A C T E R I S T I C S;
CLOSE: C L O S E;
COALESCE: C O A L E S C E;
COLLECT: C O L L E C T;
COMMIT: C O M M I T;
COPY: C O P Y;
COS: C O S;
COSH: C O S H;
COT: C O T;
COUNT: C O U N T;
CREATE: C R E A T E;
CURRENT_DATE: C U R R E N T UNDERSCORE D A T E;
CURRENT_GRAPH: C U R R E N T UNDERSCORE G R A P H;
CURRENT_PROPERTY_GRAPH:
	C U R R E N T UNDERSCORE P R O P E R T Y UNDERSCORE G R A P H;
CURRENT_SCHEMA: C U R R E N T UNDERSCORE S C H E M A;
CURRENT_TIME: C U R R E N T UNDERSCORE T I M E;
CURRENT_TIMESTAMP: C U R R E N T UNDERSCORE T I M E S T A M P;
CURRENT_USER: C U R R E N T UNDERSCORE U S E R;
DATE: D A T E;
DATETIME: D A T E T I M E;
DAY: D A Y;
DEC: D E C;
DECIMAL: D E C I M A L;
DEGREES: D E G R E E S;
DELETE: D E L E T E;
DESC: D E S C;
DESCENDING: D E S C E N D I N G;
DETACH: D E T A C H;
DISTINCT: D I S T I N C T;
DOUBLE: D O U B L E;
DROP: D R O P;
DURATION: D U R A T I O N;
DURATION_BETWEEN: D U R A T I O N UNDERSCORE B E T T W E E N;
ELEMENT_ID: E L E M E N T UNDERSCORE I D;
ELSE: E L S E;
END: E N D;
EXCEPT: E X C E P T;
EXISTS: E X I S T S;
EXP: E X P;
FALSE: F A L S E;
FILTER: F I L T E R;
FINISH: F I N I S H;
FLOAT: F L O A T;
FLOAT16: F L O A T '16';
FLOAT32: F L O A T '32';
FLOAT64: F L O A T '64';
FLOAT128: F L O A T '128';
FLOAT256: F L O A T '256';
FLOOR: F L O O R;
FOR: F O R;
FROM: F R O M;
GROUP: G R O U P;
HAVING: H A V I N G;
HOME_GRAPH: H O M E UNDERSCORE G R A P H;
HOME_PROPERTY_GRAPH: H O M E UNDERSCORE P R O P E R T Y;
HOME_SCHEMA: H O M E UNDERSCORE S C H E M A;
HOUR: H O U R;
IF: I F;
IN: I N;
INSERT: I N S E R T;
INT: I N T;
INTEGER: I N T E G E R;
INT8: I N T '8';
INTEGER8: I N T E G E R '8';
INT16: I N T '16';
INTEGER16: I N T E G E R '16';
INT32: I N T '32';
INTEGER32: I N T E G E R '32';
INT64: I N T '64';
INTEGER64: I N T E G E R '64';
INT128: I N T '128';
INTEGER128: I N T E G E R '128';
INT256: I N T '256';
INTEGER256: I N T E G E R '256';
INTERSECT: I N T E R S E C T;
INTERVAL: I N T E R V A L;
IS: I S;
LEADING: L E A D I N G;
LET: L E T;
LIKE: L I K E;
LIMIT: L I M I T;
LIST: L I S T;
LN: L N;
LOCAL: L O C A L;
LOCAL_DATETIME: L O C A L UNDERSCORE D A T E T I M E;
LOCAL_TIME: L O C A L UNDERSCORE T I M E;
LOCAL_TIMESTAMP: L O C A L UNDERSCORE T I M E S T A M P;
LOG: L O G;
LOG10: L O G '10';
LOWER: L O W E R;
LTRIM: L T R I M;
MATCH: M A T C H;
MAX: M A X;
MIN: M I N;
MINUTE: M I N U T E;
MOD: M O D;
MONTH: M O N T H;
NEXT: N E X T;
NODETACH: N O D E T A C H;
NORMALIZE: N O R M A L I Z E;
NOT: N O T;
NULL: N U L L;
NULLS: N U L L S;
NULLIF: N U L L I F;
OCTET_LENGTH: O C T E T UNDERSCORE L E N G T H;
OF: O F;
OFFSET: O F F S E T;
OPEN: O P E N;
OPTIONAL: O P T I O N A L;
OR: O R;
ORDER: O R D E R;
OTHERWISE: O T H E R W I S E;
PARAMETER: P A R A M E T E R;
PARAMETERS: P A R A M E T E R S;
PATH: P A T H;
PATH_LENGTH: P A T H UNDERSCORE L E N G T H;
PATHS: P A T H S;
PERCENTILE_CONT: P E R C E N T I L E UNDERSCORE C O N T;
PERCENTILE_DISC: P E R C E N T I L E UNDERSCORE D I S C;
POWER: P O W E R;
PRECISION: P R E C I S I O N;
PROPERTY_EXISTS: P R O P E R T Y UNDERSCORE E X I S T S;
RADIANS: R A D I A N S;
REAL: R E A L;
RECORD: R E C O R D;
REMOVE: R E M O V E;
REPLACE: R E P L A C E;
RESET: R E S E T;
RETURN: R E T U R N;
ROLLBACK: R O L L B A C K;
RTRIM: R T R I M;
SAME: S A M E;
SCHEMA: S C H E M A;
SECOND: S E C O N D;
SELECT: S E L E C T;
SESSION: S E S S I O N;
SET: S E T;
SIGNED: S I G N E D;
SIN: S I N;
SINH: S I N H;
SKIP_: S K I P;
SMALL: S M A L L;
SMALLINT: S M A L L I N T;
SQRT: S Q R T;
START: S T A R T;
STDDEV_POP: S T D D E V UNDERSCORE P O P;
STDDEV_SAMP: S T D D E V UNDERSCORE S A M P;
STRING: S T R I N G;
SUM: S U M;
TAN: T A N;
TANH: T A N H;
THEN: T H E N;
TIME: T I M E;
TIMESTAMP: T I M E S T A M P;
TRAILING: T R A I L I N G;
TRIM: T R I M;
TRUE: T R U E;
TYPED: T Y P E D;
UBIGINT: U B I G I N T;
UINT: U I N T;
UINT8: U I N T '8';
UINT16: U I N T '16';
UINT32: U I N T '32';
UINT64: U I N T '64';
UINT128: U I N T '128';
UINT256: U I N T '256';
UNION: U N I O N;
UNKNOWN: U N K N O W N;
UNSIGNED: U N S I G N E D;
UPPER: U P P E R;
USE: U S E;
USMALLINT: U S M A L L I N T;
VALUE: V A L U E;
VARBINARY: V A R B I N A R Y;
VARCHAR: V A R C H A R;
VARIABLE: V A R I A B L E;
WHEN: W H E N;
WHERE: W H E R E;
WITH: W I T H;
XOR: X O R;
YEAR: Y E A R;
YIELD: Y I E L D;
ZONED: Z O N E D;
ZONED_DATETIME: Z O N E D UNDERSCORE D A T E T I M E;
ZONED_TIME: Z O N E D UNDERSCORE T I M E;

// pre-reserved words
AGGREGATE: A G G R E G A T E;
AGGREGATES: A G G R E G A T E S;
ALTER: A L T E R;
CATALOG: C A T A L O G;
CLEAR: C L E A R;
CLONE: C L O N E;
CONSTRAINT: C O N S T R A I N T;
CURRENT_ROLE: C U R R E N T UNDERSCORE R O L E;
DATA: D A T A;
DIRECTORY: D I R E C T O R Y;
EXACT: E X A C T;
EXISTING: E X I S T I N G;
FUNCTION: F U N C T I O N;
GQLSTATUS: G Q L S T A T U S;
GRANT: G R A N T;
INSTANT: I N S T A N T;
LEFT: L E F T;
NOTHING: N O T H I N G;
NUMERIC: N U M E R I C;
ON: O N;
PARTITION: P A R T I O N;
PROCEDURE: P R O C E D U R E;
PRODUCT: P R O D U C T;
PROJECT: P R O J E C T;
QUERY: Q U E R Y;
RECORDS: R E C O R D S;
REFERENCE: R E F E R E N C E;
RENAME: R E N A M E;
REVOKE: R E V O K E;
RIGHT: R I G H T;
SUBSTRING: S U B S T R I N G;
TEMPORAL: T E M P O R A L;
UNIQUE: U N I Q U E;
UNIT: U N I T;
VALUES: V A L U E S;

// non-reserved words
ACYCLIC: A C Y C L I C;
BINDING: B I N D I N G;
BINDINGS: B I N D I N G S;
CONNECTING: C O N N E C T I N G;
DESTINATION: D E S T I N A T I O N;
DIFFERENT: D I F F E R E N T;
DIRECTED: D I R E C T E D;
EDGE: E D G E;
EDGES: E D G E S;
ELEMENT: E L E M E N T;
ELEMENTS: E L E M E N T S;
FIRST: F I R S T;
GRAPH: G R A P H;
GROUPS: G R O U P S;
KEEP: K E E P;
LABEL: L A B E L;
LABELED: L A B E L E D;
LABELS: L A B E L S;
LAST: L A S T;
NFC: N F C;
NFD: N F D;
NFKC: N F K C;
NFKD: N F K D;
NO: N O;
NODE: N O D E;
NORMALIZED: N O R M A L I Z E D;
ONLY: O N L Y;
ORDINALITY: O R D I N A L I T Y;
PROPERTY: P R O P E R T Y;
READ: R E A D;
RELATIONSHIP: R E L A T I O N S H I P;
RELATIONSHIPS: R E L A T I O N S H I P S;
REPEATABLE: R E P E A T A B L E;
SHORTEST: S H O R T E S T;
SIMPLE: S I M P L E;
SOURCE: S O U R C E;
TABLE: T A B L E;
TEMP: T E M P;
TIMEZONE: T I M E Z O N E;
TO: T O;
TRAIL: T R A I L;
TRANSACTION: T R A N S A C T I O N;
TYPE: T Y P E;
UNDIRECTED: U N D I R E C T E D;
VERTEX: V E R T E X;
WALK: W A L K;
WITHOUT: W I T H O U T;
WRITE: W R I T E;
ZONE: Z O N E;

// date time keywords
INTERVAL_DAY: D A Y | D A Y S;
INTERVAL_WEEK: W E E K | W E E K S;
INTERVAL_MONTH: M O N T H | M O N T H S;
INTERVAL_YEAR: Y E A R | Y E A R S;

// exists statments
IF_NOT_EXISTS: IF WS NOT WS EXISTS;

IF_EXISTS: IF WS EXISTS;

// numbers
UNSIGNED_NUMERIC_LITERAL:
	EXACT_NUMERIC_LITERAL
	| APROXIMATE_NUMERIC_LITERAL;

SIGNED_NUMERIC_LITERAL: SIGN UNSIGNED_NUMERIC_LITERAL;

SIGN: (PLUS | MINUS);

EXACT_NUMERIC_LITERAL:
	UNSIGNED_INT
	| EXACT_UNSIGNED_DECIMAL_IN_COMMON_NOTATION
	| EXACT_UNSIGNED_INT;

EXACT_UNSIGNED_DECIMAL_IN_COMMON_NOTATION:
	UNSIGNED_DECIMAL_IN_COMMON_NOTATION M;

EXACT_UNSIGNED_INT: (UNSIGNED_INT)* M;

APROXIMATE_NUMERIC_LITERAL:
	APROXIMATE_UNSIGNED_DECIMAL_IN_COMMON_NOTATION
	| APROXIMATE_UNSIGNED_INT;

APROXIMATE_UNSIGNED_DECIMAL_IN_COMMON_NOTATION:
	UNSIGNED_DECIMAL_IN_COMMON_NOTATION (F | D)?;

APROXIMATE_UNSIGNED_INT: UNSIGNED_INT (F | D)?;

UNSIGNED_DECIMAL_IN_COMMON_NOTATION:
	UNSIGNED_DECIMAL_INT (PERIOD UNSIGNED_DECIMAL_INT?)?
	| PERIOD UNSIGNED_DECIMAL_INT;

UNSIGNED_DECIMAL_IN_SCIENTIFIC_NOTATION:
	UNSIGNED_NUMERIC_LITERAL E SIGNED_NUMERIC_LITERAL;

FOUR_DIGIT: DIGIT10 DIGIT10 DIGIT10 DIGIT10;

DOUBLE_DIGIT: DIGIT10 DIGIT10;

UNSIGNED_INT:
	(
		UNSIGNED_DECIMAL_INT
		| UNSIGNED_HEX_INT
		| UNSIGNED_OCTAL_INT
		| UNSIGNED_BINARY_INT
	)+;

UNSIGNED_DECIMAL_INT: (DIGIT10)+ (UNDERSCORE? (DIGIT10)+)?;

UNSIGNED_HEX_INT: '0x' UNDERSCORE? (DIGIT16)+;

UNSIGNED_OCTAL_INT: '0o' UNDERSCORE? (DIGIT8)+;

UNSIGNED_BINARY_INT: '0b' UNDERSCORE? (DIGIT2)+;

BYTE_STRING_LITERAL:
	X QUOTE (WS DIGIT16 WS? DIGIT16 WS)? WS QUOTE (
		WS QUOTE WS? (DIGIT16 WS? DIGIT16 WS?)? QUOTE
	)?;

SINGLE_QUOTED_STRING_LITERAL:
	QUOTE (ESCAPED_CHARS | ~['\\\r\n])* QUOTE;

DOUBLE_QUOTED_STRING_LITERAL:
	DOUBLE_QUOTE (ESCAPED_CHARS | ~["\\\r\n])* DOUBLE_QUOTE;

ACCENT_QUOTED_STRING_LITERAL:
	GRAVE_ACCENT (ESCAPED_CHARS | ~[`\\\r\n])* GRAVE_ACCENT;

SIMPLE_COMMENT_LITERAL:
	WS? (DOUBLE_SOLIDUS | DOUBLE_MINUS) (~[\r\n])* RETURN_SIGN WS?;

BRACKETED_COMMNET_LITERAL:
	WS? (SOLIDUS ASTERISK) .*? (ASTERISK SOLIDUS) WS?;

// special cases
WS: WHITESPACE+;

WHITESPACE:
	SPACE
	| NEW_LINE
	| TAB
	| LF
	| VT
	| FF
	| CR
	| FS
	| GS
	| RS
	| US
	| '\u1680'
	| '\u180e'
	| '\u2000'
	| '\u2001'
	| '\u2002'
	| '\u2003'
	| '\u2004'
	| '\u2005'
	| '\u2006'
	| '\u2008'
	| '\u2009'
	| '\u200a'
	| '\u2028'
	| '\u2029'
	| '\u205f'
	| '\u3000'
	| '\u00a0'
	| '\u2007'
	| '\u202f';

NEW_LINE: RETURN_SIGN CARRIAGE_RETURN;
CARRIAGE_RETURN: '\u000D';
RETURN_SIGN: '\u000A';

REGULAR_IDENTIFIER: START_CHARS CONTINUE_CHARS*;

EXTENDED_IDENTIFIER: CONTINUE_CHARS+;

START_CHARS: [A-Za-z_];

CONTINUE_CHARS:
	[a-zA-Z_0-9];

BIDIRECTIONAL_CONTROL_CHARACTER:
	[\u200E-\u200F\u202A-\u202E\u2066-\u2069];

// escaped characters
ESCAPED_CHARS:
	ESCAPED_REVERSE_SOLIDUS
	| ESCAPED_QUOTE
	| ESCAPED_SOUBLE_QUOTE
	| ESCAPED_GRAVE_ACCENT
	| ESCAPED_TAB
	| ESCAPED_BACKSPACE
	| ESCAPED_NEW_LINE
	| ESCAPED_CARRIAGE_RETURN
	| ESCAPED_FORM_FEED
	| ESCAPED_UNICODE4_DIGIT_VALUE
	| ESCAPED_UNICODE6_DIGIT_VALUE;

ESCAPED_REVERSE_SOLIDUS: REVERS_SOLIDUS REVERS_SOLIDUS;
ESCAPED_QUOTE: REVERS_SOLIDUS QUOTE;
ESCAPED_SOUBLE_QUOTE: REVERS_SOLIDUS DOUBLE_QUOTE;
ESCAPED_GRAVE_ACCENT: REVERS_SOLIDUS GRAVE_ACCENT;
ESCAPED_TAB: REVERS_SOLIDUS 't';
ESCAPED_BACKSPACE: REVERS_SOLIDUS 'b';
ESCAPED_NEW_LINE: REVERS_SOLIDUS 'n';
ESCAPED_CARRIAGE_RETURN: REVERS_SOLIDUS 'r';
ESCAPED_FORM_FEED: REVERS_SOLIDUS F;
ESCAPED_UNICODE4_DIGIT_VALUE:
	REVERS_SOLIDUS 'u' DIGIT16 DIGIT16 DIGIT16 DIGIT16;
ESCAPED_UNICODE6_DIGIT_VALUE:
	REVERS_SOLIDUS 'u' DIGIT16 DIGIT16 DIGIT16 DIGIT16 DIGIT16 DIGIT16;

// fragments
fragment A: [aA];
fragment B: [bB];
fragment C: [cC];
fragment D: [dD];
fragment E: [eE];
fragment F: [fF];
fragment G: [gG];
fragment H: [hH];
fragment I: [iI];
fragment J: [jJ];
fragment K: [kK];
fragment L: [lL];
fragment M: [mM];
fragment N: [nN];
fragment O: [oO];
fragment P: [pP];
fragment Q: [qQ];
fragment R: [rR];
fragment S: [sS];
fragment T: [tT];
fragment U: [uU];
fragment V: [vV];
fragment W: [wW];
fragment X: [xX];
fragment Y: [yY];
fragment Z: [zZ];
fragment FF: [\f];
fragment RS: [\u001E];
fragment GS: [\u001D];
fragment FS: [\u001C];
fragment CR: [\r];
fragment SPACE: [ ];
fragment TAB: [\t];
fragment LF: [\n];
fragment VT: [\u000B];
fragment US: [\u001F];
fragment DIGIT16: [0-9a-fA-F];
fragment DIGIT10: [0-9];
fragment DIGIT8: [0-7];
fragment DIGIT2: [0-1];
fragment LETTER: [a-zA-Z];

// characters definitions
GQL_LANGUAGE_CHAR:
	LETTER
	| DIGIT16
	| DIGIT10
	| DIGIT8
	| DIGIT2
	| GQL_SPECIAL_CHAR;

GQL_SPECIAL_CHAR:
	TAB
	| AMPERSAND
	| ASTERISK
	| COLON
	| EQUALS
	| COMMA
	| DOLLAR
	| DOUBLE_QUOTE
	| EXCLAMATION
	| GRAVE_ACCENT
	| RIGHT_ANGLE_BRACKET
	| LEFT_BRACE
	| LEFT_BRACKET
	| LEFT_PAREN
	| LEFT_ANGLE_BRACKET
	| MINUS
	| PERIOD
	| PLUS
	| QUESTION_MARK
	| QUOTE
	| REVERS_SOLIDUS
	| RIGHT_BRACE
	| RIGHT_BRACKET
	| RIGHT_PAREN
	| SEMICOLON
	| SOLIDUS
	| UNDERSCORE
	| VERTICAL_BAR
	| PERCENT
	| CIRCUMFLEX
	| TILDE;