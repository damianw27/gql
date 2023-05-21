import { GrammarEvent } from '$types/grammar-event';
import { GrammarEventType } from '$types/grammar-event-type';
import { ParsingErrorListener } from '$latest/parsing-error-listener';
import { GrammarEventResultParse } from '$types/grammar-event-result-parse';
import { GrammarEventResultUtilities } from '$types/grammar-event-result-utilities';
import { GrammarEventResultInit } from '$types/grammar-event-result-init';
import { SuggestionsProvider } from '$shared/code-suggestion/suggestions-provider';
import { CaseKind } from '$shared/code-suggestion/types/case-kind';
import { ParseTreeExtractor } from '$shared/parse-tree/parse-tree-extractor';
import { GrammarBuilder } from '$shared/grammar-builder/grammar-builder';
import { CommonSyntaxObjects } from '$shared/grammar-builder/common-syntax-objects';
import { createParser } from '$root/pg-schema/create-parser';
import { createLexer } from '$root/pg-schema/create-lexer';
import { examples, PGSParser } from '@gql-grammar/core/dist/versions/pg-schema';

onmessage = ({ data }: MessageEvent<GrammarEvent>): void => {
  const { type } = data;

  switch (type) {
    case GrammarEventType.Parse: {
      const { payload } = data;
      const text = payload.text;
      const lexer = createLexer(text);
      const errorListener = new ParsingErrorListener();
      const parser = createParser(lexer);

      parser.addErrorListener(errorListener);

      const codeSuggestion = new SuggestionsProvider(createLexer, createParser, CaseKind.Both);
      const suggestions = codeSuggestion.suggest(text);
      const parseOutput = parser.root();
      const parseTreeExtractor = new ParseTreeExtractor(parser);
      const parseTree = parseTreeExtractor.extract(parseOutput);
      const { errors } = errorListener;
      const isInvalid = errors.length !== 0;

      const result: GrammarEventResultParse = {
        text,
        suggestions,
        parseTree,
        errors,
        isInvalid,
      };

      postMessage(result);
      return;
    }

    case GrammarEventType.Utilities: {
      const { payload } = data;
      const lexer = createLexer(payload.text);
      const parser = createParser(lexer);

      const result: GrammarEventResultUtilities<typeof lexer, typeof parser> = {
        lexer,
        parser,
      };

      postMessage(result);
      return;
    }

    case GrammarEventType.Initialize: {
      const grammarDefinition = new GrammarBuilder()
        .withName('PG-Schema')
        .withDataFromAntlr(PGSParser.literalNames)
        .withSyntaxObject(CommonSyntaxObjects.CLikeComment)
        .withSyntaxObject(CommonSyntaxObjects.String)
        .build();

      const result: GrammarEventResultInit = {
        grammarDefinition,
        examples,
      };

      postMessage(result);
      return;
    }
  }
};
