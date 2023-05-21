import { ATN, Lexer, Token } from '@gql-grammar/antlr4';

export const mockToken = (channel: number): Token => ({ channel } as unknown as Token);

export const lexerMockFactory = jest.fn(
  () =>
    ({
      getAllTokens: jest.fn(() => [mockToken(0), mockToken(1), mockToken(0), mockToken(2)]),
      removeErrorListeners: jest.fn(),
      addErrorListener: jest.fn(),
      atn: { ruleToStartState: [1, 2, 3] } as unknown as ATN,
    } as unknown as Lexer),
);
