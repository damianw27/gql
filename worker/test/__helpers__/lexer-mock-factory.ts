import { CharStreams } from '@gql-grammar/antlr4';
import { GqlLexer } from '@gql-grammar/core/dist/versions/latest';

export const lexerMockFactory = jest.fn((input: string) => {
  const inputSteam = CharStreams.fromString(input);
  return new GqlLexer(inputSteam);
});
