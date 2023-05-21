import { CommonTokenStream, Lexer, Parser } from '@gql-grammar/antlr4';

export type ParserFactory<L extends Lexer, P extends Parser> = (lexer: L) => P;
