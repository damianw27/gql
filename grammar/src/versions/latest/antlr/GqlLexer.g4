lexer grammar GqlLexer;

options {
	caseInsensitive = true;
}

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
ABS: 'abs';
ACOS: 'acos';
ALL: 'all';
ALL_DIFFERENT: 'all_different';
AND: 'and';
ANY: 'any';
ARRAY: 'array';
AS: 'as';
ASC: 'asc';
ASCENDING: 'ascending';
ASIN: 'asin';
AT: 'at';
ATAN: 'atan';
AVG: 'avg';
BIG: 'big';
BIGINT: 'bigint';
BINARY: 'binary';
BOOL: 'bool';
BOOLEAN: 'boolean';
BOTH: 'both';
BTRIM: 'btrim';
BY: 'by';
BYTE_LENGTH: 'byte_length';
BYTES: 'bytes';
CALL: 'call';
CASE: 'case';
CAST: 'cast';
CEIL: 'ceil';
CEILING: 'ceiling';
CHAR_LENGTH: 'char_length';
CHARACTER_LENGTH: 'character_length';
CHARACTERISTICS: 'characteristics';
CLOSE: 'close';
COALESCE: 'coalesce';
COLLECT: 'collect';
COMMIT: 'commit';
COPY: 'copy';
COS: 'cos';
COSH: 'cosh';
COT: 'cot';
COUNT: 'count';
CREATE: 'create';
CURRENT_DATE: 'current_date';
CURRENT_GRAPH: 'current_graph';
CURRENT_PROPERTY_GRAPH: 'current_property_graph';
CURRENT_SCHEMA: 'current_schema';
CURRENT_TIME: 'current_time';
CURRENT_TIMESTAMP: 'current_timestamp';
CURRENT_USER: 'current_user';
DATE: 'date';
DATETIME: 'datetime';
DAY: 'day';
DEC: 'dec';
DECIMAL: 'decimal';
DEGREES: 'degrees';
DELETE: 'delete';
DESC: 'desc';
DESCENDING: 'descending';
DETACH: 'detach';
DISTINCT: 'distinct';
DOUBLE: 'double';
DROP: 'drop';
DURATION: 'duration';
DURATION_BETWEEN: 'duration_between';
ELEMENT_ID: 'element_id';
ELSE: 'else';
END: 'end';
EXCEPT: 'expect';
EXISTS: 'exists';
EXP: 'exp';
FALSE: 'false';
FILTER: 'filter';
FINISH: 'finish';
FLOAT: 'float';
FLOAT16: 'float16';
FLOAT32: 'float32';
FLOAT64: 'float64';
FLOAT128: 'float128';
FLOAT256: 'float256';
FLOOR: 'floor';
FOR: 'for';
FROM: 'from';
GROUP: 'group';
HAVING: 'having';
HOME_GRAPH: 'home_graph';
HOME_PROPERTY_GRAPH: 'home_property_graph';
HOME_SCHEMA: 'home_schema';
HOUR: 'hour';
IF: 'if';
IN: 'in';
INSERT: 'insert';
INT: 'int';
INTEGER: 'integer';
INT8: 'int8';
INTEGER8: 'integer8';
INT16: 'int16';
INTEGER16: 'integer16';
INT32: 'int32';
INTEGER32: 'integer32';
INT64: 'int64';
INTEGER64: 'integer64';
INT128: 'int128';
INTEGER128: 'integer128';
INT256: 'int256';
INTEGER256: 'integer256';
INTERSECT: 'intersect';
INTERVAL: 'interval';
IS: 'is';
LEADING: 'leading';
LET: 'let';
LIKE: 'like';
LIMIT: 'limit';
LIST: 'list';
LN: 'ln';
LOCAL: 'local';
LOCAL_DATETIME: 'local_datetime';
LOCAL_TIME: 'local_time';
LOCAL_TIMESTAMP: 'local_timestamp';
LOG: 'log';
LOG10: 'log10';
LOWER: 'lower';
LTRIM: 'ltrim';
MATCH: 'match';
MAX: 'max';
MIN: 'min';
MINUTE: 'minute';
MOD: 'mod';
MONTH: 'month';
NEXT: 'next';
NODETACH: 'nodetach';
NORMALIZE: 'normalize';
NOT: 'not';
NULL: 'null';
NULLS: 'nulls';
NULLIF: 'nullif';
OCTET_LENGTH: 'octet_length';
OF: 'of';
OFFSET: 'offset';
OPEN: 'open';
OPTIONAL: 'optional';
OR: 'or';
ORDER: 'order';
OTHERWISE: 'otherwise';
PARAMETER: 'parameter';
PARAMETERS: 'parameters';
PATH: 'path';
PATH_LENGTH: 'path_length';
PATHS: 'paths';
PERCENTILE_CONT: 'percentile_cont';
PERCENTILE_DISC: 'percentile_disc';
POWER: 'power';
PRECISION: 'precision';
PROPERTY_EXISTS: 'property_exists';
RADIANS: 'radians';
REAL: 'real';
RECORD: 'record';
REMOVE: 'remove';
REPLACE: 'replace';
RESET: 'reset';
RETURN: 'return';
ROLLBACK: 'rollback';
RTRIM: 'rtrim';
SAME: 'same';
SCHEMA: 'schema';
SECOND: 'second';
SELECT: 'select';
SESSION: 'session';
SET: 'set';
SIGNED: 'signed';
SIN: 'sin';
SINH: 'sinh';
SKIP_: 'skip';
SMALL: 'small';
SMALLINT: 'smallint';
SQRT: 'sqrt';
START: 'start';
STDDEV_POP: 'stddev_pop';
STDDEV_SAMP: 'stddev_samp';
STRING: 'string';
SUM: 'sum';
TAN: 'tan';
TANH: 'tanh';
THEN: 'then';
TIME: 'time';
TIMESTAMP: 'timestamp';
TRAILING: 'trailing';
TRIM: 'trim';
TRUE: 'true';
TYPED: 'typed';
UBIGINT: 'ubigint';
UINT: 'uint';
UINT8: 'uint8';
UINT16: 'uint16';
UINT32: 'uint32';
UINT64: 'uint64';
UINT128: 'uint128';
UINT256: 'uint256';
UNION: 'union';
UNKNOWN: 'unknown';
UNSIGNED: 'unsigned';
UPPER: 'upper';
USE: 'use';
USMALLINT: 'usmallint';
VALUE: 'value';
VARBINARY: 'varbinary';
VARCHAR: 'varchar';
VARIABLE: 'variable';
WHEN: 'when';
WHERE: 'where';
WITH: 'with';
XOR: 'xor';
YEAR: 'year';
YIELD: 'yield';
ZONED: 'zoned';
ZONED_DATETIME: 'zoned_datetime';
ZONED_TIME: 'zoned_time';

