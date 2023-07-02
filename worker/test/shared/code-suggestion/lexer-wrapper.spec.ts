import { CharStreams, Lexer } from '@gql-grammar/antlr4';
import { GqlLexer } from '@gql-grammar/core/dist/versions/latest';
import { TokenizationResult } from '$shared/code-suggestion/types/tokenization-result';
import { LexerWrapper } from '$shared/code-suggestion/lexer-wrapper';
import { LexerFactory } from '$shared/code-suggestion/types/lexer-factory';

describe('LexerWrapper', () => {
  const lexerFactory: LexerFactory<Lexer> = (input: string) => {
    const charStream = CharStreams.fromString(input);
    return new GqlLexer(charStream);
  };

  describe('tokenizeNonDefaultChannel', () => {
    it('should tokenize input and filter tokens by channel 0', () => {
      const lexerWrapper = new LexerWrapper(lexerFactory);
      const result: TokenizationResult = lexerWrapper.tokenizeNonDefaultChannel('input');

      expect(result.textNotTokenized).toBe('');
      expect(result.tokens.length).toEqual(1);
    });
  });

  describe('findStateByRuleNumber', () => {
    it('should return the ATNState for a given rule number', () => {
      const lexerWrapper = new LexerWrapper(lexerFactory);
      lexerWrapper.getCachedLexer();
      const state = lexerWrapper.findStateByRuleNumber(1);

      expect(state.stateType).toBe(2);
    });
  });

  describe('getCachedLexer', () => {
    it('should create a new lexer if cached lexer is not available', () => {
      const lexerWrapper = new LexerWrapper(lexerFactory);
      const cachedLexer = lexerWrapper.getCachedLexer();

      expect(cachedLexer.state).not.toBeUndefined();
    });

    it('should return already created lexer on second call', () => {
      const lexerWrapper = new LexerWrapper(lexerFactory);
      const cachedLexer1 = lexerWrapper.getCachedLexer();
      const cachedLexer2 = lexerWrapper.getCachedLexer();

      expect(cachedLexer1).toBe(cachedLexer2);
    });
  });
});
