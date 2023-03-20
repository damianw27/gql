import { ParseError } from '@editor/types/parse-error';
import { Language } from '@editor/types/language';
import { useReducer } from 'react';
import {
  defaultParsingOutput,
  ParsingOutput,
} from '@editor/hooks/parsing/types/parsing-output';
import { parsingReducer } from '@editor/hooks/parsing/parsing-reducer';
import {
  defaultParsingState,
  ParsingState,
} from '@editor/hooks/parsing/types/parsing-state';
import {
  EndParsingAction,
  EndWithErrorParsingAction,
  StartParsingAction,
} from '@editor/hooks/parsing/parsing-action';
import { useDebouncedEffect } from '@shared/hooks/debounce/debounced-effect';

export const useParsing = (query: string, lang: Language): ParsingState => {
  const [state, dispatch] = useReducer(parsingReducer, defaultParsingState);

  const parse = (): Promise<ParsingOutput> =>
    new Promise((resolve) => {
      const lexer = lang.tools.lexer(query);
      const parser = lang.tools.parser(lexer);

      const errors: ParseError[] = [];

      parser.addErrorListener({
        // eslint-disable-next-line max-params
        syntaxError: (
          recognizer,
          offendingSymbol,
          line,
          charPositionInLine,
          msg,
        ) => {
          const parserError: ParseError = {
            lineIndex: line,
            charPosition: charPositionInLine,
            message: msg,
          };

          errors.push(parserError);
        },
        reportAmbiguity: () => {},
        reportAttemptingFullContext: () => {},
        reportContextSensitivity: () => {},
      });

      lang.tools.run(parser);

      resolve({
        query,
        errors,
        isInvalid: true,
      });
    });

  const handleParsingSuccess = (output: ParsingOutput): void => {
    dispatch(new EndParsingAction({ output }));
  };

  const handleParsingFailed = (): void => {
    dispatch(new EndWithErrorParsingAction());
  };

  useDebouncedEffect({
    callback: () => {
      if (query === '') {
        dispatch(new EndParsingAction({ output: defaultParsingOutput }));
        return;
      }

      dispatch(new StartParsingAction());
      parse().then(handleParsingSuccess).catch(handleParsingFailed);
    },
    delay: 800,
    deps: [query, lang],
  });

  return state;
};
