import Parser from 'antlr4/Parser';
import Lexer from 'antlr4/Lexer';

export interface LanguageTools {
  readonly lexer: (code: string) => Lexer;
  readonly parser: (lexer: Lexer) => Parser;
  readonly run: (parser: Parser) => unknown;
}
