import { ATNState, AtomTransition, CharStreams, Lexer, Transition } from '@gql-grammar/antlr4';
import { GqlLexer } from '@gql-grammar/core/dist/versions/latest';
import { LexerWrapper } from '$shared/code-suggestion/lexer-wrapper';
import { TokenSuggester } from '$shared/code-suggestion/token-suggester';
import { LexerFactory } from '$shared/code-suggestion/types/lexer-factory';

describe('TokenSuggester', () => {
  const lexerFactory: LexerFactory<Lexer> = (input: string) => {
    const charStream = CharStreams.fromString(input);
    return new GqlLexer(charStream);
  };

  describe('suggest', () => {
    it('should return an empty array if no suggestions are made', () => {
      const lexerWrapper = new LexerWrapper(lexerFactory);
      const tokenSuggester = new TokenSuggester('', lexerWrapper, null);
      const suggestions = tokenSuggester.suggest([]);
      expect(suggestions).toEqual([]);
    });

    it('should handle epsilon transition', () => {
      const lexerWrapper = new LexerWrapper(lexerFactory);
      const tokenSuggester = new TokenSuggester('', lexerWrapper, null);
      const state = new ATNState();
      const transition = new Transition(state);
      transition.isEpsilon = true;
      state.transitions = [transition];
      const suggestions = tokenSuggester.suggest([20]);
      expect(suggestions).toEqual(['~>']);
    });

    it('should handle atom transition', () => {
      const lexerWrapper = new LexerWrapper(lexerFactory);
      const tokenSuggester = new TokenSuggester('', lexerWrapper, null);
      const state = new ATNState();
      const transition = new AtomTransition(state, 97);
      state.transitions = [transition];
      const suggestions = tokenSuggester.suggest([1]);
      expect(suggestions).toEqual(['<-']);
    });
  });
});
