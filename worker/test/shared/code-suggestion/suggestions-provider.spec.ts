import { CharStreams, CommonTokenStream, Lexer, Parser, PredictionMode } from '@gql-grammar/antlr4';
import { GqlLexer, GqlParser } from '@gql-grammar/core/dist/versions/latest';
import { SuggestionsProvider } from '$shared/code-suggestion/suggestions-provider';
import { CaseKind } from '$shared/code-suggestion/types/case-kind';
import { LexerFactory } from '$shared/code-suggestion/types/lexer-factory';
import { ParserFactory } from '$shared/code-suggestion/types/parser-factory';

describe('SuggestionsProvider', () => {
  const lexerFactory: LexerFactory<Lexer> = (input: string) => {
    const charStream = CharStreams.fromString(input);
    return new GqlLexer(charStream);
  };

  const parserFactory: ParserFactory<Lexer, Parser> = (lexer: Lexer): Parser => {
    const commonTokenStream = new CommonTokenStream(lexer);
    const parser = new GqlParser(commonTokenStream);
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser._interp.predictionMode = PredictionMode.SLL;
    return parser;
  };

  describe('suggest', () => {
    it('should return no suggestions for specific input', () => {
      const provider = new SuggestionsProvider(lexerFactory, parserFactory);
      const suggestions = provider.suggest('');

      expect(suggestions).toEqual([]);
    });

    it('should return suggestions for specific input', () => {
      const provider = new SuggestionsProvider(lexerFactory, parserFactory);
      const suggestions = provider.suggest('CREATE TABLE');

      expect(suggestions).toEqual(['{']);
    });

    it('should return suggestions for specific input with lower case only', () => {
      const provider = new SuggestionsProvider(lexerFactory, parserFactory, CaseKind.Lower);
      const suggestions = provider.suggest('create table');

      expect(suggestions).toEqual(['{']);
    });

    it('should return suggestions for specific input with lower case only', () => {
      const provider = new SuggestionsProvider(lexerFactory, parserFactory, CaseKind.Both);
      const suggestions = provider.suggest('cReAte taBle');

      expect(suggestions).toEqual(['{']);
    });
  });
});
