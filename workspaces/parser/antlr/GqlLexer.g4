lexer grammar GqlLexer;

tokens {
	ON
}

GQL_TERMINAL_CHAR:
	GQL_LANGUAGE_CHAR
	| ~[\u0000-\u007F\uD800-\uDBFF]
	| [\uD800-\uDBFF] [\uDC00-\uDFFF];

GQL_LANGUAGE_CHAR:
    LETTER
    | DIGIT10
    | GQL_SPECIAL_CHAR;

GQL_SPECIAL_CHAR:
	SPACE
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

COMPARE_OPERATOR:
	EQUALS
	| NOT_EQUALS
	| LESS_THEN
	| GRATER_THEN_OPERATOR
	| LESS_THEN_OR_EQUALS
	| GREATER_THEN_OR_EQUALS;

SPACE: ' ';
QUOTE: '\'';
DOUBLE_QUOTE: '"';
GRAVE_ACCENT: '`';
REVERS_SOLIDUS: '\\';
PLUS: '+';
MINUS: '-';
DOUBLE_MINUS: MINUS MINUS;
AMPERSAND: '&';
ASTERISK: '*';
CIRCUMFLEX: '^';
COLON: ':';
DOUBLE_COLON: COLON COLON;
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
DOUBLE_SOLIDUS: SOLIDUS SOLIDUS;
TILDE: '~';
UNDERSCORE: '_';
VERTICAL_BAR: '|';
PERCENT: '%';
PERIOD: '.';
DOUBLE_PERIOD: PERIOD PERIOD;
CARRIAGE_RETURN: '\u000D';
RETURN: '\u000A';
NEW_LINE: RETURN CARRIAGE_RETURN;

// SPECIAL OPERANDS

BRACKETED_COMMENT_START: SOLIDUS ASTERISK;
BRACKETED_CoMMENT_END: ASTERISK SOLIDUS;

BRACKER_MINUS_RIGHT_ARROW:
	LEFT_BRACKET MINUS RIGHT_ANGLE_BRACKET;

BRACKET_TILDE_RIGHT_ARROW:
	LEFT_BRACKET TILDE RIGHT_ANGLE_BRACKET;

CONCATENATION_OPERATOR: VERTICAL_BAR VERTICAL_BAR;
GRATER_THEN_OPERATOR: RIGHT_ANGLE_BRACKET;
GREATER_THEN_OR_EQUALS: RIGHT_ANGLE_BRACKET EQUALS;
LEFT_ARROW_MIUNUS: LEFT_ANGLE_BRACKET MINUS;
LEFT_ARROW_TILDE: RIGHT_ANGLE_BRACKET TILDE;
LEFT_ARROW_MINUS_RIGHT_BRACKET: LEFT_ARROW_MIUNUS RIGHT_BRACKET;
LEFT_ARROW_RIGHT_BRACKET: LEFT_ARROW_TILDE RIGHT_BRACKET;
LEFT_MINUS_RIGHT: LEFT_ANGLE_BRACKET MINUS RIGHT_ANGLE_BRACKET;
LEFT_MINUS_SLASH: LEFT_ANGLE_BRACKET MINUS SOLIDUS;
LEFT_TILDE_SLASH: LEFT_ARROW_TILDE SOLIDUS;
LESS_THEN: LEFT_ANGLE_BRACKET;
LESS_THEN_OR_EQUALS: LEFT_ANGLE_BRACKET EQUALS;
MINUS_LEFT_BRACKET: MINUS LEFT_BRACKET;
MINUS_SLESH: MINUS SOLIDUS;
MINUS_RIGHT_ARROW: MINUS RIGHT_ANGLE_BRACKET;
NOT_EQUALS: LEFT_ANGLE_BRACKET RIGHT_ANGLE_BRACKET;
RIGHT_BRACKET_MINUS: RIGHT_BRACKET MINUS;
RIGHT_BRACKET_TILDE: RIGHT_BRACKET TILDE;
RIGHT_BRACKET_RIGHT_ARROW: RIGHT_BRACKET RIGHT_ANGLE_BRACKET;
RIGHT_ARROW_TILDE: RIGHT_ANGLE_BRACKET TILDE;
SLASH_MINUS: SOLIDUS MINUS;
SLASH_MINUS_RIGHT: SOLIDUS MINUS RIGHT_ANGLE_BRACKET;
SLASH_TILDE: SOLIDUS TILDE;
SLASH_TILDE_RIGHT: SOLIDUS TILDE RIGHT_ANGLE_BRACKET;
TILDE_LEFT_BRACKET: TILDE LEFT_BRACKET;
TILDE_RIGHT_ARROW: TILDE RIGHT_ANGLE_BRACKET;
TILDE_SLASH: TILDE SOLIDUS;
MULTISET_ALT_OPERATOR: VERTICAL_BAR PLUS VERTICAL_BAR;

