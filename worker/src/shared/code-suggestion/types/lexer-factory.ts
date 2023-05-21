import { Lexer } from '@gql-grammar/antlr4';

export type LexerFactory<L extends Lexer> = (input: string) => L;
