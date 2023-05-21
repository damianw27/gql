import { GqlLexer } from '@gql-grammar/core/dist/versions/latest';
import { CharStreams } from '@gql-grammar/antlr4';

export const createLexer = (input: string): GqlLexer => {
  const inputSteam = CharStreams.fromString(input);
  return new GqlLexer(inputSteam);
};
