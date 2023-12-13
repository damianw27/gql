import React, { ReactElement } from 'react';
import parse from 'html-react-parser';
import { Grammar, highlight } from 'prismjs';
import css from '$components/examples-list/examples-list.module.css';
import styles from '$hooks/highlights/highlight.module.css';
import { Example } from '@gql-grammar/core';

export interface ExampleCodeProps {
  readonly example: Example;
  readonly grammar: Grammar;
}

const NEW_LINE = '\n';
const NODE_REGEX = /(<span[^>]*>)((.|\n)*?)(<\/span>)/gi;

export const ExampleCode = (props: ExampleCodeProps): ReactElement => {
  const assemblyLine = (line: string, index: number): ReactElement => (
    <tr key={`example-code-line-${index}`} data-testid={`ti-code-line-${index}`}>
      <td className={css.lineNumberCell}>{index + 1}</td>
      <td className={css.codeLine}>{parse(line)}</td>
    </tr>
  );

  const splitMultilineNode = (
    match: string,
    openingTag: string,
    content: string,
    lastContentChar: string,
    closingTag: string,
    // eslint-disable-next-line max-params
  ) => {
    return content
      .split('\n')
      .map((lineContent) => `${openingTag}${lineContent}${closingTag}`)
      .join('\n');
  };

  const getCodeLines = (input: string): ReactElement[] =>
    highlight(input, props.grammar, 'gql').replace(NODE_REGEX, splitMultilineNode).split(NEW_LINE).map(assemblyLine);

  return (
    <pre className={css.exampleCode} data-testid="ti-examples-list-item--code">
      <div className={styles.highlightBackground}>
        <div className={styles.highlightLineNumberBackground} />
        <div className={styles.highlightLineBackground} />
      </div>
      <table className={styles.table}>
        <tbody data-testid="ti-code-lines">{getCodeLines(props.example.code.trim())}</tbody>
      </table>
    </pre>
  );
};
