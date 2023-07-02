import { Lexer, Parser, CharStreams, CommonTokenStream, PredictionMode } from '@gql-grammar/antlr4';
import { GqlLexer, GqlParser } from '@gql-grammar/core/dist/versions/latest';
import { ParserFactory } from '$shared/code-suggestion/types/parser-factory';
import { SuggestionsBuilder } from '$shared/code-suggestion/suggestions-builder';
import { LexerFactory } from '$shared/code-suggestion/types/lexer-factory';
import { CaseKind } from '$shared/code-suggestion/types/case-kind';

const largeExample =
  'CREATE GRAPH mySocialNetwork OPEN TYPE\n' +
  'INSERT (:Person { "firstname": "Keith", "lastname": "Hare", \n' +
  '         "joined": DATE "2022-08-23" })\n' +
  '       -[:LIVES_IN { "since": DATE "1980-07-15" }]->\n' +
  '       (:City { "name":"Granville", "state":"OH",\n' +
  '         "country": "USA" })\n' +
  'INSERT (:Pet { "name": "Winnifred", "type": "Dog" })\n' +
  'MATCH (a { "firstname": "Keith" }), (d { "name": "Winnifred" })\n' +
  'INSE';

describe('SuggestionsBuilder', () => {
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
      const suggestionsBuilder = new SuggestionsBuilder(lexerFactory, parserFactory, '');
      const suggestions = suggestionsBuilder.suggest();

      expect(suggestions).toEqual([]);
    });

    it('should return suggestions for specific input', () => {
      const suggestionsBuilder = new SuggestionsBuilder(
        lexerFactory,
        parserFactory,
        'CREATE graph test OPEN TYPE\nMATCH',
      );

      const suggestions = suggestionsBuilder.suggest();

      expect(suggestions).toEqual(['{']);
    });

    it('should return suggestions for large input', () => {
      const suggestionsBuilder = new SuggestionsBuilder(lexerFactory, parserFactory, largeExample);
      const suggestions = suggestionsBuilder.suggest();

      expect(suggestions).toEqual(['{']);
    });
  });

  describe('setCasePreference', () => {
    it('should update case preference', () => {
      const suggestionsBuilder = new SuggestionsBuilder(lexerFactory, parserFactory, '');
      suggestionsBuilder.setCasePreference(CaseKind.Upper);
      expect((suggestionsBuilder as any).casePreference).toBe(CaseKind.Upper);
      suggestionsBuilder.setCasePreference(CaseKind.Both);
      expect((suggestionsBuilder as any).casePreference).toBe(CaseKind.Both);
    });
  });
});