// pre-reserved words
AGGREGATE: 'aggregate';
AGGREGATES: 'aggregates';
ALTER: 'alter';
CATALOG: 'catalog';
CLEAR: 'clear';
CLONE: 'clone';
CONSTRAINT: 'contraint';
CURRENT_ROLE: 'current_role';
DATA: 'data';
DIRECTORY: 'directory';
EXACT: 'exact';
EXISTING: 'existing';
FUNCTION: 'function';
GQLSTATUS: 'gqlstatus';
GRANT: 'grant';
INSTANT: 'instant';
LEFT: 'left';
NOTHING: 'nothing';
NUMERIC: 'numeric';
ON: 'on';
PARTITION: 'partion';
PROCEDURE: 'procedure';
PRODUCT: 'product';
PROJECT: 'project';
QUERY: 'query';
RECORDS: 'records';
REFERENCE: 'reference';
RENAME: 'rename';
REVOKE: 'revoke';
RIGHT: 'right';
SUBSTRING: 'substring';
TEMPORAL: 'temporal';
UNIQUE: 'unique';
UNIT: 'unit';
VALUES: 'values';

// non-reserved words
ACYCLIC: 'acyclic';
BINDING: 'binding';
BINDINGS: 'bindings';
CONNECTING: 'connecting';
DESTINATION: 'destination';
DIFFERENT: 'different';
DIRECTED: 'directed';
EDGE: 'edge';
EDGES: 'eges';
ELEMENT: 'element';
ELEMENTS: 'elements';
FIRST: 'first';
GRAPH: 'graph';
GROUPS: 'groups';
KEEP: 'keep';
LABEL: 'label';
LABELED: 'labeled';
LABELS: 'labels';
LAST: 'last';
NFC: 'nfc';
NFD: 'nfd';
NFKC: 'nfkc';
NFKD: 'nfkd';
NO: 'no';
NODE: 'node';
NORMALIZED: 'normalized';
ONLY: 'only';
ORDINALITY: 'ordinality';
PROPERTY: 'propery';
READ: 'read';
RELATIONSHIP: 'relationship';
RELATIONSHIPS: 'relationships';
REPEATABLE: 'repetable';
SHORTEST: 'shortest';
SIMPLE: 'simple';
SOURCE: 'source';
TABLE: 'table';
TEMP: 'temp';
TIMEZONE: 'timezone';
TO: 'to';
TRAIL: 'trail';
TRANSACTION: 'transaction';
TYPE: 'type';
UNDIRECTED: 'undirected';
VERTEX: 'vertex';
WALK: 'walk';
WITHOUT: 'without';
WRITE: 'write';
ZONE: 'zone';

