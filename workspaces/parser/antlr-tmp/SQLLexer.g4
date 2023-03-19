lexer grammar SQLLexer;

// Identifiers
ID: [a-zA-Z_][a-zA-Z0-9_]*;

// Literals
STRING_LITERAL: '\'' ~('\'' | '\n' | '\r')* '\'';
NUMERIC_LITERAL: [0-9]+ ('.' [0-9]*)?;

// Operators and punctuation
EQUALS: '=';
NOT_EQUALS: '<>';
LESS_THAN: '<';
LESS_THAN_OR_EQUALS: '<=';
GREATER_THAN: '>';
GREATER_THAN_OR_EQUALS: '>=';
PLUS: '+';
MINUS: '-';
ASTERISK: '*';
FORWARD_SLASH: '/';
COMMA: ',';
LEFT_PAREN: '(';
RIGHT_PAREN: ')';
SEMI_COLON: ';';

// Keywords
mode KEYWORDS;

SELECT: 'SELECT' -> mode(KEYWORDS);
FROM: 'FROM' -> mode(KEYWORDS);
WHERE: 'WHERE' -> mode(KEYWORDS);
AND: 'AND' -> mode(KEYWORDS);
OR: 'OR' -> mode(KEYWORDS);
ORDER: 'ORDER' -> mode(KEYWORDS);
BY: 'BY' -> mode(KEYWORDS);
ASC: 'ASC' -> mode(KEYWORDS);
DESC: 'DESC' -> mode(KEYWORDS);
NOT: 'NOT' -> mode(KEYWORDS);

// Whitespace mode rules
mode WHITESPACE;

WS: [ \n\r\t]+ -> mode(WHITESPACE);

// Keywords mode rules for whitespace
mode KEYWORDS_SPACES;
SPACES: [ \t\r\n]+;