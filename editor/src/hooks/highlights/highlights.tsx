import { useCallback, useEffect, useState } from 'react';
import Prism, { Grammar, highlight } from 'prismjs';
import styles from '$hooks/highlights/highlight.module.css';
import { Lexer, Parser } from 'antlr4';
import { GrammarEventResultInit } from '@gql-grammar/worker';

interface UseHighlights {
  readonly highlight: (code: string) => string;
  readonly grammar: Grammar;
}

const NEW_LINE = '\n';
const REGEX_ALT_SEPARATOR = '|';
const ESCAPED_CHAR_PATTERN = '\\$&';
const NODE_REGEX = /(<span[^>]*>)((.|\n)*?)(<\/span>)/gi;
const REGEX_SPEC_CHARS_REGEX = /[.*+\-?^${}()|[\]\\]/g;
const COMMENT_BLOCK_REGEX = /\/\*(([^]|\*(?!\/))*)\*\//gms;
const COMMENT_REGEX = /(^|[^\\:])\/\/.*/gms;
const STRING_REGEX = /(["'`])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

export const useHighlights = <P extends Parser, L extends Lexer>(
  grammarSpec: GrammarEventResultInit | undefined,
): UseHighlights => {
  const [grammar, setGrammar] = useState<Grammar>({});

  const assemblyLine = (line: string, index: number): string =>
    `<tr><td class='${styles.lineNumberCell}'>${index + 1}</td><td class='${styles.codeLine}'>${line}</td></tr>`;

  const getStringsOnlyFromArray = (array: (string | null)[]): string[] =>
    array.filter((x) => x !== null && x !== '').map((x) => x!);

  useEffect(() => {
    const symbolicNames = getStringsOnlyFromArray(grammarSpec?.symbolicNames ?? [])
      .map((char: string) => char.replace(REGEX_SPEC_CHARS_REGEX, ESCAPED_CHAR_PATTERN))
      .join(REGEX_ALT_SEPARATOR);

    const literals = getStringsOnlyFromArray(grammarSpec?.literalNames ?? [])
      .map((char: string) => char.replace(REGEX_SPEC_CHARS_REGEX, ESCAPED_CHAR_PATTERN))
      .join(REGEX_ALT_SEPARATOR);

    const symbolicNamesRegExp = new RegExp(`\\b(?:${symbolicNames})\\b`, 'gi');
    const literalsRegExp = new RegExp(`[${literals}]`, 'g');

    const languageGrammar: Grammar = {
      [styles.tokenComment]: [
        {
          pattern: COMMENT_BLOCK_REGEX,
          greedy: true,
          multiline: true,
        },
        {
          pattern: COMMENT_REGEX,
          greedy: true,
        },
      ],
      [styles.tokenString]: {
        pattern: STRING_REGEX,
        greedy: true,
      },
      [styles.tokenSymbol]: {
        pattern: symbolicNamesRegExp,
        lookbehind: true,
        greedy: true,
      },
      [styles.tokenLiteral]: {
        pattern: literalsRegExp,
        lookbehind: true,
        greedy: true,
      },
    };

    setGrammar(languageGrammar);
  }, [grammarSpec]);

  const splitMultilineNode = (
    match: string,
    openingTag: string,
    content: string,
    lastContentChar: string,
    closingTag: string,
    // eslint-disable-next-line max-params
  ) => {
    return content
      .split(NEW_LINE)
      .map((lineContent) => `${openingTag}${lineContent}${closingTag}`)
      .join(NEW_LINE);
  };

  const highlightCallback = useCallback(
    (code: string): string => {
      const highlighted = highlight(code, grammar, 'lang')
        .replace(NODE_REGEX, splitMultilineNode)
        .split(NEW_LINE)
        .map(assemblyLine)
        .join(NEW_LINE)
        .replaceAll('class="token', `class="${styles.token}`);

      return `<div class='${styles.highlightBackground}'><div class='${styles.highlightLineNumberBackground}'></div><div class='${styles.highlightLineBackground}'></div></div><table class='${styles.table}'><tbody>${highlighted}</tbody></table>`;
    },
    [grammar],
  );

  return {
    highlight: highlightCallback,
    grammar,
  };
};