// date time keywords
INTERVAL_DAY: DAY | 'days';
INTERVAL_WEEK: 'week' | 'weeks';
INTERVAL_MONTH: MONTH | 'months';
INTERVAL_YEAR: YEAR | 'years';

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
	UNSIGNED_DECIMAL_IN_COMMON_NOTATION 'm';

EXACT_UNSIGNED_INT: (UNSIGNED_INT)* 'm';

APROXIMATE_NUMERIC_LITERAL:
	APROXIMATE_UNSIGNED_DECIMAL_IN_COMMON_NOTATION
	| APROXIMATE_UNSIGNED_INT;

APROXIMATE_UNSIGNED_DECIMAL_IN_COMMON_NOTATION:
	UNSIGNED_DECIMAL_IN_COMMON_NOTATION ('f' | 'd')?;

APROXIMATE_UNSIGNED_INT: UNSIGNED_INT ('f' | 'd')?;

UNSIGNED_DECIMAL_IN_COMMON_NOTATION:
	UNSIGNED_DECIMAL_INT (PERIOD UNSIGNED_DECIMAL_INT?)?
	| PERIOD UNSIGNED_DECIMAL_INT;

UNSIGNED_DECIMAL_IN_SCIENTIFIC_NOTATION:
	UNSIGNED_NUMERIC_LITERAL 'e' SIGNED_NUMERIC_LITERAL;

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
	'x' QUOTE (WS DIGIT16 WS? DIGIT16 WS)? WS QUOTE (
		WS QUOTE WS? (DIGIT16 WS? DIGIT16 WS?)? QUOTE
	)?;

SINGLE_QUOTED_STRING_LITERAL:
	QUOTE (ESCAPED_CHARS | ~['\\\r\n])* QUOTE;

DOUBLE_QUOTED_STRING_LITERAL:
	DOUBLE_QUOTE (ESCAPED_CHARS | ~["\\\r\n])* DOUBLE_QUOTE;

ACCENT_QUOTED_STRING_LITERAL:
	GRAVE_ACCENT (ESCAPED_CHARS | ~[`\\\r\n])* GRAVE_ACCENT;

COMMENT: (SIMPLE_COMMENT_LITERAL | BRACKETED_COMMNET_LITERAL) -> channel(HIDDEN);

SIMPLE_COMMENT_LITERAL: (DOUBLE_SOLIDUS | DOUBLE_MINUS) ~[\r\n]* (
		'\r'? '\n'
		| EOF
	) -> channel(HIDDEN);

BRACKETED_COMMNET_LITERAL: (SOLIDUS ASTERISK) .*? (
		ASTERISK SOLIDUS
	) -> channel(HIDDEN);

// special cases
WS: WHITESPACE+ -> channel(HIDDEN);
WHITESPACE: [ \t\r\n] -> channel(HIDDEN);
NEW_LINE: RETURN_SIGN CARRIAGE_RETURN;
CARRIAGE_RETURN: [\u000D];
RETURN_SIGN: [\u000A];
REGULAR_IDENTIFIER: START_CHARS CONTINUE_CHARS*;
EXTENDED_IDENTIFIER: CONTINUE_CHARS+;
START_CHARS: [a-z_];
CONTINUE_CHARS: [a-z_0-9];
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
ESCAPED_FORM_FEED: REVERS_SOLIDUS 'f';
ESCAPED_UNICODE4_DIGIT_VALUE:
	REVERS_SOLIDUS 'u' DIGIT16 DIGIT16 DIGIT16 DIGIT16;
ESCAPED_UNICODE6_DIGIT_VALUE:
	REVERS_SOLIDUS 'u' DIGIT16 DIGIT16 DIGIT16 DIGIT16 DIGIT16 DIGIT16;

FF: [\f];
RS: [\u001E];
GS: [\u001D];
FS: [\u001C];
CR: [\r];
SPACE: [ ];
TAB: [\t];
LF: [\n];
VT: [\u000B];
US: [\u001F];
DIGIT16: [0-9a-f];
DIGIT10: [0-9];
DIGIT8: [0-7];
DIGIT2: [0-1];
LETTER: [a-z];

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