// ESCAPED CHARS

ESCAPED_CHAR:
	ESCAPED_REVERSE_SOLIDUS
	| ESCAPED_QUOTE
	| ESCAPED_DOUBLE_QUOTE
	| ESCAPED_TAB
	| ESCAPED_BACKSPACE
	| ESCAPED_NEWLINE
	| ESCAPED_CARRIAGE_RETURN
	| ESCAPED_FORM_FEED
	| UNICODE_ESCAPED_VALUE
	| ESCAPED_GRAVE_ACCENT;

ESCAPED_REVERSE_SOLIDUS: DOUBLE_SOLIDUS DOUBLE_SOLIDUS;
ESCAPED_QUOTE: DOUBLE_SOLIDUS QUOTE;
ESCAPED_DOUBLE_QUOTE: DOUBLE_SOLIDUS DOUBLE_QUOTE;
ESCAPED_TAB: DOUBLE_SOLIDUS 't';
ESCAPED_BACKSPACE: DOUBLE_SOLIDUS 'b';
ESCAPED_NEWLINE: DOUBLE_SOLIDUS 'n';
ESCAPED_CARRIAGE_RETURN: DOUBLE_SOLIDUS 'r';
ESCAPED_FORM_FEED: DOUBLE_SOLIDUS 'f';

UNICODE_ESCAPED_VALUE:
	UNICODE4_ESCAPED_VALUE
	| UNICODE6_ESCAPED_VALUE;

UNICODE4_ESCAPED_VALUE:
	DOUBLE_SOLIDUS 'u' DIGIT16 DIGIT16 DIGIT16 DIGIT16;

UNICODE6_ESCAPED_VALUE:
	DOUBLE_SOLIDUS 'U' DIGIT16 DIGIT16 DIGIT16 DIGIT16 DIGIT16 DIGIT16;

ESCAPED_GRAVE_ACCENT:
	REVERS_SOLIDUS GRAVE_ACCENT
	| GRAVE_ACCENT GRAVE_ACCENT;

// WORDS

KEY_WORD:
	RESERVED_WORD
	| IN_DEGREE
	| OUT_DEGREE
	| ST_DEV
	| ST_DEV_P
	| PERCENTILE_CONT
	| PERCENTILE_DIST
	| L_TRIM
	| R_TRIM
	| START_NODE
	| END_NODE
	| TAIL
	| TO_LOWER
	| TO_UPPER
	| NORMAL_FORM;

