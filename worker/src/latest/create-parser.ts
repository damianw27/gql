import { GqlLexer, GqlParser } from '@gql-grammar/core/dist/versions/latest';
import { CommonTokenStream, PredictionMode } from '@gql-grammar/antlr4';

export const createParser = (lexer: GqlLexer): GqlParser => {
  const commonTokenStream = new CommonTokenStream(lexer);
  const parser = new GqlParser(commonTokenStream);
  parser.buildParseTrees = true;
  parser.removeErrorListeners();
  parser._interp.predictionMode = PredictionMode.SLL;
  return parser;
};
