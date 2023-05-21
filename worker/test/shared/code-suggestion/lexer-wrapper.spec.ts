import { TokenizationResult } from '$shared/code-suggestion/types/tokenization-result';
import { LexerWrapper } from '$shared/code-suggestion/lexer-wrapper';
import { Lexer } from '@gql-grammar/antlr4';
import { lexerMockFactory } from '$test/_helpers_/lexer-mock-factory';

describe('LexerWrapper', () => {
  describe('tokenizeNonDefaultChannel', () => {
    it('should tokenize input and filter tokens by channel 0', () => {
      const lexerWrapper = new LexerWrapper(lexerMockFactory);
      const result: TokenizationResult = lexerWrapper.tokenizeNonDefaultChannel('input');

      expect(lexerMockFactory).toHaveBeenCalledWith('input');
      expect(result).toEqual({
        textNotTokenized: expect.anything(),
        tokens: [{ channel: 0 }, { channel: 0 }],
      });
    });
  });

  describe('findStateByRuleNumber', () => {
    it('should return the ATNState for a given rule number', () => {
      const lexerWrapper = new LexerWrapper(lexerMockFactory);
      const state = lexerWrapper.findStateByRuleNumber(1);

      expect(state).toBe(2);
    });
  });

  describe('getCachedLexer', () => {
    it('should return the cached lexer if available', () => {
      const lexerWrapper = new LexerWrapper(lexerMockFactory);
      const cachedLexer = {} as unknown as Lexer;
      lexerWrapper['cachedLexer'] = cachedLexer;
      const result = lexerWrapper.getCachedLexer();

      expect(result).toBe(cachedLexer);
    });

    it('should create a new lexer if cached lexer is not available', () => {
      const lexerWrapper = new LexerWrapper(lexerMockFactory);
      lexerWrapper.getCachedLexer();

      expect(lexerMockFactory).toHaveBeenCalledWith('');
    });
  });
});
