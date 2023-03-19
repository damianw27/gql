parser grammar SQLParser;

options {
	language = JavaScript;
	tokenVocab = SQLLexer;
}

// Entry point
query: select_statement EOF;

// Select statement
select_statement:
	SELECT column_list FROM table_expression (
		WHERE search_condition
	)? (ORDER BY order_expression)? SEMI_COLON;

column_list: ID (COMMA ID)* | ASTERISK;

table_expression: ID;

order_expression: ID (ASC | DESC)?;

// Search condition
search_condition:
	search_condition AND search_condition
	| search_condition OR search_condition
	| NOT search_condition
	| predicate;

predicate: comparison_predicate;

comparison_predicate: ID comparison_operator value_expression;

comparison_operator:
	EQUALS
	| NOT_EQUALS
	| LESS_THAN
	| LESS_THAN_OR_EQUALS
	| GREATER_THAN
	| GREATER_THAN_OR_EQUALS;

value_expression: STRING_LITERAL | NUMERIC_LITERAL | ID;
