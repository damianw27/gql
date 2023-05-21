import { CharStreams } from '@gql-grammar/antlr4';
import { PGSLexer } from '@gql-grammar/core/dist/versions/pg-schema';

export const createLexer = (input: string): PGSLexer => {
  const inputSteam = CharStreams.fromString(input);
  return new PGSLexer(inputSteam);
};
