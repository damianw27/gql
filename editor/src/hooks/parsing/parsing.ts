import { useEffect, useState } from 'react';
import { Lexer, Parser } from 'antlr4';
import { GrammarEventResultInit, GrammarEventResultParse, GrammarEventType } from '@gql-grammar/worker';
import { useDebouncedEffect } from '$hooks/debounce/debounced-effect';

export const useParsing = <P extends Parser, L extends Lexer>(text: string) => {
  const [grammarWorker, setGrammarWorker] = useState<Worker>();
  const [grammarSpec, setGrammarSpec] = useState<GrammarEventResultInit>();
  const [parseResult, setParseResult] = useState<GrammarEventResultParse>();
  const [isParsing, setIsParsing] = useState<boolean>();

  useEffect(() => {
    if (grammarWorker !== undefined) {
      grammarWorker.terminate();
    }

    const worker = new Worker('./workers/latest.worker.js');
    worker.postMessage({ type: GrammarEventType.Initialize });
    worker.onmessage = ({ data }: MessageEvent<GrammarEventResultInit>) => setGrammarSpec(data);
    setGrammarWorker(worker);

    return () => {
      grammarWorker?.terminate();
    };
  }, []);

  useDebouncedEffect({
    callback: () => {
      if (text === '' || grammarWorker === undefined) {
        return;
      }

      setIsParsing(true);
      grammarWorker.postMessage({ type: GrammarEventType.Parse, payload: { text } });
      grammarWorker.onmessage = ({ data }: MessageEvent<GrammarEventResultParse>) => {
        setParseResult(data);
        setIsParsing(false);
      };
    },
    delay: 800,
    deps: [text],
  });

  return {
    grammarSpec,
    parseResult,
    isParsing,
  };
};
