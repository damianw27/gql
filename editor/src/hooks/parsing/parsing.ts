import { useEffect, useRef, useState } from 'react';
import { GrammarEventResultInit, GrammarEventResultParse, GrammarEventType, WorkerInfo } from '@gql-grammar/worker';
import { useDebouncedEffect } from '$hooks/debounce/debounced-effect';

interface ParsingData {
  specification?: GrammarEventResultInit;
  parseResult?: GrammarEventResultParse;
}

interface UseParsing extends ParsingData {
  readonly isParsing: boolean;
  readonly isInitializing: boolean;
}

export const useParsing = (text: string, workerInfo: WorkerInfo): UseParsing => {
  const grammarWorkerRef = useRef<Worker | null>(null);
  const [parsingData, setParsingData] = useState<ParsingData>({});
  const [isParsing, setIsParsing] = useState<boolean>(false);
  const [isInitializing, setIsInitializing] = useState<boolean>(false);

  const handleInitResponse = ({ data }: MessageEvent<GrammarEventResultInit>): void => {
    setParsingData({ specification: data });
    setIsInitializing(false);
    setIsParsing(true);
  };

  const handleParseResponse = ({ data }: MessageEvent<GrammarEventResultParse>) => {
    setParsingData({ ...parsingData, parseResult: data });
    setIsParsing(false);
  };

  useEffect(() => {
    if (grammarWorkerRef.current !== null) {
      grammarWorkerRef.current.terminate();
    }

    setIsInitializing(true);
    grammarWorkerRef.current = null;
    grammarWorkerRef.current = new Worker(`./workers/${workerInfo.fileName}`);
    grammarWorkerRef.current.postMessage({ type: GrammarEventType.Initialize });
    grammarWorkerRef.current.onmessage = handleInitResponse;

    return () => {
      if (grammarWorkerRef.current === null) {
        return;
      }

      grammarWorkerRef.current.terminate();
    };
  }, [workerInfo]);

  useDebouncedEffect(
    () => {
      if (grammarWorkerRef.current === null || isInitializing) {
        return;
      }

      setIsParsing(true);
      grammarWorkerRef.current.postMessage({ type: GrammarEventType.Parse, payload: { text } });
      grammarWorkerRef.current.onmessage = handleParseResponse;
    },
    {
      deps: [text, isInitializing, grammarWorkerRef.current],
      delay: 800,
    },
  );

  return {
    ...parsingData,
    isParsing,
    isInitializing,
  };
};