RESERVED_WORD:
	ABS
	| ACOS
	| ADD
	| AGGREGATE
	| ALIAS
	| ALL
	| ALL_DIFFERENT
	| AND
	| ANY
	| ARRAY
	| AS
	| ASC
	| ASCENDING
	| ASIN
	| AT
	| ATAN
	| AVG
	| BINARY
	| BIGINT
	| BOOL
	| BOOLEAN
	| BOTH
	| BY
	| BYTE_LENGTH
	| BYTES
	| CALL
	| CASE
	| CAST
	| CATALOG
	| CEIL
	| CEILING
	| CHARACTER
	| CHARACTER_LENGTH
	| CLEAR
	| CLONE
	| CLOSE
	| COALESCE
	| COLLECT
	| COMMIT
	| CONSTRAINT
	| CONSTANT
	| CONSTRUCT
	| COPY
	| COS
	| COSH
	| COST
	| COT
	| COUNT
	| CURRENT_DATE
	| CURRENT_GRAPH
	| CURRENT_PROPERTY_GRAPH
	| CURRENT_ROLE
	| CURRENT_SCHEMA
	| CURRENT_TIME
	| CURRENT_TIMESTAMP
	| CURRENT_USER
	| CREATE
	| DATA
	| DATE
	| DATETIME
	| DEC
	| DECIMAL
	| DEFAULT
	| DEGREES
	| DELETE
	| DETACH
	| DESC
	| DESCENDING
	| DIRECTORIES
	| DIRECTORY
	| DISTINCT
	| DO
	| DOUBLE
	| DROP
	| DURATION
	| ELEMENT_ID
	| ELSE
	| END
	| ENDS
	| EMPTY_BINDING_TABLE
	| EMPTY_GRAPH
	| EMPTY_PROPERTY_GRAPH
	| EMPTY_TABLE
	| EXCEPT
	| EXISTS
	| EXISTING
	| EXP
	| EXPLAIN
	| FALSE
	| FILTER
	| FLOAT
	| FLOAT16
	| FLOAT32
	| FLOAT64
	| FLOAT128
	| FLOAT256
	| FLOOR
	| FOR
	| FROM
	| FUNCTION
	| FUNCTIONS
	| GQLSTATUS
	| GRANT
	| GROUP
	| HAVING
	| HOME_GRAPH
	| HOME_PROPERTY_GRAPH
	| HOME_SCHEMA
	| IN
	| INSERT
	| INT
	| INTEGER
	| INT8
	| INTEGER8
	| INT16
	| INTEGER16
	| INT32
	| INTEGER32
	| INT64
	| INTEGER64
	| INT128
	| INTEGER128
	| INT256
	| INTEGER256
	| INTERSECT
	| IF
	| IS
	| KEEP
	| LEADING
	| LEFT
	| LENGTH
	| LET
	| LIKE
	| LIKE_REGEX
	| LIMIT
	| LIST
	| LN
	| LOCALDATETIME
	| LOCALTIME
	| LOCALTIMESTAMP
	| LOG
	| LOG10
	| LOWER
	| MANDATORY
	| MAP
	| MATCH
	| MERGE
	| MAX
	| MIN
	| MOD
	| MULTI
	| MULTIPLE
	| MULTISET
	| NEW
	| NOT
	| NORMALIZE
	| NOTHING
	| NULL
	| NULLS
	| NULLIF
	| NUMERIC
	| OCCURRENCES_REGEX
	| OCTET_LENGTH
	| OF
	| OFFSET
	| ON
	| OPTIONAL
	| OR
	| ORDER
	| ORDERED
	| OTHERWISE
	| PARAMETER
	| PATH
	| PATHS
	| PARTITION
	| POSITION_REGEX
	| POWER
	| PRECISION
	| PROCEDURE
	| PROCEDURES
	| PRODUCT
	| PROFILE
	| PROJECT
	| QUERIES
	| QUERY
	| RADIANS
	| REAL
	| RECORD
	| RECORDS
	| REFERENCE
	| REMOVE
	| RENAME
	| REPLACE
	| REQUIRE
	| RESET
	| RESULT
	| RETURN
	| REVOKE
	| RIGHT
	| ROLLBACK
	| SAME
	| SCALAR
	| SCHEMA
	| SCHEMAS
	| SCHEMATA
	| SELECT
	| SESSION
	| SET
	| SSKIP
	| SIGNED
	| SIN
	| SINGLE
	| SINH
	| SMALLINT
	| SQRT
	| START
	| STARTS
	| STRING
	| SUBSTRING
	| SUBSTRING_REGEX
	| SUM
	| TAN
	| TANH
	| THEN
	| TIME
	| TIMESTAMP
	| TRAILING
	| TRANSLATE_REGEX
	| TRIM
	| TRUE
	| TRUNCATE
	| UINT
	| UINT8
	| UINT16
	| UINT32
	| UINT64
	| UINT128
	| UINT256
	| UNION
	| UNIT
	| UNIT_BINDING_TABLE
	| UNIT_TABLE
	| UNIQUE
	| UNNEST
	| UNKNOWN
	| UNSIGNED
	| UNWIND
	| UPPER
	| USE
	| VALUE
	| VALUES
	| VARBINARY
	| VARCHAR
	| WHEN
	| WHERE
	| WITH
	| WITHOUT
	| XOR
	| YIELD
	| ZERO;

