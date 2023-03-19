import { DependencyList, useEffect, useRef, useState } from 'react';
import { Rule } from 'eslint';

type EffectCallback = () => void;

type Timeout = ReturnType<typeof setTimeout>;

interface DebouncedEffectProps {
  readonly callback: EffectCallback;
  readonly delay: number;
  readonly deps: DependencyList;
}

export const useDebouncedEffect = ({
  callback,
  delay,
  deps,
}: DebouncedEffectProps): void => {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, deps);
};
