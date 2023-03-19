import { Language } from '@editor/types/language';
import { useCallback, useEffect, useState } from 'react';
import { Grammar, highlight } from 'prismjs';
import styles from './highlight.module.css';

interface UseHighlights {
  readonly highlight: (code: string) => string;
  readonly grammar: Grammar;
}

export const useHighlights = (language: Language): UseHighlights => {
  const [grammar, setGrammar] = useState<Grammar>({});

  const assemblyLine = (line: string, index: number): string =>
    `<tr><td class="${styles.lineNumberCell}">${index + 1}</td><td class="${
      styles.codeLine
    }">${line}</td></tr>`;

  const getStringsOnlyFromArray = (array: (string | null)[]): string[] =>
    array.filter((x) => x !== null && x !== '').map((x) => x!);

  useEffect(() => {
    const symbolicNames = getStringsOnlyFromArray(language.symbolicNames)
      .map((char: string) => char.replace('-', '\\-'))
      .map((char: string) => char.replace('(', '\\('))
      .map((char: string) => char.replace(')', '\\)'))
      .map((char: string) => char.replace('[', '\\['))
      .join('|');

    const literals = getStringsOnlyFromArray(language.literals).join('|');
    const symbolicNamesRegExp = new RegExp(`\\b(?:${symbolicNames})\\b`);
    const literalsRegExp = new RegExp(`\\b(?:${literals})\\b`);

    const languageGrammar: Grammar = {
      [styles.tokenLiteral]: {
        pattern: literalsRegExp,
        lookbehind: true,
        greedy: true,
      },
      [styles.tokenSymbol]: symbolicNamesRegExp,
    };

    setGrammar(languageGrammar);
  }, [language.symbolicNames, language.literals]);

  const highlightCallback = useCallback(
    (code: string): string => {
      const highlighted = highlight(code, grammar, 'lang')
        .split('\n')
        .map(assemblyLine)
        .join('\n')
        .replaceAll('class="token', `class="${styles.token}`);

      return `<div class="${styles.highlightBackground}"><div class="${styles.highlightLineNumberBackground}"></div><div class="${styles.highlightLineBackground}"></div></div><table class="${styles.table}"><tbody>${highlighted}</tbody></table>`;
    },
    [grammar],
  );

  return {
    highlight: highlightCallback,
    grammar,
  };
};