NON_RESERVED_WORD:
	ACYCLIC
	| BINDING
	| CLASS_ORIGIN
	| COMMAND_FUNCTION
	| COMMAND_FUNCTION_CODE
	| CONDITION_NUMBER
	| CONNECTING
	| DESTINATION
	| DIRECTED
	| EDGE
	| EDGES
	| FINAL
	| FIRST
	| GRAPH
	| GRAPHS
	| GROUPS
	| INDEX
	| LAST
	| LABEL
	| LABELED
	| LABELS
	| MESSAGE_TEXT
	| MMORE
	| MUTABLE
	| NFC
	| NFD
	| NFKC
	| NFKD
	| NODE
	| NODES
	| NORMALIZED
	| NUMBER
	| ONLY
	| ORDINALITY
	| PATTERN
	| PATTERNS
	| PROPERTY
	| PROPERTIES
	| READ
	| RELATIONSHIP
	| RELATIONSHIPS
	| RETURNED_GQLSTATUS
	| SHORTEST
	| SIMPLE
	| SOURCE
	| SUBCLASS_ORIGIN
	| TABLE
	| TABLES
	| TIES
	| TO
	| TRAIL
	| TRANSACTION
	| TYPE
	| TYPES
	| UNDIRECTED
	| VERTEX
	| VERTICES
	| WALK
	| WRITE
	| ZONE;

TRYGONOMETRIC_FUNCTION_NAME:
	SIN
	| COS
	| TAN
	| COT
	| SINH
	| COSH
	| TANH
	| COTH
	| ASIN
	| ACOS
	| ATAN
	| ACOT
	| DEGREES
	| RADIANS;

SESSION: S E S S I O N;
SET: S E T;
SESSION_SET: SESSION SET;
SCHEMA: S C H E M E;
TIME_ZONE: T I M E SPACE Z O N E;
PARAMETER: P A R A M E T E R;
REMOVE: R E M O V E;
NOT: N O T;
EXISTS: E X I S T S;
IF_EXISTS: IF EXISTS;
IF_NOT_EXISTS: IF NOT EXISTS;
CLEAR: C L E A R;
START_TRANSACTION: S T A R T SPACE T R A N S A C T I O N;
READ: R E A D;
READ_ONLY: READ SPACE O N L Y;
READ_WRITE: READ SPACE W R I T E;
ROLLBACK: R O L L B A C K;
COMMIT: C O M M I T;
TRUE: T R U E;
FALSE: F A L S E;
UNKNOWN: U N K N O W N;
DATE: D A T E;
TIME: T I M E;
DATETIME: DATE TIME;
TIMESTAMP: T I M E S T A M P;
DURATION: D U R A T I O N;
NULL: N U L L;
EDGE: E D G E;
RELATIONSHIP: R E L A T I O N S H I P;
EDGES: E D G E S;
RELATIONSHIPS: R E L A T I O N S H I P S;
NODE: N O D E;
VERTEX: V E R T E X;
LIST: L I S T;
ARRAY: A R R A Y;
MAP: M A P;
RECORD: R E C O R D;
MUTABLE: M U T A B L E;
FINAL: F I N A L;
CATALOG: C A T A L O G;
PROCEDURE: P R O C E D U R E;
QUERY: Q U E R Y;
GRAPH: G R A P H;
TABLE: T A B L E;
DETACH: D E T A C H;
REPLACE: R E P L A C E;
PROPERTY: P R O P E R T Y;
TYPE: T Y P E;
LABEL: L A B E L;
LABELS: L A B E L S;
FUNCTION: F U N C T I O N;
THEN: T H E N;
ELSE: E L S E;
WHEN: W H E N;
INSERT: I N S E R T;
OPTIONAL: O P T I O N A L;
MERGE: M E R G E;
OTHERWISE: O T H E R W I S;
UNION: U N I O N;
EXCEPT: E X C E P T;
INTERSECT: I N T E R S E C T;
COST: C O S T;
DEFAULT: D E F A U L T;
PROFILE: P R O F I L E;
EXPLAIN: E X P L A I N;
PATH: P A T H | P A T H S;
WALK: W A L K;
TRAIL: T R A I L;
SIMPLE: S I M P L E;
ACYCLIC: A C Y C L I C;
BOOL: B O O L;
BOOLEAN: B O O L E A N;
STRING: S T R I N G;
VARCHAR: V A R C H A R;
BYTES: B Y T E S;
BINARY: B I N A R Y;
VARBINARY: V A R B I N A R Y;
ANY: A N Y;
NOTHING: N O T H I N G;
INT: I N T;
INT8: INT '8';
INT16: INT '16';
INT32: INT '32';
INT64: INT '64';
INT128: INT '128';
INT256: INT '256';
SMALLINT: S M A L L INT;
BIGINT: B I G INT;
SIGNED: S I G N E D;
DESTINATION: D E S T I N A T I O N;
SOURCE: S O U R C E;
DIRECTED: D I R E C T E D;
UNDIRECTED: U N D I R E C T E D;
CONNECTING: C O N N E C T I N G;
LABELED: L A B E L E D;
NORMALIZED: N O R M A L I Z E D;
ALL_DIFFERENT: A L L UNDERSCORE D I F F E R E N T;
SAME: S A M E;
LEADING: L E A D I N G;
TRAILING: T R A I L I N G;
BOTH: B O T H;
MULTISET: M U L T I S E T;
ALL: A L L;
DISTINCT: D I S T I N C T;
ORDERED: O R D E R E D;
UNIT: U N I T;
VALUE: V A L U E;
NULLIF: N U L L I F;
COALESCE: C O A L E S C E;
CASE: C A S E;
END: E N D;
CAST: C A S T;
ELEMENT_ID: E L E M E N T UNDERSCORE I D;
BINDING: B I N D I N G;
CLASS_ORIGIN: C L A S S UNDERSCORE O R I G I N;
COMMAND_FUNCTION: C O M M A N D UNDERSCORE F U N C T I O N;
COMMAND_FUNCTION_CODE:
	C O M M A N D UNDERSCORE F U N C T I O N UNDERSCORE C O D E;
