import React, { ReactElement } from 'react';
import parse from 'html-react-parser';
import { Grammar, highlight } from 'prismjs';
import css from './example-code.module.css';
import styles from '$hooks/highlights/highlight.module.css';
import { GqlExample } from '@gql-grammar/core';

export interface ExampleCodeProps {
  readonly example: GqlExample;
  readonly grammar: Grammar;
}

const NEW_LINE = '\n';

export const ExampleCode = (props: ExampleCodeProps): ReactElement => {
  const assemblyLine = (line: string, index: number): ReactElement => (
    <tr>
      <td className={css.lineNumberCell}>{index + 1}</td>
      <td className={css.codeLine}>{parse(line)}</td>
    </tr>
  );

  const getCodeLines = (input: string): ReactElement[] =>
    highlight(input, props.grammar, 'gql').split(NEW_LINE).map(assemblyLine);

  return (
    <pre className={css.exampleCode}>
      <div className={styles.highlightBackground}>
        <div className={styles.highlightLineNumberBackground} />
        <div className={styles.highlightLineBackground} />
      </div>
      <table className={styles.table}>
        <tbody>{getCodeLines(props.example.code.trim())}</tbody>
      </table>
    </pre>
  );
};
