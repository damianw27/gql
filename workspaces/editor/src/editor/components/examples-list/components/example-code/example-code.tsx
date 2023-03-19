import React, { ReactElement } from 'react';
import parse from 'html-react-parser';
import { Grammar, highlight } from 'prismjs';
import { ExampleDefinition } from '@editor/components/examples-list/components/example-code/types/example-definition';
import css from './example-code.module.css';
import styles from '@editor/hooks/highlights/highlight.module.css';

export interface ExampleCodeProps {
  readonly example: ExampleDefinition;
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
