lexer grammar PGSLexer;

options {
	caseInsensitive = true;
}

CREATE : 'create';
NODE : 'node';
EDGE : 'edge';
OPEN : 'open';
OPTIONAL : 'optional';
TYPE : 'type';
GRAPH : 'graph';
STRICT : 'strict';
LOOSE : 'loose';
ABSTRACT : 'abstract';
IMPORTS : 'imports';

LPAREN : '(';
RPAREN : ')';
LBRACK : '[';
RBRACK : ']';
LBRACE : '{';
RBRACE : '}';
COMMA : ',';
COLON : ':';
SEMICOLON : ';';
DASH : '-';
ARROW : '>';
BAR : '|';
AMPERSAND : '&';
QUESTION : '?';

StringLiteral : [A-Z0-9_-]+;
Whitespace : [ \t\n\r]+ -> channel(HIDDEN);
