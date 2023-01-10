import { Language } from '../types/language';
import { useCallback, useEffect, useState } from 'react';
import { Grammar, highlight } from 'prismjs';
import styles from '../styles/highlight.module.css';

export const useHighlights = (
  language: Language
): ((code: string) => string) => {
  const [languageGrammar, setLanguageGrammar] = useState<Grammar>({});

  const assemblyLine = (line: string, index: number): string =>
    `<tr><td class="${styles['line-number-cell']}">${
      index + 1
    }</td><td class="${styles['code-line']}">${line}</td></tr>`;

  const getStringsOnlyFromArray = (array: (string | null)[]): string[] =>
    array.filter((x) => x !== null).map((x) => x!);

  useEffect(() => {
    const symbolicNames = getStringsOnlyFromArray(language.symbolicNames).join(
      '|'
    );
    const literals = getStringsOnlyFromArray(language.literals).join('|');
    const symbolicNamesRegExp = new RegExp(`\\b(?:${symbolicNames})\\b`);
    const literalsRegExp = new RegExp(`\\b(?:${literals})\\b`);

    const languageGrammar: Grammar = {
      [styles['token-literal']]: {
        pattern: literalsRegExp,
        lookbehind: true,
        greedy: true,
      },
      [styles['token-symbol']]: symbolicNamesRegExp,
    };

    setLanguageGrammar(languageGrammar);
  }, [language.symbolicNames, language.literals]);

  return useCallback(
    (code: string): string => {
      const highlighted = highlight(code, languageGrammar, 'lang')
        .split('\n')
        .map(assemblyLine)
        .join('\n')
        .replaceAll('class="token', `class="${styles['token']}`);

      return `<div class="${styles['highlight-bg']}"><div class="${styles['highlight-line-number-bg']}"></div><div class="${styles['highlight-line-bg']}"></div></div><table class="${styles['table']}"><tbody>${highlighted}</tbody></table>`;
    },
    [languageGrammar]
  );
};