CONDITION_NUMBER: C O N D I T I O N UNDERSCORE N U M B E R;
FIRST: F I R S T;
GRAPHS: G R A P H S;
GROUPS: G R O U P S;
INDEX: I N D E X;
LAST: L A S T;
MESSAGE_TEXT: M E S S A G E UNDERSCORE T E X T;
MMORE: M O R E;
NFC: N F C;
NFD: N F D;
NFKC: N F K C;
NFKD: N F K D;
NODES: N O D E S;
NUMBER: N U M B E R;
ONLY: O N L Y;
ORDINALITY: O R D I N A L I T Y;
PATTERN: P A T T E R N;
PATTERNS: P A T T E R N S;
PROPERTIES: P R O P E R T I E S;
RETURNED_GQLSTATUS:
	R E T U R N E D UNDERSCORE G Q L S T A T U S;
ZONE: Z O N E;
WRITE: W R I T E;
VERTICES: V E R T I C E S;
TYPES: T Y P E S;
TRANSACTION: T R A N S A C T I O N;
TIES: T I E S;
TABLES: T A B L E S;
SUBCLASS_ORIGIN: S U B C L A S S UNDERSCORE O R I G I N;
SHORTEST: S H O R T E S T;
ZERO: Z E R O;
YIELD: Y I E L D;
XOR: X O R;
WITHOUT: W I T H O U T;
WITH: W I T H;
WHERE: W H E R E;
VALUES: V A L U E S;
USE: U S E;
UPPER: U P P E R;
UNWIND: U N W I N D;
UNSIGNED: U N S I G N E D;
UNNEST: U N N E S T;
UNIQUE: U N I Q U E;
UNIT_TABLE: UNIT UNDERSCORE TABLE;
UNIT_BINDING_TABLE: UNIT UNDERSCORE BINDING UNDERSCORE TABLE;
TRUNCATE: T R U N C A T E;
TRIM: T R I M;
REGEX: R E G E X;
TRANSLATE_REGEX: T R A N S L A T E UNDERSCORE REGEX;
SUM: S U M;
SUBSTRING: S U B S T R I N G;
SUBSTRING_REGEX: S U B S T R I N G UNDERSCORE REGEX;
START: S T A R T;
STARTS: S T A R T S;
SINGLE: S I N G L E;
SSKIP: S K I P;
SELECT: S E L E C T;
SCHEMAS: S C H E M A S;
SCHEMATA: S C H E M A T A;
SCALAR: S C A L A R;
RIGHT: R I G H T;
REVOKE: R E V O K E;
RESULT: R E S U L T;
RESET: R E S E T;
REQUIRE: R E Q U I R E;
RENAME: R E N A M E;
REFERENCE: R E F E R E N C E;
RECORDS: R E C O R D S;
REAL: R E A L;
QUERIES: Q U E R I E S;
PROJECT: P R O J E C T;
PRODUCT: P R O D U C T;
PROCEDURES: P R O C E D U R E S;
PRECISION: P R E C I S I O N;
POSITION_REGEX: P O S I T I O N UNDERSCORE REGEX;
PARTITION: P A R T I T I O N;
PATHS: P A T H S;
ORDER: O R D E R;
ON: O N;
OFFSET: O F F S E T;
OCCURRENCES_REGEX: O C C U R R E N C E S UNDERSCORE REGEX;
NUMERIC: N U M E R I C;
NULLS: N U L L S;
NORMALIZE: N O R M A L I Z E;
NEW: N E W;
MULTIPLE: M U L T I P L E;
MULTI: M U L T I;
MIN: M I N;
MAX: M A X;
MATCH: M A T C H;
MANDATORY: M A N D A T O R Y;
LOWER: L O W E R;
LOCALTIMESTAMP: L O C A L T I M E S T A M P;
LOCALTIME: L O C A L T I M E;
LOCALDATETIME: L O C A L D A T E T I M E;
LIMIT: L I M I T;
LIKE: L I K E;
LIKE_REGEX: LIKE UNDERSCORE REGEX;
LET: L E T;
LEFT: L E F T;
KEEP: K E E P;
IN: I N;
ADD: A D D;
AGGREGATE: A G G R E G A T E;
ALIAS: A L I A S;
AND: A N D;
ASC: A S C;
ASCENDING: A S C E N D I N G;
AVG: A V G;
BY: B Y;
CALL: C A L L;
CEILING: C E I L I N G;
CHARACTER: C H A R A C T E R;
CLONE: C L O N E;
CLOSE: C L O S E;
COLLECT: C O L L E C T;
CONSTRAINT: C O N S T R A I N T;
CONSTANT: C O N S T A N T;
CONSTRUCT: C O N S T R U C T;
COPY: C O P Y;
COUNT: C O U N T;
CURRENT: C U R R E N T;
CURRENT_DATE: CURRENT UNDERSCORE DATE;
CURRENT_GRAPH: CURRENT UNDERSCORE GRAPH;
CURRENT_PROPERTY_GRAPH:
	CURRENT UNDERSCORE PROPERTY UNDERSCORE GRAPH;
