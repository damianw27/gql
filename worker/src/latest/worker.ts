import { GrammarEvent } from '$types/grammar-event';
import { GrammarEventType } from '$types/grammar-event-type';
import { CharStreams, CommonTokenStream } from 'antlr4';
import { ParsingErrorListener } from '$latest/parsing-error-listener';
import { GrammarEventResultParse } from '$types/grammar-event-result-parse';
import { GrammarEventResultUtilities } from '$types/grammar-event-result-utilities';
import { GrammarEventResultInit } from '$types/grammar-event-result-init';
import { examples, GqlLexer, GqlParser } from '@gql-grammar/core/dist/versions/latest';

console.log(examples, GqlLexer, GqlParser);

onmessage = ({ data }: MessageEvent<GrammarEvent>): void => {
  const { type } = data;

  switch (type) {
    case GrammarEventType.Parse: {
      const { payload } = data;
      const charStream = CharStreams.fromString(payload.text);
      const lexer = new GqlLexer(charStream);
      const commonTokenStream = new CommonTokenStream(lexer);
      const parser = new GqlParser(commonTokenStream);
      const parsingErrorListener = new ParsingErrorListener();
      // @ts-ignore
      parser.addErrorListener(parsingErrorListener);
      parser.gqlProgram();

      const result: GrammarEventResultParse = {
        text: payload.text,
        errors: parsingErrorListener.errors,
        isInvalid: parsingErrorListener.errors.length !== 0,
      };

      postMessage(result);
      return;
    }

    case GrammarEventType.Utilities: {
      const { payload } = data;
      const charStream = CharStreams.fromString(payload.text);
      const lexer = new GqlLexer(charStream);
      const commonTokenStream = new CommonTokenStream(lexer);
      const parser = new GqlParser(commonTokenStream);

      const result: GrammarEventResultUtilities<typeof lexer, typeof parser> = {
        lexer,
        parser,
      };

      postMessage(result);
      return;
    }

    case GrammarEventType.Initialize: {
      const symbolicNames: string[] = GqlParser.symbolicNames
        .filter((symbolicName) => symbolicName !== null)
        .map((symbolicName) => (symbolicName !== null ? symbolicName : ''));

      const literalNames = GqlParser.literalNames
        .filter((literalName) => literalName !== null)
        .map((literalName) => (literalName !== null ? literalName : ''));

      const result: GrammarEventResultInit = {
        symbolicNames,
        literalNames,
        examples: examples,
      };

      postMessage(result);
      return;
    }
  }
};
