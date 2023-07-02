import { CharStreams, CommonTokenStream, PredictionMode } from '@gql-grammar/antlr4';
import { GqlLexer, GqlParser } from '@gql-grammar/core/dist/versions/latest';
import { ParseTreeExtractor } from '$shared/parse-tree/parse-tree-extractor';

describe('ParseTreeExtractor', () => {
  const lexerFactory = (input: string) => {
    const charStream = CharStreams.fromString(input);
    return new GqlLexer(charStream);
  };

  const parserFactory = (lexer: GqlLexer): GqlParser => {
    const commonTokenStream = new CommonTokenStream(lexer);
    const parser = new GqlParser(commonTokenStream);
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser._interp.predictionMode = PredictionMode.SLL;
    return parser;
  };

  describe('extract', () => {
    it('should extract the parse tree correctly', () => {
      const lexer = lexerFactory('session start');
      const parser = parserFactory(lexer);
      const parseResult = parser.gqlProgram();
      const parseTreeExtractor = new ParseTreeExtractor(parser);
      const result = parseTreeExtractor.extract(parseResult);

      expect(result).toEqual([
        {
          name: 'gqlProgram',
          children: [
            {
              name: 'activity',
              children: [
                {
                  name: 'programActivity',
                  children: [
                    {
                      name: 'sessionActivity',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              name: 'activity',
              children: [
                {
                  name: 'programActivity',
                  children: [
                    {
                      name: 'sessionActivity',
                      children: [
                        {
                          type: 226,
                          text: 'session',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: 'activity',
              children: [
                {
                  name: 'programActivity',
                  children: [
                    {
                      name: 'transactionActivity',
                      children: [
                        {
                          name: 'transactionStartCommand',
                          children: [
                            {
                              type: 235,
                              text: 'start',
                            },
                            {
                              type: 352,
                              text: "<missing 'transaction'>",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: -1,
              text: '<EOF>',
            },
          ],
        },
      ]);
    });
  });
});