CURRENT_ROLE: CURRENT UNDERSCORE R O L E;
CURRENT_SCHEMA: CURRENT UNDERSCORE SCHEMA;
CURRENT_TIME: CURRENT UNDERSCORE TIME;
CURRENT_TIMESTAMP: CURRENT UNDERSCORE TIMESTAMP;
CURRENT_USER: CURRENT UNDERSCORE U S E R;
CREATE: C R E A T E;
DATA: D A T A;
DEC: D E C;
DECIMAL: D E C I M A L;
DELETE: D E L E T E;
DESC: D E S C;
DESCENDING: D E S C E N D I N G;
DIRECTORIES: D I R E C T O R I E S;
DIRECTORY: D I R E C T O R Y;
DOUBLE: D O U B L E;
DROP: D R O P;
ENDS: E N D S;
EMPTY: E M P T Y;
EMPTY_BINDING_TABLE: EMPTY UNDERSCORE BINDING UNDERSCORE TABLE;
EMPTY_GRAPH: EMPTY UNDERSCORE GRAPH;
EMPTY_PROPERTY_GRAPH:
	EMPTY UNDERSCORE PROPERTY UNDERSCORE GRAPH;
EMPTY_TABLE: EMPTY UNDERSCORE TABLE;
EXISTING: E X I S T I N G;
FILTER: F I L T E R;
FLOAT: F L O A T;
FLOAT16: FLOAT '16';
FLOAT32: FLOAT '32';
FLOAT64: FLOAT '64';
FLOAT128: FLOAT '128';
FLOAT256: FLOAT '256';
FOR: F O R;
FROM: F R O M;
FUNCTIONS: F U N C T I O N S;
GQLSTATUS: G Q L S T A T U S;
GRANT: G R A N T;
GROUP: G R O U P;
HAVING: H A V I N G;
HOME: H O M E;
HOME_GRAPH: HOME UNDERSCORE GRAPH;
HOME_PROPERTY_GRAPH: HOME UNDERSCORE PROPERTY UNDERSCORE GRAPH;
HOME_SCHEMA: HOME UNDERSCORE SCHEMA;
INTEGER: I N T E G E R;
INTEGER8: INTEGER '8';
INTEGER16: INTEGER '16';
INTEGER32: INTEGER '32';
INTEGER64: INTEGER '64';
INTEGER128: INTEGER '128';
INTEGER256: INTEGER '256';
UINT: U I N T;
UINT8: UINT '8';
UINT16: UINT '16';
UINT32: UINT '32';
UINT64: UINT '64';
UINT128: UINT '128';
UINT256: UINT '256';
AT: A T;
AS: A S;
DO: D O;
IS: I S;
IF: I F;
OF: O F;
OR: O R;
TO: T O;
PATH_MODE: WALK | TRAIL | SIMPLE | ACYCLIC;
BOOL_TYPE: BOOL | BOOLEAN;
STRING_TYPE: STRING | VARCHAR;
AS_OR_EQUALS: AS | EQUALS;
TRUTH_VALUE: TRUE | FALSE | UNKNOWN | NULL;
TRIM_SPEC: LEADING | TRAILING | BOTH;
LENGTH: L E N G T H;
BYTE_LENGTH: B Y T E UNDERSCORE LENGTH;
OCTET_LENGTH: O C T E T UNDERSCORE LENGTH;
CHARACTER_LENGTH: C H A R A C T E R UNDERSCORE LENGTH;
ABS: A B S;
MOD: M O D;
LOG10: LOG '10';
LOG: L O G;
LN: L N;
EXP: E X P;
POWER: P O W E R;
SQRT: S Q R T;
FLOOR: F L O O R;
CEIL: C E I L | C E I L I N G;
SIN: S I N;
COS: C O S;
TAN: T A N;
COT: C O T;
SINH: S I N H;
COSH: C O S H;
TANH: T A N H;
COTH: C O S H;
ASIN: A S I N;
ACOS: A C O S;
ATAN: A T A N;
ACOT: A C O T;
DEGREES: D E G R E E S;
RADIANS: R A D I A N S;
YEAR: Y E A R | Y E A R S;
MONTH: M O N T H | M O N T H S;
DAY: D A Y | D A Y S;
HOUR: H O U R | H O U R S;
MINUTE: M I N U T E | M I N U T E S;
SECOND: S E C O N D | S E C O N D S;
SIGN: PLUS | MINUS;
IN_DEGREE: 'inDegree';
OUT_DEGREE: 'outDegree';
ST_DEV: 'stDev';
ST_DEV_P: 'stDevP';
PERCENTILE_CONT: 'percentileCont';
PERCENTILE_DIST: 'percentileDist';
L_TRIM: 'lTrim';
R_TRIM: 'rTrim';
START_NODE: 'startNode';
END_NODE: 'endNode';
TAIL: 'tail';
TO_LOWER: 'toLower';
TO_UPPER: 'toUpper';
NORMAL_FORM: 'normalForm';
TAB: '\u0009';

WHITESPACE:
	SPACE
	| NEW_LINE
	| CARRIAGE_RETURN
	| TAB
	| RETURN
	| '\u000B'
	| '\u000C'
	| CARRIAGE_RETURN
	| '\u0085';

START2: '0b';
START8: '0o';
START16: '0x';
ESEPARATOR: 'E';
BYTE_STRING_START: 'X';
DIGIT16: [0-9a-fA-F];
DIGIT10: [0-9];
DIGIT8: [0-7];
DIGIT2: [0-1];
LETTER: [a-zA-Z];

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
