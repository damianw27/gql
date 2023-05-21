import { CommonTokenStream, PredictionMode } from '@gql-grammar/antlr4';
import { PGSLexer, PGSParser } from '@gql-grammar/core/dist/versions/pg-schema';

export const createParser = (lexer: PGSLexer): PGSParser => {
  const commonTokenStream = new CommonTokenStream(lexer);
  const parser = new PGSParser(commonTokenStream);
  parser.buildParseTrees = true;
  parser.removeErrorListeners();
  parser._interp.predictionMode = PredictionMode.SLL;
  return parser;
};
